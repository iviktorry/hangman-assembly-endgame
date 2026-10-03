import { languages } from "../languages";
import type { JSX } from "react";
import type { Language } from "../languages.ts";

type LanguagesProps = {
  wrongGuessCounter: number;
};

export default function Languages({
  wrongGuessCounter,
}: LanguagesProps): JSX.Element {
  const languagesList = languages.map(
    (item: Language, index: number): JSX.Element => {
      return (
        <span
          key={item.name}
          style={{ backgroundColor: item.backgroundColor, color: item.color }}
          className={`rounded-sm px-2 py-1 ${
            index < wrongGuessCounter ? "opacity-15" : "opacity-100"
          }`}
        >
          {item.name}
        </span>
      );
    },
  );
  return (
    <section className="flex flex-wrap justify-center gap-0.5">
      {languagesList}
    </section>
  );
}
