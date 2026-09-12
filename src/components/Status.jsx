export default function Status() {
  const text = "test";
  return (
    <section
      className={`h-15 flex items-center justify-center w-full italic text-xl rounded-md ${text !== "" ? "bg-purple-400/70" : ""}`}
    >
      <p>{text}</p>
    </section>
  );
}
