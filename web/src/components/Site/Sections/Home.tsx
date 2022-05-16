import { WidgetSvg } from '../../../assets/widgetSvg';
import { GithubButton } from '../GithubButton/GithubButton';

export function Home() {
  return (
    <>
      <section className="max-w-[1120px] my-0 mx-auto py-0 px-8 h-screen flex items-center justify-between">
        <div className="max-w-[600px] mt-20">
          <span className="text-2xl font-bold" >👏 Olá, Seja Bem-Vindx à milha extra do Feedget</span>
          <h1 className="text-[3rem] leading-[4.5rem] font-bold mt-10">Aplicação desenvolvida durante a 8° edição do NLW <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5a1cec] via-[#db1d8f] to-[#e45447]
          dark:from-[#8257E5] dark:via-[#D72891] dark:to-[#F1594B]
          ">Return </span>.</h1>
          <p className="text-2xl leading-9 mt-6">
            Veja todo o código visitando meu <br /> repositório no Github.
          </p>
          <GithubButton />
        </div>

        <WidgetSvg />
      </section>
    </>
  );
}
