export default function KeyboardLetter({
  handleClick,
  item,
  style,
  gameOver,
  clickedLetters,
}) {
  return (
    <button
      onClick={handleClick}
      value={item}
      disabled={gameOver}
      aria-label={`Letter ${item}`}
      aria-disabled={clickedLetters.includes(item)}
      className={`h-10 w-8 md:h-12 md:w-12 flex rounded-xs md:rounded-sm uppercase items-center justify-center disabled:opacity-30 cursor-pointer text-xl font-semibold text-black  ${style}`}
    >
      {item}
    </button>
  );
}
