import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Upgrade from "./components/Upgrade";
import BottomSection from "./components/BottomSection";

export default function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>

      <main>
        <Upgrade />
      </main>

      <footer>
        <BottomSection />
      </footer>
    </>
  );
}
