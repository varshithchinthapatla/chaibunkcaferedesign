import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-24">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight">
          Contact <span className="text-yellow-400">Chai Bunk</span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          Interested in opening a Chai Bunk franchise or have any business
          enquiries? Fill out the form below and our team will contact you.
        </p>
      </motion.div>

      {/* Contact Section */}
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-300/5 border border-yellow-500/20 rounded-3xl p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Franchise Opportunities
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Become a part of one of South India’s fastest-growing chai café
              brands with zero royalty franchise models and premium café
              experiences.
            </p>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-4 text-gray-300">
              <p>📍 Hyderabad, Telangana</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ franchise@chaibunk.com</p>
              <p>🕒 Mon - Sat : 9 AM - 7 PM</p>
            </div>
          </div>

          <div className="bg-yellow-400 text-black rounded-3xl p-8">
            <h3 className="text-2xl font-black mb-4">
              Start Your Chai Journey
            </h3>

            <p className="font-medium leading-relaxed">
              From compact kiosks to flagship cafés, Chai Bunk offers complete
              setup support, branding, training, and high ROI opportunities.
            </p>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.form
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#0d0d0d] border border-gray-800 rounded-3xl p-8 md:p-10 space-y-6 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                First Name
              </label>

              <input
                type="text"
                placeholder="Enter first name"
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 outline-none focus:border-yellow-400 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Last Name
              </label>

              <input
                type="text"
                placeholder="Enter last name"
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 outline-none focus:border-yellow-400 transition"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-400">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 outline-none focus:border-yellow-400 transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-400">
              Email Address
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 outline-none focus:border-yellow-400 transition"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm text-gray-400">
                City
              </label>

              <input
                type="text"
                placeholder="Your city"
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 outline-none focus:border-yellow-400 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-400">
                State
              </label>

              <input
                type="text"
                placeholder="Your state"
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 outline-none focus:border-yellow-400 transition"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-400">
              Type of Enquiry
            </label>

            <select className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 outline-none focus:border-yellow-400 transition">
              <option>Franchise Enquiry</option>
              <option>Business Partnership</option>
              <option>General Enquiry</option>
              <option>Support</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-400">
              Message
            </label>

            <textarea
              rows="5"
              placeholder="Tell us about your enquiry..."
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 outline-none focus:border-yellow-400 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-black py-4 rounded-xl text-lg transition duration-300 shadow-lg"
          >
            Submit Enquiry
          </button>
        </motion.form>
      </div>
    </div>
  );
}