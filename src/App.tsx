import NavBar from "./components/navigation-bar/NavBar";
import FooterSection from "./components/footer/FooterSection";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <section className="h-full">
      <NavBar />
      <div id="detail">
        <Outlet/>
      </div>
      <FooterSection />
    </section>
  );
}

export default App;
