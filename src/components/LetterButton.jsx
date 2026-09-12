export default function LetterButton({ handleClick, item }) {
  return (
    <button
      onClick={handleClick}
      value={item}
      className="h-12 w-12 flex rounded-sm uppercase items-center justify-center cursor-pointer text-xl font-semibold text-black bg-yellow-300"
    >
      {item}
    </button>
  );
}
