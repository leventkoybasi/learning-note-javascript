import React from "react";
import "./App.css";
// import { ITEMS, SingleUser, UserList } from "./components/UserList";
// import UserList, { ITEMS, SingleUser } from "./components/UserList";
// import UserList, { ITEMS, SingleUser } from "./components/UserList";
import HebeleUserList, { ITEMS, SingleUser } from "./components/UserList";
import ButtonComponent from "./components/Buton";

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
      <ImageThumbnail />
      <HebeleUserList />
      <SingleUser />
      <SingleUser /> {/* Bu sekilde Degil Map Ile :) */}
      {/* 10 adet SIngleUSer Component Nasil Olusturulur. */}
      {[...Array(10)].map((item, index) => (
        <SingleUser key={index} />
      ))}
      {ITEMS.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      <ButtonComponent />
    </>
  );
  //veya
  // return (
  //   <React.Fragment>
  //     <div>Div Icerisindeki Bilgi</div>
  //     <h1>Merhaba</h1>;
  //   </React.Fragment>
  // );
}

// Yeni Component
function ImageThumbnail() {
  return (
    <img
      src="https://picsum.photos/id/36/600/250"
      alt=""
      style={{
        padding: "4px",
        borderRadius: "8px",
        border: "1px solid #bdc3c7",
      }}
    />
  );
}
export default App;
stlt;
