import { motion } from "framer-motion";

export default function Franchise() {

  const models = [
    {
      name: "STORE MODEL",
      price: "₹5L+",
      tag: "Best For City Cafés",
      features: [
        "All Kitchen Equipment Included",
        "ZERO Royalty",
        "Free Raw Material Worth ₹1L Sales",
        "3D Acrylic Branding",
        "Free 5-Day Training",
        "Dedicated Account Manager",
        "Lifetime Franchise License",
        "Free Online Promotion",
      ],
    },

    {
      name: "EXPRESS MODEL",
      price: "₹6L+",
      tag: "Container Setup",
      featured: true,
      features: [
        "10x10 Container Setup",
        "Fully Furnished Interior",
        "Zero Royalty Lifetime",
        "Furniture Included",
        "Free Marketing Support",
        "Local Action Plan",
        "Cafe Layout Guidance",
        "Lifetime License",
      ],
    },

    {
      name: "FLAGSHIP MODEL",
      price: "₹15L+",
      tag: "Premium Experience",
      features: [
        "16x8 Massive Container",
        "Premium Branding",
        "Complete Kitchen Setup",
        "Free Initial Stock",
        "5-Day Training",
        "Online Promotion",
        "Dedicated Support",
        "High ROI Potential",
      ],
    },

    {
      name: "HIGHWAY MODEL",
      price: "₹20L+",
      tag: "High Footfall Model",
      features: [
        "24x8 Rooftop Seating",
        "Massive Branding Board",
        "Container Interior Setup",
        "Zero Royalty",
        "Marketing Support",
        "Lifetime License",
        "Dedicated Manager",
        "Fast ROI",
      ],
    },
  ];

  const faqs = [
    {
      q: "What is the starting investment?",
      a: "The Chai Bunk franchise starts from ₹5 lakhs including setup, interiors, equipment, training, and initial stock.",
    },

    {
      q: "Are there low investment options?",
      a: "Yes. Kiosk and Express models start from ₹5–6 lakhs and are perfect for campuses, marketplaces, and IT zones.",
    },

    {
      q: "What profit margins can franchisees expect?",
      a: "Gross profit margins typically range between 50–60% depending on location and operations.",
    },

    {
      q: "What is the average ROI period?",
      a: "Kiosk formats achieve ROI in 6–8 months, while cafés and container models take around 12–18 months.",
    },

    {
      q: "Are there royalties or renewal fees?",
      a: "No. Chai Bunk follows a zero-royalty and no-renewal-fee franchise structure.",
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">

      {/* HERO */}

      <section className="relative py-40 overflow-hidden">

        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-orange-500/10 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-8 md:px-16 text-center">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.5em] text-orange-300 text-sm"
          >
            Chai Bunk Franchise
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-8 text-5xl md:text-8xl font-black leading-tight"
          >
            LOW INVESTMENT
            <br />
            TEA FRANCHISE
            <br />
            IN INDIA.
          </motion.h1>

          <p className="mt-10 text-zinc-400 text-lg max-w-4xl mx-auto leading-relaxed">
            Chai Bunk leads as one of the fastest-growing chai franchise brands
            with 120+ outlets across Telangana, Andhra Pradesh, Gujarat,
            Karnataka, Maharashtra, and Tamil Nadu.
          </p>

        </div>

      </section>

      {/* WHY CHOOSE */}

      <section className="relative py-32">

        <div className="max-w-7xl mx-auto px-8 md:px-16">

          <div className="text-center mb-24">

            <p className="uppercase tracking-[0.4em] text-orange-300 text-sm">
              Why Choose Chai Bunk
            </p>

            <h2 className="mt-6 text-5xl md:text-7xl font-black">
              BUILT FOR
              <br />
              MODERN ENTREPRENEURS.
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {[
              "120+ outlets across 6 states",
              "Zero royalty structure",
              "High profit margins up to 80%",
              "Complete ready-to-operate setup",
              "Free 5-day training",
              "Dedicated account manager",
              "Free digital marketing support",
              "Centralized ingredients & recipes",
            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="
                  rounded-[35px]
                  border border-white/10
                  bg-white/[0.04]
                  backdrop-blur-2xl
                  p-10
                "
              >

                <h3 className="text-2xl font-bold text-orange-300">
                  0{index + 1}
                </h3>

                <p className="mt-5 text-zinc-300 text-lg">
                  {item}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* PRICING MODELS */}

      <section className="relative py-40 overflow-hidden">

        <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-orange-500/10 rounded-full blur-[220px] -translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-8 md:px-16">

          <div className="text-center mb-24">

            <p className="uppercase tracking-[0.4em] text-orange-300 text-sm">
              Franchise Models
            </p>

            <h2 className="mt-6 text-5xl md:text-7xl font-black">
              CHOOSE YOUR
              <br />
              BUSINESS MODEL.
            </h2>

          </div>

          <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-8">

            {models.map((model, index) => (

              <motion.div
                key={index}

                whileHover={{
                  y: -15,
                  scale: 1.03,
                }}

                className={`
                  relative
                  rounded-[35px]
                  border
                  overflow-hidden
                  backdrop-blur-2xl
                  p-10
                  flex
                  flex-col
                  justify-between
                  min-h-[700px]

                  ${
                    model.featured
                      ? "border-orange-400 bg-orange-400/10"
                      : "border-white/10 bg-white/[0.04]"
                  }
                `}
              >

                {model.featured && (

                  <div className="absolute top-5 right-5 bg-orange-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                    Popular
                  </div>

                )}

                <div>

                  <p className="text-zinc-400">
                    {model.tag}
                  </p>

                  <h3 className="mt-6 text-3xl font-black">
                    {model.name}
                  </h3>

                  <div className="mt-8 flex items-end gap-2">

                    <span className="text-6xl font-black text-orange-300">
                      {model.price}
                    </span>

                  </div>

                  <div className="mt-10 space-y-5">

                    {model.features.map((feature, i) => (

                      <div key={i} className="flex gap-3">

                        <div className="w-2 h-2 rounded-full bg-orange-300 mt-3"></div>

                        <p className="text-zinc-300">
                          {feature}
                        </p>

                      </div>

                    ))}

                  </div>

                </div>

                <button
                  className={`
                    mt-10
                    w-full
                    py-4
                    rounded-2xl
                    font-bold
                    transition-all

                    ${
                      model.featured
                        ? "bg-orange-400 text-black"
                        : "border border-white/10 hover:bg-white hover:text-black"
                    }
                  `}
                >
                  Enquiry Now
                </button>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* APPLICATION FORM */}

      <section className="relative py-40">

        <div className="max-w-5xl mx-auto px-8">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.4em] text-orange-300 text-sm">
              Apply For Franchise
            </p>

            <h2 className="mt-6 text-5xl md:text-7xl font-black">
              START YOUR
              <br />
              CHAI JOURNEY.
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "FIRST NAME",
              "LAST NAME",
              "PHONE",
              "CITY",
              "DISTRICT",
              "STATE",
              "PINCODE",
              "EMAIL",
            ].map((field, index) => (

              <input
                key={index}
                placeholder={field}
                className="
                  bg-white/[0.04]
                  border border-white/10
                  rounded-2xl
                  px-6
                  py-5
                  outline-none
                  text-white
                  placeholder:text-zinc-500
                "
              />

            ))}

          </div>

          <button className="mt-10 w-full bg-orange-400 text-black py-5 rounded-2xl text-xl font-black hover:scale-[1.02] transition-all">
            Submit Application
          </button>

        </div>

      </section>

      {/* FAQ */}

      <section className="relative py-40">

        <div className="max-w-5xl mx-auto px-8">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.4em] text-orange-300 text-sm">
              FAQ
            </p>

            <h2 className="mt-6 text-5xl md:text-7xl font-black">
              INVESTMENT &
              <br />
              RETURNS.
            </h2>

          </div>

          <div className="space-y-8">

            {faqs.map((faq, index) => (

              <motion.div
                key={index}

                whileHover={{
                  scale: 1.02,
                }}

                className="
                  rounded-[30px]
                  border border-white/10
                  bg-white/[0.04]
                  backdrop-blur-2xl
                  p-10
                "
              >

                <h3 className="text-2xl font-bold text-orange-300">
                  {faq.q}
                </h3>

                <p className="mt-5 text-zinc-400 leading-relaxed text-lg">
                  {faq.a}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}