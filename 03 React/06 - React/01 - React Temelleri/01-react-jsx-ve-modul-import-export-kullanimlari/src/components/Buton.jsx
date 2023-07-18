// export default function Button() {
//   return <button>Button Component</button>;
// }

// 1. Yontem
/*export default function Button(props) {
  // props = object
  console.log(props);
  return (
    <button
      className={props.className}
      info={props.info}
      data-id={props.dataId}
    >
      Button Component
    </button>
  );
} */

// 2. Yontem
/*export default function Button(props) {
  const { className, info, dataId } = props;
  return (
    <button className={className} info={info} data-id={dataId}>
      Button Component
    </button>
  );
} */

// 3. Yontem
export default function Button({ className, info, dataId }) {
  return (
    <button className={className} info={info} data-id={dataId}>
      Button Component
    </button>
  );
}

// export default Button;
