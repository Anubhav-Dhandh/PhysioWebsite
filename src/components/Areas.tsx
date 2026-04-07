import { motion } from "motion/react";
import { MapPin, Home } from "lucide-react";

export default function Areas() {
  const locations = ["Phulwari Sharif", "Anisabad", "Nearby Areas"];

  return (
    <section className="py-24 bg-surface-container-low overflow-hidden" id="areas">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-primary mb-8 tracking-tight">
            Physiotherapy at Your Location
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            We serve the following areas in{" "}
            <span className="text-primary font-bold underline decoration-secondary decoration-4">
              Patna
            </span>
            , ensuring you don't have to travel while in pain.
          </p>
          <div className="space-y-6">
            {locations.map((loc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-4 p-5 rounded-2xl bg-surface-container-lowest shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${
                  loc === "Nearby Areas" ? "opacity-70" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-lg font-bold">{loc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl ring-8 ring-white bg-surface-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.861072441!2d85.073002!3d25.594095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x8311051253a91311!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1712485200000!5m2!1sen!2sin"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Physiovanta Service Area - Patna"
            ></iframe>
          </div>
          <div className="absolute -bottom-6 -right-6 p-6 bg-white rounded-3xl shadow-2xl flex items-center gap-4 border border-gray-100">
            <Home className="text-primary w-10 h-10" />
            <div className="flex flex-col">
              <span className="font-bold text-primary leading-none">
                Doorstep Visits Only
              </span>
              <span className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-wider">
                Serving All of Patna
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
