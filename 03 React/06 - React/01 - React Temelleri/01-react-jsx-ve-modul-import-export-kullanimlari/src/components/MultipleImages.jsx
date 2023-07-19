import { useState } from "react";
import ImageThumbnail from "./ImgThumbnail";

// {[...Array(10)].map((item, index) => <SingleUser key={index} />)}
//useState Ornegi:

export default function MultipleImages() {
  const [imagesCounter, setImageCounter] = useState(1);
  /* function handleAddImage() {
    setImageCounter((prev) => prev +1));
  } */ //Bu sekilde de yapabiliriz...
  /*
  function handleAddImage() {
    setImageCounter(imagesCounter + 1);
  }
  function handleSubtrackImage() {
    if (imagesCounter > 0) {
      setImageCounter(imagesCounter - 1);
    }
  }
  */
  function handleClick(event) {
    console.log(event.target.id);

    event.target.id === "add"
      ? setImageCounter(imagesCounter + 1)
      : setImageCounter(imagesCounter > 0 ? imagesCounter - 1 : imagesCounter);
  }
  return (
    <>
      <button id="add" onClick={handleClick}>
        Yeni Gorsel Ekle
      </button>
      <button id="subtrack" onClick={handleClick}>
        Gorsel Sil
      </button>

      <hr />
      {[...Array(imagesCounter)].map((item, index) => (
        <ImageThumbnail
          key={index}
          imgSrc={`https://picsum.photos/id/${100 + index}/100/100`}
        />
      ))}
    </>
  );
}
