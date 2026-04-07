import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tight text-primary">
          <img
            alt="Physiovanta Logo"
            className="h-12 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/ADBb0ujm9kRHy0ZRFUIKiDIRz14WhbXk2LNglKBx1WygLd7MXiEWAKPFyAUajho0UcEtoW9JkEzHP9YvgfSGD8D4JvV43njAcmBw2sWsOOYcQRNAJgIWO2imtP1nEW57Q9twy6Nw-2Ks-hwevn-jxYAwHgYwz-jhr2bvAfK7lb2Kd_KawWpjrayxSasX8EcdfLuI-_4m8vEGFMRuNTuZTTWgXlpImVuW_tmF3RHhmDnSG4yPAxvd9qgD7bQjkwNmF4trMWB8s72xeiGcdcA"
            referrerPolicy="no-referrer"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="signature-gradient text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-primary/20"
        >
          Book Appointment
        </motion.button>
      </div>
    </nav>
  );
}
