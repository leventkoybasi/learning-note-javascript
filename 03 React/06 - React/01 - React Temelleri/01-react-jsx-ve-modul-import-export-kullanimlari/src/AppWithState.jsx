export default function AppWithState() {
  const counter = 0;

  function handleClick() {
    console.log("HandleClick Buttonuna Tiklandi...");
  }

  return (
    <>
      <h1>State Konusunu Burada Isliyoruz...</h1>
      <h2>Counter : </h2>
      <button onClick={() => console.log("OnClick Buttona Tiklandi...")}>
        Counter Bilgisini Arttir
      </button>
      <button onClick={handleClick}>Counter Bilgisini Arttir</button>
    </>
  );
}
