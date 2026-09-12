export default function NewGameButton({
  setClickedLetters,
  setWord,
  wordsArray,
}) {
  function handleReset() {
    setClickedLetters([]);
    setWord(() => wordsArray[Math.floor(Math.random() * wordsArray.length)]);
  }
  return (
    <button
      onClick={handleReset}
      className="max-w-56 w-full py-3 rounded-md text-xl text-semibold bg-blue-400 cursor-pointer"
    >
      New game
    </button>
  );
}
