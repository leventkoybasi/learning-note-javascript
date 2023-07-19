export default function CardFooter(props) {
  return (
    <>
      <h2>Card Footer ( {props.like} )</h2>
      <button onClick={props.handleClick}>Footer {"->"} Like</button>
      <button onClick={() => props.setLike((prev) => prev + 1)}>
        Footer setLike Ile Degistir{"->"} Like
      </button>
    </>
  );
}
