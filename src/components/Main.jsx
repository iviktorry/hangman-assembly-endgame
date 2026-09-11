import Header from "./Header";
import Languages from "./Languages";
import Status from "./Status";

export default function Main() {
  return (
    <main className="max-w-md flex flex-col items-center gap-6 mx-auto">
      <Header />
      <Status />
      <Languages />
    </main>
  );
}
