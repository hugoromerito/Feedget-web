import { useTheme } from "next-themes";
import { Sun, Moon } from 'phosphor-react';

export function ToggleTheme() {
  const {theme, setTheme} = useTheme()
  
  return (
    <div className="mx-5">
      <button
        className="hover:brightness-75 ease-linear duration-200"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        
        {theme === 'light' 
          ?
          <Moon className="text-2xl text-[#202024] " weight="bold" />
          : 
          <Sun className="text-2xl  text-[#E1E1E6]" weight="bold"/>
        }
         
      </button>
    </div>
  )
}

