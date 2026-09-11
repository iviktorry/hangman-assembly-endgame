import Header from "./components/Header";

export default function App() {
  return (
    <div className="min-h-lvh flex flex-col items-center gap-10 py-8 px-4 text-white bg-neutral-800 font-custom">
      <div className="max-w-md ">
        <Header />
      </div>
    </div>
  );
}
