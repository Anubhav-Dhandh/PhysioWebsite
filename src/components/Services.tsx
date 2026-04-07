import { motion } from "motion/react";

const services = [
  {
    title: "Dry Needling",
    description: "Advanced technique using thin needles to release myofascial trigger points and reduce chronic muscle tension and pain.",
    image: "https://lh3.googleusercontent.com/aida/ADBb0ugS6su7bASU2CC0TxU7ic5zX6r5Dyo3sgu8NgB4unueEq860l4cLhRphxe0Lq-Ytq4PO_6Zcr2waIeHDteAjpj1yR_w7XdPwuf_xfPEFN_C-mp_RrftU5Y4rvys86QvUQssyB3otA-NTlb2LnBZIfDYWWWTcotrxqVgqjLrsbOIYbraWsny1PaYoxITkEQ_h294ijaiLIIk8wr5dyJzwP4eLGZTR42adqVdTGVR7snF2F7sEXsn2LZyidmXunLNvvinsz482bG3pg",
  },
  {
    title: "Cupping Therapy",
    description: "Traditional therapy involving suction to improve blood flow, promote healing, and alleviate deep-seated muscular stiffness.",
    image: "https://lh3.googleusercontent.com/aida/ADBb0ugPIkI4SR4F5xozUuG-L49oXNnGtNIU4PRA8IGFrmBH-wzCpG35gq-9A1p7tmTsQwlK83YZhnqHzrZPs4E0mre9sRLsSmMMxgtB3R-2C8o9bhXIcUmgYTuXyPrmv2YbG8sI8plYDTrmGszHQ3c9GWgr_sf0By15iDtIG4qkGUyYiQ7L-rRbcB2fl89W285liuS7e5bwjPqD6xcYtnskcAIXCkVnUWP7GkMO2lXl58J-0M5pYvw46VaBf2dHeGv2jCs1r4qVXyn5B8M",
  },
  {
    title: "IASTM",
    description: "Instrument Assisted Soft Tissue Mobilization to effectively treat scar tissue and fascial restrictions for better mobility.",
    image: "https://lh3.googleusercontent.com/aida/ADBb0uimlAcJfG-u5bWGOTMXpQPucqgolo6AiXhE8lSPJ9uAraqAdo1VgoVaPfLHatoC6HuUibQC-P-_q8BL6kAfkkhWYymzgUDCc-F-RtNoAgw5CGNN8wdHldTwztkkh5LSbjlaqVu63M2XIZXwCKvtuVwYaO76bYP_42vYdoLYzGz6SExCCPn16T8oQ6MvPIOkIWHj2ILVYRUbFqBvdp678gQPTj4LVJzNxqdQTitBpUyZDp0606D9OtCPvIldpfP486FrKlfrLHFSQt0",
  },
  {
    title: "Kinesiology Taping",
    description: "Applying specialized elastic tape to support muscles, reduce inflammation, and enhance the body's natural healing process.",
    image: "https://lh3.googleusercontent.com/aida/ADBb0ujKm6UE2LH0fAKCBNpz0oiE6uRGe6xrgjZilFyYCWDrOr3xxE6UP8xUXemuf1aiyJOGome8NcYLXaGKhAaNfl4Cn-4YK5ELoDJpRn8W4h1iE37ARSPOMGLlX946byO9IUl1WjIxB27zfmFerrf_9leVZLtTiFX5-dtIF0dXSNpVjAIQL1y1CKOgC8MUBI92dN2wrpSPxFP-_7BEyi1MqTgQRfuUzG5ilbQD2tDI_3-a50WHNb8L1Wy3K87xw3rwadWSuzKs7QLETVk",
  },
  {
    title: "IFT Therapy",
    description: "Interferential Therapy uses mid-frequency electrical stimulation to penetrate deep into tissues for significant pain relief.",
    image: "https://lh3.googleusercontent.com/aida/ADBb0uinf1ZzUv6z7LHY-AvYVId6vWKhLAQuZq2L4N68-NzOTGpqdFTlYPq11Fy-l5axk7t3aQb-eW-stZh5tKkTJH8tIorWVuu71WxQk_1U6CG0wysnRKddJ6h78Lni37U6RFSyFllEjKhnUqai4x7tNBKqpXQ0wSJ44g5bfBaK47SXgUc22vYn4fpAs7kVzrGmrGA8MHjbt23rKWWL9jQV454-eV_FPFueQk4ogqJtL-1tOYgjOgY9rVWSR0x_LwMZHGetYHNBKuL_eZw",
  },
  {
    title: "Ultrasound Therapy",
    description: "High-frequency sound waves to treat deep tissue injuries and promote soft tissue repair and pain reduction.",
    image: "https://lh3.googleusercontent.com/aida/ADBb0uip4vT4ND_NT-Wxaf7cSFUVgOpxgsbmIMyWFS8W4xtd7mD8-U4WKKeE8pogqVsLQeFIkPYjDd-oW9-LA5COUYt3PIbzwkTDUdTbb5bLKRC_5Rzpp83n3GDGR4bL-y4D3EmDsansotbxUA4UZ71r2iC129Jm0bBg6oYFIQUC-FVSXXt1TYnoKdyAGmL1KNkIIO1EsLn25_dTfTpZYhw11XNWUpYe_vDamT4j3eOiiI9PbgjhFnoyeDjT6_0gRozvPKDKTRrxfX3Fyws",
  },
  {
    title: "Manual Mobilization",
    description: "Skilled hands-on techniques including joint mobilization and manipulation to restore optimal movement and function.",
    image: "https://lh3.googleusercontent.com/aida/ADBb0uiZaxi1Mfch0wZ_MtyxpmYzkNk5ky28BSJpGPhp6CxLLJ_551B8ZoE-FV0McaSwwuAaRAAoT3lrl2zbjAydF2V_DWqpxk-QBBa2ODgvglcKbyZdvWZfFfC8aAUCijfAKRuuDcOnrVtG5JjiqGnatnN72c-gqti5VENEOuOUbsV3UF14ulJcAfduyf41GjC-0EFR76Pp8QjA819MyP80XKnqrBOKXeA8Scp3c_hyRmD-A0Nu77P0iRrrF7oORME15ak81rSt3dEu7qw",
  },
  {
    title: "Therapeutic Exercise",
    description: "Customized exercise protocols designed to improve strength, flexibility, and overall functional performance.",
    image: "https://lh3.googleusercontent.com/aida/ADBb0ugwbIAUbCVdzD_rpEgFzb0muDnpNCbcFEfBvjsSUJJgX0qm3kwPqcBDLfPQJDk-ekYhU0fY41m-NtxEFpHOpvHcSlpFc-l2SxeOjvB8UfkmnffNfxW7i7J7IzWm8i_3K74cXbJxfdDz_a09sa8o6jkyqHKxRfzUVvwQFXeNzEFGCS_coxHBx5aAfrxcwMcX1poirz0rTG_PRxb7LZ8e_Av6uPVFKF2j_Re125ASWKvRrzSmSeoEsT3zxvkB2qAMovcJjG7vyYlI35A",
  },
  {
    title: "Post-Surgery Rehab",
    description: "Specialized care for Hip Replacement, Total Knee Replacement, and Cardiac surgeries to ensure safe recovery.",
    image: "https://lh3.googleusercontent.com/aida/ADBb0uid_mGwNvkv8DK6g4Jcj63zEuIIMdko2b8GU3IWT0vQmD0hlLoMp7Ay3Wlr7NufqfTkaofzjOEuGxfdqLbNIfKGUAXhKBurY8IenVnGtzBrpFIdBViznNyUBPubCQ5au9sgcRAn-kvJ2BaBHzH1ni2UIVXNDNaLAGvH-MYMSg7--RSnheEtWPVQ4bJYxUJtuMEuhNPeczNLfl9vRuZYwgMTQX7dWlbL_N951aEcIxJa7DVua8kmqC90kXt4_-vLpZrdSavf9sEX6xI",
  },
  {
    title: "Stroke Recovery",
    description: "Intensive neuro-rehabilitation to regain motor control, balance, and daily independence for post-stroke patients.",
    image: "https://lh3.googleusercontent.com/aida/ADBb0ujN2HFRhV6hh_6RSuaIkAYRoQWvzg1UpraIMsi4uXE_i1a1NRFb3oo8OW9kvmxE68kGdmQCl0sP4uP59A9uTW8fIDanly44SgNvsApX-qymwKQlHtNN8j2qkm0wATHeGG5HUqLrYbY7Os_GDcxwYtb0-wN59kLgNXmRGDSPpuFqecSJ1k0Rd5R4LsfAW1QBTuBernqcTNM6UgcA_DgyI5VlqfXdg1_ybFph22raOc1XHr5pcGqiIvjqLtM4O3tbk-bSBjuigH5oNbI",
  },
  {
    title: "Geriatric Rehab",
    description: "Improving mobility and independence for seniors through targeted exercises and fall prevention strategies.",
    image: "https://lh3.googleusercontent.com/aida/ADBb0ujGVlTMEijZSYnITQNpQ7xJvIJn13FmwuyePz_k88Og6upS0GrEz9kEhLtuY8ngP1s0gcR32HZ4UMLJroKdhs7uHQJ-7ycITxDPR_12TLnWq-VF1f0LEAeWwLT-kCyGZ2yftHo_JXxmlGDKfyuhvXu96iS-LHRa-wHtdmcO3QagLmutL0t4GlhhDsP0du1ZaCxM3Jt5eB5QT_qYad4h2AgupeFLbayy1jFkVRlft2J6ttdRbzouWAkWcwwNXz3J3_SXLlrJ11q0-No",
  },
  {
    title: "Balance Training",
    description: "Specialized programs to enhance proprioception and stability, reducing the risk of falls and improving confidence.",
    image: "https://lh3.googleusercontent.com/aida/ADBb0ugjJTFOs0MUISKUmyw6e00gLnhPMHU85Vdwf1Q3-yDv5e0X48Gnvuq1m2WyGU9TU0TPpvwqLulTXwpiHzA7P_ELMqUuJqmE5IvZqz_Efa7_B6Rz8QkxrCEqHxhiSqhUEYAD8ynzBQCfrUTJvkVmkI-NJFKogQONwp1oBL_f7l7KvQeCq0zibuM3ZDDSawiGXrLzkBdNhO9zkvudC-bZYgp_aMhqpAMhZrbr0AE6ibx2dhTKYCTuCYITZrav-7wCLwaHosEPB53Sbpw",
  },
  {
    title: "Electrotherapy",
    description: "Using various electrical modalities like TENS and Ultrasound to manage pain and promote tissue healing.",
    image: "https://lh3.googleusercontent.com/aida/ADBb0ujew0pKt-D2nqiYlW0wWilSP51poFD61dYCKwUElsIdYzfEd6ThtgDhI8yj3E77UJbyN4p9-1VWRwHOV9c8EcF0-AEAU9Gket5mPFWoNW88o9KsWHR_eROkVREuYzUAasdNQ3pGiMx2XLQFw4ot6JgN_lhLHMFRf3whYZda0HE2icNYUrtrDh6TpVwdMKJAukIAvMmlB4NLZy7IzEAuyKIhqDonbX8pAl2h0YUMGielAodoQYiuqZ1sLTVl73SS8z_3KAlvzlN5RJI",
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-surface" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4 tracking-tight">
            Specialized Recovery Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive rehabilitation programs tailored to your specific
            physical needs and recovery goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-[2rem] overflow-hidden shadow-md border border-gray-100 transition-all duration-500 group bg-surface-container-lowest hover:bg-primary hover:shadow-2xl"
            >
              <div className="h-56 overflow-hidden">
                <img
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src={service.image}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-primary group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-gray-600 group-hover:text-blue-100 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
