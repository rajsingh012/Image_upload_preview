import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
    setImageUrls(newImageUrls);
  }, [images])

  const onImageChange = (event) => {
    setImages([...event.target.files])
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="image_upload-wrap">
          <div className="image_uplaod-body">
            <h3 className="image_uplaod-heading">UPLOAD IMAGES</h3>
            <input type="file"
              className="image_uplaod-input"
              onChange={(e) => onImageChange(e)}
              multiple
            />
            <div className="image_uplaod--imgwrap">
              {imageUrls.map((imgSrc, key) =>
                <div className="image_uplaod-flex">
                  <img className="image_uplaod--images" key={key} src={imgSrc} />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
