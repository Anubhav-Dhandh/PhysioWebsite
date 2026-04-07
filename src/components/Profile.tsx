import { motion } from "motion/react";

export default function Profile() {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Patients Treated", value: "500+" },
    { label: "Patient Rating", value: "4.7" },
  ];

  return (
    <section className="py-24 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface-container-lowest rounded-[2.5rem] p-8 lg:p-16 flex flex-col lg:flex-row gap-16 items-center shadow-xl border border-gray-100"
        >
          <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-surface-container ring-4 ring-primary/5 aspect-[3/4] w-full max-w-[280px]">
              <img
                alt="Dr. Md Anas Rayees"
                className="w-full h-full object-cover object-top"
                src="https://lh3.googleusercontent.com/aida/ADBb0ugnZG0fkzhNHdmWLIP8NKHLcUwgNKH_esPnr0Yoe4_dIDnykXrH1YP6AgaMopBqjk7CEsA7nzgh0NQPldJoS4Gg59pRTcSuE3BzNNOfi3Rc0IKoWo7_bHeMzjvtb8-dA1HA7YMN_gfOoQy8JYYOvMyIZIYyle7M7rAF4baAb4qA7L4ydngUznU8unPY7387grjLfJK_Md7-N47tuzhXFGy4l05p4PQ-9jlMRXTjPSPfKrQ858sxb6q9VvbQXnTY-NUE2XritI62fDc"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="w-full lg:w-3/4">
            <h2 className="text-4xl font-extrabold text-primary mb-2">
              Dr. Md Anas Rayees
            </h2>
            <p className="text-xl font-semibold text-secondary mb-6">
              BPT, MIAP | Lead Physiotherapist
            </p>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
              <p>
                With a deep commitment to restorative care, Dr. Rayees brings
                clinical excellence directly to the patient's home environment.
                His approach combines evidence-based manual therapy with
                personalized exercise protocols.
              </p>
              <p>
                Member of the Indian Association of Physiotherapists (MIAP),
                ensuring the highest standards of professional ethics and modern
                treatment methodologies.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-surface-container-low border border-gray-100"
                >
                  <span className="text-primary font-bold text-3xl block">
                    {stat.value}
                  </span>
                  <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
