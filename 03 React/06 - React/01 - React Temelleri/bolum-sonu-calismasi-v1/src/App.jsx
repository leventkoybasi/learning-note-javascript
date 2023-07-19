import { useState } from "react";

function App() {
  // const pictureIdDs = [200, 201, 202, 203, 204];
  const pictureIdDs = [112, 234, 345, 456, 567];
  const [imageId, setimageId] = useState(pictureIdDs[0]);

  const getLoremPicsumImg = (id, width = 800, height = 450) =>
    `https://picsum.photos/id/${id}/${width}/${height}`;

  function handleClick(id) {
    setimageId(id);
  }

  return (
    <main className="container">
      <hgroup>
        <h2>Mini Gorsel Uygulamasi V1</h2>
        <h3>Gorsel : </h3>
      </hgroup>
      <img src={getLoremPicsumImg(imageId)} alt="" style={{ width: "100%" }} />
      <div className="grid" style={{ marginTop: "30px" }}>
        {pictureIdDs.map((item, index) => (
          <div key={index}>
            <img
              onClick={() => handleClick(item)}
              src={getLoremPicsumImg(item, 100, 100)}
              alt=""
            />
          </div>
        ))}
      </div>
    </main>
  );
}

// ESKI YONTEM (5 ADET GORSEL DIONEMEK)
// {[...Array(5)].map((item, index) => (
//   <div key={index}>
//     <img
//       onClick={() => handleClick(200 + index)}
//       src={getLoremPicsumImg(200 + index, 100, 100)}
//       alt=""
//     />
//   </div>

export default App;
