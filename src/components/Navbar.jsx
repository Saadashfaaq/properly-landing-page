import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false); // mobile menu

  /* Hide on scroll down, show on scroll up */
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 80) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* Scroll spy */
  useEffect(() => {
    const sections = ["about", "portfolio", "information"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `block py-2 transition-colors ${
      active === id ? "text-blue-500" : "text-gray-600 hover:text-blue-500"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container-page flex items-center justify-between py-5">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-semibold">
          <span className="text-blue-500">▲</span>
          <span>
            Properly<span className="text-blue-500">.</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <a href="#about" className={linkClass("about")}>
              About Us
            </a>
          </li>
          <li>
            <a href="#portfolio" className={linkClass("portfolio")}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#information" className={linkClass("information")}>
              Information
            </a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-5 h-5"
        >
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-all ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-all ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-all ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${
          open ? "max-h-64 border-t border-gray-100" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-2 text-sm font-medium">
          <li>
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className={linkClass("about")}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => setOpen(false)}
              className={linkClass("portfolio")}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#information"
              onClick={() => setOpen(false)}
              className={linkClass("information")}
            >
              Information
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
