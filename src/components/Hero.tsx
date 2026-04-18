import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Physiotherapy session background"
          className="w-full h-full object-cover object-center"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXLHerOlCFS6WaBwR96MoIo0DK3Rx0gyQcfinJNzelqTWKZYuxtFdGANeRoTHQj42d6IsQe6wA5dLJarcX2zn-SaINUU4rTKRzv84qiAYJuZ-3pBfkpb1QqJUExPtzZJqkbE3nNfAw_IrZwWkXtSUbv5dkeqFgXtqnL9_ID49J7JpMWZ-0TkqZe2edlGGS9FjMn5DbYkQRKbAXfdLFrPLO3QjEwG-SBRz3dDFNudI0oIZPKmQJ4DIhofAu7QDS3-QXvon_NvNvsCgF"
          referrerPolicy="no-referrer"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/10 lg:from-white/90 lg:via-white/50 lg:to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider uppercase text-on-secondary-container bg-secondary-container rounded-full">
            Personalized Home Care
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] text-primary mb-6 tracking-tight drop-shadow-sm">
            Your Path to Pain-Free Movement—
            <span className="text-secondary block">Right at Your Doorstep.</span>
          </h1>
          <p className="text-lg text-gray-800 mb-10 max-w-xl leading-relaxed font-medium">
            Experience professional, clinical physiotherapy in the comfort of
            your home. We bring specialized recovery programs directly to you in
            Patna.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#consultation-form"
              className="signature-gradient text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-primary/20 text-center flex items-center justify-center cursor-pointer"
            >
              Book Appointment
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/917091533903"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-bold border-2 border-primary/20 bg-white/50 backdrop-blur-sm text-primary hover:bg-white transition-all shadow-lg"
            >
              <MessageSquare className="w-5 h-5 fill-primary" />
              WhatsApp Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
