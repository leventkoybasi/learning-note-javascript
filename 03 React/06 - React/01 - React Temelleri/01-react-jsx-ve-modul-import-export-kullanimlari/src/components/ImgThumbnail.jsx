/* 
export default function ImageThumbnail({ imgSrc, imgAlt }) {
  return (
    <img
      src={imgSrc}
      alt={imgAlt}
      style={{
        padding: "4px",
        borderRadius: "8px",
        border: "1px solid #bdc3c7",
        width: "100%",
        boxSizing: "border-box",
      }}
    />
  );
}
*/
// Yukaridaki gibi sytyle bilgisini hem yerinde verebiliriz veya degiskene atayip obj dondurebiliriz.

export default function ImageThumbnail({ imgSrc, imgAlt }) {
  const imgStayle = {
    padding: "4px",
    borderRadius: "8px",
    border: "1px solid #bdc3c7",
    maxWidth: "100%",
    boxSizing: "border-box",
    marginBottom: "5px",
  };
  return <img src={imgSrc} alt={imgAlt} style={imgStayle} />;
}
