import { useState } from "react";

export default function Word() {
  const [word, setWord] = useState("react");

  const arr = word.split("");

  const wordArr = arr.map((item, index) => (
    <span
      key={index}
      className="text-xl uppercase w-12 h-12 flex items-center justify-center bg-neutral-700 border-b-2"
    >
      {item}
    </span>
  ));
  return <section className="flex gap-1">{wordArr}</section>;
}
