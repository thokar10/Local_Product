import NavBar from "./Navbar";
import Footer from "./Footer";

const ContactPage = () => {
  return (
    <>
      <div className="bg-white text-gray-800 min-h-screen">
        <NavBar />

        <div className="bg-teal-500 text-white py-12 text-center">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg">We'd love to hear from you!</p>
        </div>

        <div className="flex justify-center">
          <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form className="space-y-5">
                <div>
                  <label className="block mb-1 text-sm font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Type your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="mb-4 text-gray-700">
                Feel free to contact us with any questions, orders, or feedback.
                We're always happy to help!
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Email:</strong> info@localtaste.com
                </li>
                <li>
                  <strong>Phone:</strong> +61 123 456 789
                </li>
                <li>
                  <strong>Address:</strong> 123 Food Street, Melbourne,
                  Australia
                </li>
                <li>
                  <strong>Hours:</strong> Mon – Sat: 10am – 8pm
                </li>
              </ul>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
