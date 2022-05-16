import html2canvas from "html2canvas";
import { backgroundSize } from "html2canvas/dist/types/css/property-descriptors/background-size";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { LoadingScreenshot } from "../LoadingScreenshot";

interface ScreenButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({
  onScreenshotTook,
  screenshot
}: ScreenButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleScreenshot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');
    
    onScreenshotTook(base64image)
    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button" 
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end 
             text-zinc-500      hover:text-zinc-800 
        dark:text-zinc-400 dark:hover:text-zinc-100
        transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
        onClick={() => onScreenshotTook(null)}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      className="p-2 rounded-md border-transparent 
           bg-zinc-100      hover:bg-zinc-200      focus:ring-offset-white 
      dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:focus:ring-offset-zinc-900 
      transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
      type="button"
      onClick={handleScreenshot}
    >
      { isTakingScreenshot ? <LoadingScreenshot /> : <Camera className="w-6 h-6" /> }
    </button>
  );
}