export default function Status() {
  const text = "test";
  return (
    <div
      className={`h-15 flex items-center justify-center mt-4 w-full italic text-xl rounded-md ${text !== "" ? "bg-purple-400/70" : ""}`}
    >
      <p>{text}</p>
    </div>
  );
}
