import { languages } from "../languages";

export default function Languages({ wrongGuessCounter }) {
  const languagesList = languages.map((item, index) => {
    return (
      <span
        key={item.name}
        style={{ backgroundColor: item.backgroundColor, color: item.color }}
        className={`px-2 py-1 rounded-sm  ${
          index < wrongGuessCounter ? "opacity-15" : "opacity-100"
        }`}
      >
        {item.name}
      </span>
    );
  });
  return (
    <section className="flex flex-wrap justify-center gap-0.5">
      {languagesList}
    </section>
  );
}
