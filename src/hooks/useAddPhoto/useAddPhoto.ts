import {useCallback} from 'react';
import ExifReader from 'exifreader';
import {parseDate} from '../../utils/utils.ts';

export const useAddPhoto = () => {
  const addPhoto = useCallback(({e, clickedTime}) => {
    const fileNameOutput = document.getElementById("fileName");
    const pre = document.getElementById("exif");
    const dto = document.getElementById("dateTimeOriginal");
    const dtoutput = document.getElementById("dateTimeOutput");
    ExifReader
      .load(e.target.files[0])
      .then((tags) => {
        console.log(tags);
        pre.innerText = JSON.stringify(tags, null, 2);
        if (!!tags.DateTimeOriginal) {
          const dateTaken = tags.DateTimeOriginal.value;
          dto.innerText = dateTaken;
          const dateTakenAsDate = parseDate(dateTaken);
          console.log(dateTakenAsDate);
          if (clickedTime.getTime() < dateTakenAsDate.getTime()) {
            dtoutput.innerText = "Photo taken live!";
          } else {
            dtoutput.innerText = "Photo from camera roll";
          }
        }
      })
      .catch((err) => (err.innerText = err));
    fileNameOutput.innerText = e.target.files[0].name;
  }, []);
  return {
    addPhoto
  }
}

export default useAddPhoto;
