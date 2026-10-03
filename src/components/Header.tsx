import type { JSX } from "react";

export default function Header(): JSX.Element {
  return (
    <div className="flex w-full flex-col items-center">
      <h1 className="text-2xl">Assembly: Endgame</h1>
      <p className="text-neutral-400">
        Guess the word in under 8 attempts to keep the programming world safe
        from Assembly!
      </p>
    </div>
  );
}
