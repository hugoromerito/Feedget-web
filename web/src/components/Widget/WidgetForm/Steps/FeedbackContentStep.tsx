import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { api } from "../../../../lib/api";
import { CloseButton } from "../../CloseButton"
import { LoadingScreenshot } from "../../LoadingScreenshot";
import { ScreenshotButton } from "../ScreenshotButton"

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {

  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    setIsSendingFeedback(true);

    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot,
    });

    setIsSendingFeedback(false);
    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute
            text-zinc-500 hover:text-zinc-800
            dark:text-zinc-400 dark:hover:text-zinc-100
            transition-colors"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2 font-[Inter] font-medium">
          <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="h-6 w-6" />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm font-[Inter] font-normal focus:border-brand-500 focus:ring-brand-500
          placeholder-zinc-500 text-zinc-800 border-zinc-300  
          scrollbar-thumb-zinc-200
          
          dark:placeholder-zinc-400 dark:text-zinc-100 dark:border-zinc-600 
          dark:scrollbar-thumb-zinc-700
          bg-transparent rounded-md focus:outline-none focus:ring-1 resize-none scrollbar-thin  scrollbar-track-transparent"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={event => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2 font-[Inter] font-medium">
          <ScreenshotButton
          screenshot={screenshot}
            onScreenshotTook={ setScreenshot }
          />

          <button
            type="submit"
            disabled={comment.length === 0 || isSendingFeedback}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-zinc-100
            focus:ring-offset-white 
            dark:focus:ring-offset-zinc-900
            focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            {isSendingFeedback ? <LoadingScreenshot /> : 'Enviar feedback' }
          </button>
        </footer>
      </form>
    </>
  );
}