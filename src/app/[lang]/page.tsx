import Banner from "../../components/home/Banner";
import ContentBelowBanner from "../../components/home/ContentBeLowBanner";
import Infor from "../../components/home/Infor";
import About from "../../components/home/About";
import Idol from "../../components/home/Idol";
import Benefit from "../../components/home/Benefit";
import Solution from "../../components/home/Solution";
// import Blog from "../components/home/Blog"; //todo blogs
import Contact from "../../components/home/Contact";
import Register from "../../components/home/Register";
import { getDictionary, Home, Module } from "@/utils/getDictionaries";
import { Locale } from "@/config/localeConfig";
import ScrollSpy from "@/components/common/ScrollSpy";

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const { hero, vision, mission, coreValues, aboutCompany, stats, kol, benefits, businessSolution, registerForm } =
    getDictionary(lang, Module.HOME) as Home;
  return (
    <div>
      <ScrollSpy />
      <section
        id="homepage"
        className="bg-[url('/images/bg-banner.png')] bg-cover bg-no-repeat"
      >
        <Banner hero={hero} />
      </section>
      <section
        id="feature"
        className="bg-gray relative lg:h-[441px]"
      >
        <ContentBelowBanner
          vision={vision}
          mission={mission}
          coreValues={coreValues}
        />
      </section>
      <section id="introduce">
        <About about={aboutCompany} />
      </section>
      <section id="infor">
        <Infor stats={stats} />
      </section>
      <section id="idol">
        <Idol title={kol.title} />
      </section>
      <section id="benefit">
        <Benefit benefit={benefits} />
      </section>
      <section
        id="solution"
        className="bg-gray"
      >
        <Solution solutions={businessSolution} />
      </section>
      {/* <Blog /> */}
      <section
        id="supporter"
        className="bg-gray flex items-center justify-center"
      >
        <Contact />
      </section>
      <section
        id="contact"
        className="mx-auto bg-[url('/images/bg-form.png')] bg-cover bg-no-repeat"
      >
        <Register registerForm={registerForm} />
      </section>
    </div>
  );
}
