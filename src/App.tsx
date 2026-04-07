/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Services from "./components/Services";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";
import Areas from "./components/Areas";
import ConsultationForm from "./components/ConsultationForm";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-surface font-sans selection:bg-secondary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Services />
        <Steps />
        <Testimonials />
        <Areas />
        <ConsultationForm />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

