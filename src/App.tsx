import Main from "./components/Main.tsx";
import type { JSX } from "react";

export default function App(): JSX.Element {
  return (
    <div className="font-custom min-h-lvh overflow-hidden bg-neutral-800 px-4 py-4 text-center text-white md:py-8">
      <Main />
    </div>
  );
}
