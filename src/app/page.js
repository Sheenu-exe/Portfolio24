import { Header } from "@/component/header";
import Hero from "./hero/page";
import Skills from "./tech stack/page";
import Projects from "./Projects/page";
import Experience from "./Experience/page";

export default function Home() {
  return (
    <div className="flex flex-col" data-theme="cupcake">
       <Header/>
     <Hero/>
    <Skills/>
    <Projects/>
    <Experience/>
    </div>
  );
}
