export default function Alphabet() {
  function handleClick() {}

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArr = alphabet.split("");
  
  const alphabetElement = alphabetArr.map((item) => (
    <button
      key={item}
      onClick={handleClick}
      className="h-12 w-12 flex rounded-sm uppercase items-center justify-center text-black ring-1 ring-white bg-yellow-400"
    >
      {item}
    </button>
  ));

  return (
    <section className="flex gap-2 flex-wrap justify-center">
      {alphabetElement}
    </section>
  );
}
