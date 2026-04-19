import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trophy, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Trang chủ", href: "#hero" },
  { label: "Nổi bật", href: "#featured" },
  { label: "Danh sách", href: "#hall-of-fame" },
  { label: "Hành trình", href: "#timeline" },
  { label: "Đề cử", href: "#nominate" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(5, 13, 31, 0.95)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(212,168,83,0.15)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNav("#hero")} className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #D4A853, #F5D78E)" }}>
                <Trophy className="w-5 h-5 text-[#050d1f]" strokeWidth={2.5} />
              </div>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(135deg, #D4A853, #F5D78E)", filter: "blur(8px)", zIndex: -1 }} />
            </div>
            <div className="text-left">
              <p className="text-white text-sm leading-none" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0.05em" }}>HALL OF</p>
              <p className="leading-none" style={{ color: "#D4A853", fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.1rem" }}>Excellence</p>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="relative px-4 py-2 text-sm transition-colors duration-300"
                style={{ color: activeLink === link.href ? "#D4A853" : "rgba(255,255,255,0.7)" }}
              >
                {link.label}
                {activeLink === link.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 mx-4"
                    style={{ background: "linear-gradient(90deg, #D4A853, #F5D78E)" }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNav("#nominate")}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #D4A853, #c49540)",
                color: "#050d1f",
                boxShadow: "0 0 20px rgba(212,168,83,0.3)",
              }}
            >
              Đề cử ngay
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: "#D4A853" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 right-0 z-40 md:hidden py-4"
            style={{ background: "rgba(5, 13, 31, 0.98)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(212,168,83,0.2)" }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleNav(link.href)}
                className="w-full text-left px-8 py-3 text-sm transition-colors duration-200"
                style={{ color: activeLink === link.href ? "#D4A853" : "rgba(255,255,255,0.8)" }}
              >
                {link.label}
              </motion.button>
            ))}
            <div className="px-8 pt-3 pb-2">
              <button
                onClick={() => handleNav("#nominate")}
                className="w-full py-3 rounded-full text-sm font-medium"
                style={{ background: "linear-gradient(135deg, #D4A853, #c49540)", color: "#050d1f" }}
              >
                Đề cử ngay
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}