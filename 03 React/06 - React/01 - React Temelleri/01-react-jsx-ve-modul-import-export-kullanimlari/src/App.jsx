import React from "react";
import "./App.css";
// import { ITEMS, SingleUser, UserList } from "./components/UserList";
// import UserList, { ITEMS, SingleUser } from "./components/UserList";
// import UserList, { ITEMS, SingleUser } from "./components/UserList";
// default ile export edilenlerin isimlerini degistirebilirsin UserList ile Hebele User olarak degistirildi
import HebeleUserList, { ITEMS, SingleUser } from "./components/UserList";
import ButtonComponent from "./components/Buton";
import ImageThumbnail from "./components/ImgThumbnail";
// import IMAGES from "./data/images";
import { IMAGES } from "./data";
import Card from "./components/Card";
import ConditionalRenderedUserList from "./components/ConditionalRenderedUserList";
import { INFO } from "./data";

function App() {
  //https://react.dev/learn/writing-markup-with-jsx

  // 1: return ederken HTML yapisini return edebilirsin (JSX)
  // 2: return ile sadece bir parent element gonderebilirsin
  // 3: fragment kullanilabilir <> ... </> or <<React.Fragment>> kullanilacaksa react import edilmeli.
  // 4: Bir etiketin mutlaka bitisi olmalisir.(<etiket>..</etiket> or <etiket/>)
  // 5: Class bilgisi className diye yazilmali...
  // 6: return icinde aciklamalar suslu parantez ile yazilmali
  // 7: style bilgisi {js icinde {obj olacak sekilde olmalidir}} -> ex style={{backgroundColor: "yellow", listStyle: "none", margin: 0, padding: 0,}}
  // 8: map kullanirken mutlaka key bilgisini gondermemiz gerekir.
  // 9: React Component'lerinin ilk harfleri herzaman buyuk olmali. Birdern fazla kelime ise herkelimenin ilk harfleri buyuk olmali.

  const userName = "Levent";
  const users = ["Lorem", "Ipsum", "Dolor"];

  const products = [
    { id: 1, name: "Macbook Pro 14", inStock: false },
    { id: 2, name: "Macbook Pro 13", inStock: true },
    { id: 3, name: "IiPad", inStock: false },
    { id: 4, name: "Lenovo 14", inStock: true },
    { id: 5, name: "Dell XPS", inStock: true },
  ];

  const mapUsers = users.map((item, index) => <li key={index}>{item}</li>);
  const isActive = true;
  const styles = {
    h2Style: { backgroundColor: "blue", fontSize: "24px" },
  };

  return (
    <>
      <div className="bg-green">Div Icerisindeki Bilgi</div>
      <h1 style={{ backgroundColor: `${isActive ? "green" : "red"}` }}>
        Merhaba (2 + 2 String Bilgi...) {2 + 2} {userName}
      </h1>
      <h2 style={styles.h2Style}>Kullanicilarin Sayisi : {users.length}</h2>
      <img src="https://picsum.photos/id/26/200/300" alt="" />
      <div className="bg-green">bg-red Class ile Eklendi</div>
      {/* Bu kullanim dogru degil */}
      <ul>
        <li>{users[0]}</li>
        <li>{users[1]}</li>
        <li>{users[2]}</li>
      </ul>
      {/* Dogru Yondetem V1 */}
      <ul>
        {users.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* Dogru Yondetem V2 */} {/* Ve Style Kullanimi */}
      <ul
        style={{
          backgroundColor: "yellow",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {mapUsers}
      </ul>
      <ul>
        {products
          .filter((item) => item.inStock)
          .map((item) => (
            <li key={item.id}>{item.name.toLocaleUpperCase()}</li>
          ))}
      </ul>
      {/* {ImageThumbnail()} veya */}
      {/* <ImageThumbnail /> */}
      <HebeleUserList /> {/*<UserList /> ismi degistirilmisti !*/}
      <SingleUser />
      <SingleUser /> {/* Bu sekilde Degil Map Ile :) */}
      {/* 10 adet SIngleUSer Component Nasil Olusturulur. */}
      {[...Array(10)].map((item, index) => (
        <SingleUser key={index} />
      ))}
      {ITEMS.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      <hr />
      <ButtonComponent className="btn btn-primary" info="deneme" dataId="1" />
      <hr />
      <ImageThumbnail imgSrc={"https://picsum.photos/id/36/600/250"} />
      <hr />
      {IMAGES.map((item, index) => (
        <ImageThumbnail imgSrc={item} key={index} imgAlt="" />
      ))}
      <hr />
      {/* LK YONTEM */}
      <Card
        title="Lorem Ipsum Dolor"
        imgSrc={"https://picsum.photos/id/69/400/250"}
        imgAlt="Card Alt Bilgisi - Children Yok"
      />
      <hr />
      {/* IKINCI YONTEM */}
      {/* Eger bir component icerisine bilgi etiket olarak gonderiliyor ise  probs.children olarak kullaniliyor. Bu bilgiler react componenti icine children olarak gidiyor. */}
      <Card
        title="Lorem Ipsum Dolor"
        imgSrc={"https://picsum.photos/id/68/400/250"}
        imgAlt="Card Alt Bilgisi"
        dataId="112"
      >
        <p>Lorem, ipsum dolor.</p>
        <p>Commodi, sed modi.</p>
        <p>Tenetur, veritatis commodi!</p>
      </Card>
      <hr />
      <ConditionalRenderedUserList isActive={true} isLoading={false} />
      {/*Durum 1 */}
      <ConditionalRenderedUserList isActive={true} isLoading={true} />
      {/*Durum 2 */}
      <hr />
      <h2>Optiopnal Chaning</h2>
      <p>
        NOT: INFO icerisindeki product bilgisi yok. Bu yuzden ? kulaniyoruz,
        yanlis yazilandan dolayi hata almamak icin...
      </p>
      {INFO.product?.map((product, index) => (
        <li key={index}> {product} </li>
      ))}
      {INFO.productzzzzz?.map((product, index) => (
        <li key={index}> {product} </li>
      ))}
      <hr />
      {/* //veya
  // return (
  //   <React.Fragment>
  //     <div>Div Icerisindeki Bilgi</div>
  //     <h1>Merhaba</h1>;
  //   </React.Fragment>
  // ); */}
    </>
  );
}

// Yeni Component
// function ImageThumbnail() {
//   return (
//     <img
//       src="https://picsum.photos/id/36/600/250"
//       alt=""
//       style={{
//         padding: "4px",
//         borderRadius: "8px",
//         border: "1px solid #bdc3c7",
//       }}
//     />
//   );
// }
export default App;
