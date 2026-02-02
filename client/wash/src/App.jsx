import { useRef } from "react";
import { Book } from "./components/Book/Book";
import { Complex } from "./components/Complex/Complex";
import { Header } from "./components/Header/Header";
import { HowItWork } from "./components/HowItWork/HowItWork";
import { Main } from "./components/Main/Main";
import { Reviwes } from "./components/Reviwes/Reviwes";
import { Services } from "./components/Services/Services";
import { WhyChooseUs } from "./components/WhyChooseUs/WhyChooseUs";
import { Contacts } from "./components/Contacts/Contacts";
import { Gallery } from "./components/Gallery/Gallery";

function App() {
  const bookRef = useRef(null);
  const moreRef = useRef(null);

  const handleNavClick = (id) => {
    if (id === "book" && bookRef.current) {
      bookRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (id === "services" && moreRef.current) {
      moreRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Header onNavClick={handleNavClick} />
      <Main bookRef={bookRef} moreRef={moreRef} />
      <Services moreRef={moreRef} />
      <WhyChooseUs />
      <Gallery />
      <Complex />
      <HowItWork />
      <Reviwes />
      <Book bookRef={bookRef} />
      <Contacts />
    </>
  );
}

export default App;
