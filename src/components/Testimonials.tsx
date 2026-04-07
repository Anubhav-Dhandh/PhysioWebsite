import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh K.",
    role: "Post-Surgery Rehab Patient",
    content: "The convenience of getting professional physiotherapy at home was a lifesaver for my post-surgery recovery. Dr. Anas is incredibly patient and knowledgeable. I'm walking again much sooner than expected!",
    rating: 5,
  },
  {
    name: "Sunita M.",
    role: "Geriatric Rehab Patient",
    content: "As a senior citizen, traveling to a clinic was very painful for me. Dr. Anas's home visits have changed my life. His expertise in geriatric care and gentle approach helped me regain my balance and confidence.",
    rating: 4.5,
  },
  {
    name: "Amit S.",
    role: "Chronic Pain Management",
    content: "I suffered from chronic back pain for years. The combination of Dry Needling and Manual Therapy provided by Dr. Anas at my home was miraculous. He is highly professional and truly cares about his patients' recovery.",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface-bright" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4 tracking-tight">
            What Our Patients Say
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(testimonial.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <Quote className="text-secondary/20 w-12 h-12 -mt-4 mb-2" />
              <p className="text-gray-600 text-lg leading-relaxed flex-grow italic">
                "{testimonial.content}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary font-bold text-lg border border-primary/10">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
