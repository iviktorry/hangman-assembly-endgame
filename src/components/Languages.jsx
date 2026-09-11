import { languages } from "../languages";

export default function Languages() {
  return (
    <section className="flex flex-wrap justify-center gap-0.5">
      {languages.map((item) => (
        <span
          key={item.name}
          style={{ backgroundColor: item.backgroundColor, color: item.color }}
          className="px-2 py-1 rounded-md"
        >
          {item.name}
        </span>
      ))}
    </section>
  );
}
