import ImageThumbnail from "./ImgThumbnail";

// export default function Card({ title, imgSrc, imgAlt, ...rest }) { veya
export default function Card({ title, imgSrc, imgAlt, children, ...rest }) {
  console.log(rest);
  const cardStyle = {
    padding: "10px",
    border: "1px solid #bdc3c7",
    boxSizing: "border-box",
    marginBottom: "5px",
    borderRadius: "8px",
  };
  return (
    <div style={cardStyle}>
      <ImageThumbnail imgSrc={imgSrc} imgAlt={imgAlt} />
      <h2>{title}</h2>
      {rest.dataId}
      {/* {rest.children} */}
      {children}
    </div>
  );
}
