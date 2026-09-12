export default function Word() {
  const str = "react";
  const arr = [...str];

  const word = arr.map((item, index) => (
    <span
      key={index}
      className="text-xl uppercase w-12 h-12 flex items-center justify-center bg-neutral-700 border-b-2"
    >
      {item}
    </span>
  ));
  return <div className="flex gap-1">{word}</div>;
}
