import NavBar from "./Navbar";
import Footer from "./Footer";
import Prepare from "../images/prepare.jpeg";

const AboutPage = () => {
  return (
    <>
      <div className="bg-white h-[100vh] text-gray-800">
        <NavBar />

        <div className="bg-teal-500 text-white py-12 text-center">
          <h1 className="text-4xl font-bold mb-2">About Local Taste</h1>
          <p className="text-lg">
            Fresh. Homemade. From Our Kitchen to Your Heart.
          </p>
        </div>

        <div className="flex justify-center">
          <section className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-semibold mb-4">Our Story</h2>
                <p className="text-gray-700 mb-4  text-[20px] leading-relaxed">
                  Local Taste began with a simple vision — to bring the warmth
                  and authenticity of home-cooked meals to the community. What
                  started as a family tradition has grown into a trusted
                  homemade food destination where quality and love are the main
                  ingredients.
                </p>
                <br />
                <br />
                <p className="text-gray-700 text-[20px] mb-4 leading-relaxed">
                  We use locally sourced ingredients, traditional cooking
                  methods, and a whole lot of heart to deliver comfort on a
                  plate. Whether it's our famous spaghetti or soul-warming
                  chicken curry, each dish is crafted to remind you of home.
                </p>
                <br />
                <br />
                <p className="text-gray-700 text-[20px]- leading-relaxed">
                  Join us at Local Taste and become part of a story built on
                  flavor, family, and food that makes you feel good.
                </p>
              </div>

              {/* Image */}
              <div>
                <img
                  src={Prepare}
                  alt="Homemade food preparation"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
