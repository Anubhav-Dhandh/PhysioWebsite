import { motion } from "motion/react";
import { Phone, MessageSquare } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-extrabold text-primary mb-8 tracking-tight"
        >
          Ready to start your recovery?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-surface-container-lowest p-10 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full -ml-12 -mb-12"></div>
          <p className="text-xl text-gray-600 mb-10 relative z-10">
            Connect directly with Dr. Md Anas Rayees for a consultation or to
            schedule your first home visit.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center relative z-10">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+917091533903"
              className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl text-xl font-bold hover:bg-primary-container transition-all shadow-lg shadow-primary/20"
            >
              <Phone className="w-6 h-6" />
              +91 70915 33903
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/917091533903"
              className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-white rounded-2xl text-xl font-bold hover:bg-on-secondary-container transition-all shadow-lg shadow-secondary/20"
            >
              <MessageSquare className="w-6 h-6 fill-white" />
              WhatsApp Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
