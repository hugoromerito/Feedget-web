import successImage from '../../../../assets/widgetSvg/success.svg'
import { CloseButton } from '../../CloseButton';

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({onFeedbackRestartRequested}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px] font-[Inter] font-medium">
        <img src={successImage} alt='' className="w-10 h-10" />
        <span className='text-xl mt-2'>Agradecemos o feedback!</span>

        <button
          className="py-2 px-6 mt-6 rounded-md border-transparent text-sm leading-6 
               bg-zinc-100      hover:bg-zinc-200      focus:ring-offset-white
          dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:focus:ring-offset-zinc-900
          focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-brand-500 transition-colors "
          type="button"
          onClick={onFeedbackRestartRequested}
        >
          <span>Quero enviar outro</span>
        </button>
      </div>
    </>
  );
}