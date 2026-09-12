export default function Word() {
  const str = "react";
  const arr = [...str];

  const word = arr.map((item, index) => <span key={index}>{item}</span>);
  return <div>{word}</div>;
}
