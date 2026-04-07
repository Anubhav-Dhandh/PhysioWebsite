import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, ShieldCheck, Home, Mail, CheckCircle2, AlertCircle } from "lucide-react";

export default function ConsultationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    description: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string) => {
    let error = "";
    switch (name) {
      case "full_name":
        if (!value.trim()) {
          error = "Full name is required";
        } else if (value.trim().length < 3) {
          error = "Name must be at least 3 characters";
        }
        break;
      case "phone":
        const phoneRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
        if (!value.trim()) {
          error = "Phone number is required";
        } else if (!phoneRegex.test(value.replace(/\s/g, ""))) {
          error = "Please enter a valid 10-digit Indian phone number";
        }
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          error = "Email address is required";
        } else if (!emailRegex.test(value)) {
          error = "Please enter a valid email address";
        }
        break;
      case "description":
        if (!value.trim()) {
          error = "Problem description is required";
        } else if (value.trim().length < 10) {
          error = "Please provide a bit more detail (min 10 characters)";
        }
        break;
    }
    return error;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const benefits = [
    {
      title: "Expert Assessment",
      desc: "Clinical evaluation by Dr. Anas Rayees",
      icon: ShieldCheck,
    },
    {
      title: "Doorstep Service",
      desc: "Treatment in your home comfort",
      icon: Home,
    },
    {
      title: "Fast Response",
      desc: "Confirmation via email/whatsapp",
      icon: Mail,
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const newErrors: Record<string, string> = {};
    let hasErrors = false;
    
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    setTouched({
      full_name: true,
      phone: true,
      email: true,
      description: true,
    });

    if (hasErrors) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage("Failed to connect to the server. Please check your connection.");
    }
  };

  if (status === "success") {
    return (
      <section className="py-24 bg-surface-container-low" id="consultation-form">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-surface-container-lowest rounded-[3rem] p-12 lg:p-20 text-center shadow-2xl border border-gray-100"
          >
            <div className="w-24 h-24 bg-healing-mint/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-12 h-12 text-healing-mint" />
            </div>
            <h2 className="text-4xl font-extrabold text-primary mb-6">Request Received!</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Thank you for reaching out. Dr. Md Anas Rayees will review your
              information and contact you shortly to schedule your consultation.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-primary font-bold underline decoration-secondary decoration-2 hover:text-secondary transition-colors"
            >
              Send another request
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-surface-container-low" id="consultation-form">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface-container-lowest rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row"
        >
          {/* Form Info Side */}
          <div className="lg:w-2/5 medical-gradient p-12 lg:p-16 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-extrabold mb-6 leading-tight">
                Schedule Your Consultation
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Fill out the form and our team will get back to you via email or
                phone within 24 hours to confirm your appointment.
              </p>
              <ul className="space-y-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <benefit.icon className="bg-healing-mint/20 p-2 rounded-lg text-healing-mint w-10 h-10" />
                    <div>
                      <p className="font-bold">{benefit.title}</p>
                      <p className="text-sm text-blue-100/80">{benefit.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-blue-200">
                Physiovanta Clinical Home Care Patna
              </p>
            </div>
          </div>

          {/* Form Content Side */}
          <div className="lg:w-3/5 p-12 lg:p-16">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    className="text-sm font-bold text-primary tracking-wide uppercase"
                    htmlFor="full_name"
                  >
                    Full Name
                  </label>
                  <input
                    className={`w-full px-5 py-4 rounded-2xl bg-surface border-none ring-1 transition-all outline-none ${
                      errors.full_name && touched.full_name
                        ? "ring-red-500 focus:ring-red-500"
                        : "ring-gray-200 focus:ring-medical-blue"
                    }`}
                    id="full_name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="John Doe"
                    type="text"
                  />
                  {errors.full_name && touched.full_name && (
                    <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.full_name}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-bold text-primary tracking-wide uppercase"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className={`w-full px-5 py-4 rounded-2xl bg-surface border-none ring-1 transition-all outline-none ${
                      errors.phone && touched.phone
                        ? "ring-red-500 focus:ring-red-500"
                        : "ring-gray-200 focus:ring-medical-blue"
                    }`}
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="+91 XXXXX XXXXX"
                    type="tel"
                  />
                  {errors.phone && touched.phone && (
                    <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-bold text-primary tracking-wide uppercase"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className={`w-full px-5 py-4 rounded-2xl bg-surface border-none ring-1 transition-all outline-none ${
                    errors.email && touched.email
                      ? "ring-red-500 focus:ring-red-500"
                      : "ring-gray-200 focus:ring-medical-blue"
                  }`}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="name@example.com"
                  type="email"
                />
                {errors.email && touched.email && (
                  <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-bold text-primary tracking-wide uppercase"
                  htmlFor="description"
                >
                  Problem Description
                </label>
                <textarea
                  className={`w-full px-5 py-4 rounded-2xl bg-surface border-none ring-1 transition-all outline-none min-h-[150px] resize-none ${
                    errors.description && touched.description
                      ? "ring-red-500 focus:ring-red-500"
                      : "ring-gray-200 focus:ring-medical-blue"
                  }`}
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="Briefly describe your symptoms or recovery goals..."
                ></textarea>
                {errors.description && touched.description && (
                  <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.description}
                  </p>
                )}
              </div>

              {status === "error" && (
                <div className="flex items-center gap-3 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p>{errorMessage}</p>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === "loading"}
                className={`w-full bg-medical-blue text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-medical-blue/20 flex items-center justify-center gap-3 ${
                  status === "loading" ? "opacity-70 cursor-not-allowed" : ""
                }`}
                type="submit"
              >
                {status === "loading" ? (
                  <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                {status === "loading" ? "Sending..." : "Request Consultation"}
              </motion.button>
            </form>
            <p className="text-center text-gray-500 text-sm mt-8">
              Your data is safe with us. We only use it for appointment
              scheduling.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

