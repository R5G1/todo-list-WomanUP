import { useState, useEffect } from 'react';

function ShowImage({ file }) {
  const [image, setImage] = useState('');

  const reader = new FileReader();
  reader.onload = () => {
    setImage(reader.result.toString());
  };
  reader.readAsDataURL(file);
  return (
    <>
      <p>{image ? <img src={image} width="150" /> : 'null'}</p>
    </>
  );
}
export default ShowImage;
