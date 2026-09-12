export default function Alphabet() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const alphabetArr = alphabet.split("");

  const alphabetElement = alphabetArr.map((item) => (
    <span key={item}>{item}</span>
  ));

  return <section>{alphabetElement}</section>;
}
