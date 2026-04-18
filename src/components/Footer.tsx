import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <img
            alt="Physiovanta Logo"
            className="h-14 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/ADBb0ujm9kRHy0ZRFUIKiDIRz14WhbXk2LNglKBx1WygLd7MXiEWAKPFyAUajho0UcEtoW9JkEzHP9YvgfSGD8D4JvV43njAcmBw2sWsOOYcQRNAJgIWO2imtP1nEW57Q9twy6Nw-2Ks-hwevn-jxYAwHgYwz-jhr2bvAfK7lb2Kd_KawWpjrayxSasX8EcdfLuI-_4m8vEGFMRuNTuZTTWgXlpImVuW_tmF3RHhmDnSG4yPAxvd9qgD7bQjkwNmF4trMWB8s72xeiGcdcA"
            referrerPolicy="no-referrer"
          />
          <p className="text-blue-100 text-lg leading-relaxed">
            Professional clinical physiotherapy services delivered to your
            doorstep. Specializing in post-surgery, geriatric, and chronic pain
            management.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
              href="#"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
              href="#"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
              href="#"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-8 text-healing-mint">
            Quick Links
          </h4>
          <ul className="space-y-4 text-blue-100">
            <li>
              <a className="hover:text-healing-mint transition-colors" href="#">
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:text-healing-mint transition-colors"
                href="#about"
              >
                About Dr. Rayees
              </a>
            </li>
            <li>
              <a
                className="hover:text-healing-mint transition-colors"
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="hover:text-healing-mint transition-colors"
                href="#testimonials"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                className="hover:text-healing-mint transition-colors"
                href="#areas"
              >
                Service Areas
              </a>
            </li>
            <li>
              <a
                className="hover:text-healing-mint transition-colors"
                href="#consultation-form"
              >
                Book Appointment
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-8 text-healing-mint">Services</h4>
          <ul className="space-y-4 text-blue-100">
            <li>Dry Needling</li>
            <li>Cupping Therapy</li>
            <li>Post-Surgery Rehab</li>
            <li>Stroke Recovery</li>
            <li>Geriatric Care</li>
            <li>Sports Injury</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-8 text-healing-mint">Contact</h4>
          <ul className="space-y-6 text-blue-100">
            <li className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-healing-mint shrink-0" />
              <span>Phulwari Sharif, Anisabad & Nearby Areas, Patna</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-healing-mint shrink-0" />
              <span>+91 70915 33903</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-healing-mint shrink-0" />
              <span>physiovanta@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/10 text-center text-blue-200 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Physiovanta. All rights reserved.
        </p>
        <p className="mt-2">
          Designed for Clinical Excellence & Patient Comfort.
        </p>
      </div>
    </footer>
  );
}
