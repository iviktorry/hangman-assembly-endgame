import Keyboard from "./Keyboard";
import Header from "./Header";
import Languages from "./Languages";
import Status from "./Status";
import Word from "./Word";
import NewGameButton from "./NewGameButton";

export default function Main() {
  return (
    <main className="max-w-xl flex flex-col items-center gap-10 mx-auto">
      <div className="max-w-md flex flex-col items-center gap-10">
        <Header />
        <Status />
        <Languages />
        <Word />
      </div>
      <Keyboard />
      <NewGameButton />
    </main>
  );
}
