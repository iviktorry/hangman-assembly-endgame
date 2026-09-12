export default function LetterButton({ handleClick, item }) {
  return (
    <button
      onClick={handleClick}
      value={item}
      className="h-12 w-12 flex rounded-sm uppercase items-center justify-center text-black ring-1 ring-white bg-yellow-400"
    >
      {item}
    </button>
  );
}
