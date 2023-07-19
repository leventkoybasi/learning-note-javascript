import MultipleImages from "./components/MultipleImages";
import Counter from "./components/counter";
import CardWithState from "./components/CardWithState";
export default function AppWithState() {
  return (
    <>
      <h1>State Konusunu Burada Isleyecegiz</h1>
      <Counter />
      <hr />
      <MultipleImages />
      <hr />
      <CardWithState />
      <CardWithState />
      <CardWithState />
      <CardWithState />
    </>
  );
}
