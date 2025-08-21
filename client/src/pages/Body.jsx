import { Routes, Route } from "react-router-dom";

import Careers from "./careers/Careers";
import Contact from "./contact/Contact";
import FAQ from "./faq/FAQ";
import Game1 from "./games/game1/Game1";
import Game2 from "./games/game2/Game2";
import Game3 from "./games/game3/Game3";
import Games from "./games/Games";
import Home from "./home/Home";
import News from "./news/News";
import PrivacyPolicy from "./privacyPolicy/PrivacyPolicy";
import Support from "./support/Support";
import TermsAndConditions from "./termsAndConditions/TermsAndConditions";
import "./Body.css";

function Body({ borderState, toggleBorder }) {
  console.log("Hello world! (Body.jsx)");
  const bodyRoot = borderState ? 'bodyRootBorder' : 'bodyRoot';
  
  return (
    <>
      <div className={bodyRoot}>
        <Routes>
          <Route path="/" element={<Home borderState={borderState} toggleBorder={toggleBorder} />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/games" element={<Games borderState={borderState} />} />
          <Route path="/games/game1" element={<Game1 />} />
          <Route path="/games/game2" element={<Game2 />} />
          <Route path="/games/game3" element={<Game3 />} />
          <Route path="/news" element={<News />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
      </div>
    </>
  );
};

export default Body;
