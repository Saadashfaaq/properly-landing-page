import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ListHouse from "./components/ListHouse";
import BottomSection from "./components/BottomSection";

export default function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>

      <main>
        <ListHouse />
      </main>

      <footer>
        <BottomSection />
      </footer>
    </>
  );
}
