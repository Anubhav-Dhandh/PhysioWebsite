import { motion } from "motion/react";
import { PhoneCall, CalendarCheck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Connect",
    description: "Call / Whatsapp your location and requirements to get started immediately.",
    icon: PhoneCall,
    rotation: "rotate-3"
  },
  {
    title: "Appointment",
    description: "We appoint the best suited physiotherapist based on your specific needs. The physio will contact you to arrange a convenient time slot.",
    icon: CalendarCheck,
    rotation: "-rotate-3"
  },
  {
    title: "Confirmed",
    description: "Everything is set! Receive clinical-grade physiotherapy right at your doorstep.",
    icon: CheckCircle2,
    rotation: "rotate-6"
  }
];

export default function Steps() {
  return (
    <section className="py-24 bg-surface-container-low" id="booking-steps">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4 tracking-tight">
            3 Steps to Book
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface-container-lowest p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-xl hover:-translate-y-2 duration-300"
            >
              <div className={`w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 ${step.rotation}`}>
                <step.icon className="text-primary w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-headline">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
