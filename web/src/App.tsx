import { ThemeProvider } from "next-themes";
import { Header } from "./components/Site/Header/Header";
import { Home } from "./components/Site/Sections/Home";
import { Widget } from "./components/Widget/Widget";


export function App() {
  return (
    <>
      <ThemeProvider attribute="class">
        <Header />
        <Home />
        <Widget />
      </ThemeProvider>
    </>
  );
}
