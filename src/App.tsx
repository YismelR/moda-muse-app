import { useState } from "react";
import NavBar from "./components/navigation-bar/NavBar";
import FooterSection from "./components/FooterSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <NavBar />
      {/* <FooterSection /> */}
    </section>
  );
}

export default App;
