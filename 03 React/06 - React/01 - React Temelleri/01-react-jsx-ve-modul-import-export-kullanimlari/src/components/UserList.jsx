const ITEMS = [1, 2, 3];

function UserList() {
  return (
    <>
      <h2>Kullanici Listesi</h2>
      <ul>
        <li>Lorem.</li>
        <li>Quisquam!</li>
        <li>Iste.</li>
        <li>Impedit.</li>
        <li>Esse.</li>
      </ul>
    </>
  );
}
// Bir Component Dosyasi Icerisinde Genellikle Bir Adet Component Bekleriz :))
function SingleUser() {
  //burda aciklama yazabiliriz ama return icinde yazmak icin {/* */} icinde yazmamiz lazim
  return <h3>SingleUser Component Icindeki Bilgi</h3>;
}

export { ITEMS, SingleUser };
export default UserList;
