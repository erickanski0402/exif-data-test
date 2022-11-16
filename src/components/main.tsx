import React from 'react';
import useAddPhoto from '../hooks/useAddPhoto/useAddPhoto.ts';

export const Main = (): React.FC => {
  const {addPhoto} = useAddPhoto();
  const onChange = (e) => addPhoto({e, clickedTime: Date.now()});
  const onClick = () => {
    document.getElementById('picker').click();
  }
  return (
    <div className="App">
      <button onClick={onClick}>click me</button>
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
  )
};

export default Main;
