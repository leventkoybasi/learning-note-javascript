import React from "react";

function App() {
  // 1: return ederken HTML yapisini return edebilirsin
  // 2: return ile sadece bir parent element gonderebilirsin
  // 3: fragment kullanilabilir <> ... </> or <<React.Fragment>> kullanilacaksa react import edilmeli.
  // 4: Bir etiketin mutlaka bitisi olmalisir. (<etiket>..<etiket/>)

  const userName = "Levent";
  const users = ["Lorem", "Ipsum", "Dolor"];

  return (
    <>
      <div>Div Icerisindeki Bilgi</div>
      <h1>
        Merhaba (2 + 2 String Bilgi) {2 + 2} {userName}
      </h1>
      <h2>Kullanicilarin Sayisi : {users.length}</h2>
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
export default App;
//https://react.dev/learn/writing-markup-with-jsx
