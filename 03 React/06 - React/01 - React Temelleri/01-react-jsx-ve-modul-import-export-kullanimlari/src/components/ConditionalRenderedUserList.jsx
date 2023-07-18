// https://react.dev/learn/conditional-rendering

import { USERS } from "../data";

function ConditionalRenderedUserList(props) {
  if (props.isActive === false) {
    //notActive -> false
    // return null;
    // return <></> // bu ucu de bos bilgi gonderir...
    return <></>;
  }
  if (props.isLoading) {
    return (
      <div style={{ color: "red", fontSize: "30px" }}>
        <b>Veriler Yukleniyor...</b>
      </div>
    );
  }
  return (
    <>
      <h2>Conditional Rendered User List</h2>
      <h2>Koşullu Oluşturulan Kullanıcı Listesi</h2>
      <ul>
        {USERS.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </>
  );
}

export default ConditionalRenderedUserList;
