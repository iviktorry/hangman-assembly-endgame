export default function KeyboardLetter({ handleClick, item, style, gameOver }) {
  return (
    <button
      onClick={handleClick}
      value={item}
      disabled={gameOver}
      className={`h-10 w-8 md:h-12 md:w-12 flex rounded-xs md:rounded-sm uppercase items-center justify-center disabled:opacity-40 cursor-pointer text-xl font-semibold text-black  ${style}`}
    >
      {item}
    </button>
  );
}
