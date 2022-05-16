import { NlwReturnSvg } from "../../../assets/nlw";
import { RocketseatSvg } from "../../../assets/rocketseat";
import { ToggleTheme } from "../../ToggleTheme/ToggleTheme";


export function Header() {
  return (
    <header className="fixed w-full h-20 border-b-[1px] border-solid border-gray-800 bg-zinc-300 dark:bg-[#202024] ease-in duration-300">
      <div className="max-w-[1120] h-20 my-0 mx-auto py-0 px-8 flex items-center justify-between ">
        <NlwReturnSvg />
        <ToggleTheme />
        <RocketseatSvg />
      </div>
    </header>
  );
}