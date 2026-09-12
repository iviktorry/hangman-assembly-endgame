export default function KeyboardLetter({ handleClick, item, style }) {
  return (
    <button
      onClick={handleClick}
      value={item}
      className={`h-10 w-8 md:h-12 md:w-12 flex rounded-xs md:rounded-sm uppercase items-center justify-center cursor-pointer text-xl font-semibold text-black ${style}`}
    >
      {item}
    </button>
  );
}
