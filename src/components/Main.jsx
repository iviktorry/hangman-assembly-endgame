import Header from "./Header";
import Languages from "./Languages";
import Status from "./Status";
import Word from "./Word";

export default function Main() {
  return (
    <main className="max-w-md flex flex-col items-center gap-10 mx-auto">
      <Header />
      <Status />
      <Languages />
      <Word />
    </main>
  );
}
