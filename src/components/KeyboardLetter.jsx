export default function KeyboardLetter({ handleClick, item, style }) {
  return (
    <button
      onClick={handleClick}
      value={item}
      className={`h-12 w-12 flex rounded-sm uppercase items-center justify-center cursor-pointer text-xl font-semibold text-black bg-yellow-300 ${style}`}
    >
      {item}
    </button>
  );
}
