import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Areas", href: "#areas" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled || isOpen ? "bg-white shadow-md py-3" : "bg-white/50 backdrop-blur-md py-5"
    }`}>
      <div className="flex justify-between items-center w-full px-6 max-w-7xl mx-auto">
        <a href="#" onClick={handleNavClick} className="text-2xl font-bold tracking-tight text-primary">
          <img
            alt="Physiovanta Logo"
            className="h-10 lg:h-12 w-auto object-contain transition-all"
            src="https://lh3.googleusercontent.com/aida/ADBb0ujm9kRHy0ZRFUIKiDIRz14WhbXk2LNglKBx1WygLd7MXiEWAKPFyAUajho0UcEtoW9JkEzHP9YvgfSGD8D4JvV43njAcmBw2sWsOOYcQRNAJgIWO2imtP1nEW57Q9twy6Nw-2Ks-hwevn-jxYAwHgYwz-jhr2bvAfK7lb2Kd_KawWpjrayxSasX8EcdfLuI-_4m8vEGFMRuNTuZTTWgXlpImVuW_tmF3RHhmDnSG4yPAxvd9qgD7bQjkwNmF4trMWB8s72xeiGcdcA"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 font-semibold hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#consultation-form"
            className="signature-gradient text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-primary/20 cursor-pointer"
          >
            Book Appointment
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-primary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-left text-lg font-bold text-gray-800 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <motion.a
                whileTap={{ scale: 0.98 }}
                href="#consultation-form"
                onClick={handleNavClick}
                className="signature-gradient text-white px-6 py-4 rounded-xl font-bold text-center shadow-lg shadow-primary/20 w-full"
              >
                Book Appointment
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
