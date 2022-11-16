import React from 'react';
import ExifReader, { IccTags, Tags, ValueTag, XmpTag, XmpTags } from 'exifreader';

export default function App() {
  const parseDate = (s) => {
    var b = s[0].split(/\D/);
    var dt = new Date(b[0], b[1] - 1, b[2], b[3], b[4], b[5]);
    return dt;
  }
  var clickedTime = 0;
  const onChange = (e) => {
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
  };
  return (
    <div className="App">
      <input
        hidden
        type="file"
        id="picker"
        accept="image/*"
        capture={false}
        onChange={onChange}
        />
      <div id="fileName"></div>
      <div id="dateTimeOriginal"></div>
      <div id="dateTimeOutput"></div>
      <pre id="exif">Exif Here</pre>
    </div>
  );
}
