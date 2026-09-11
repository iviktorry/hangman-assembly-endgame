import Header from "./components/Header";
import Status from "./components/Status";

export default function App() {
  return (
    <div className="min-h-lvh py-8 px-4 flex flex-col items-center text-center text-white bg-neutral-800 font-custom">
      <div className="max-w-md">
        <Header />
        <Status />
      </div>
    </div>
  );
}
