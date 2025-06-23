import NavBar from "./Navbar";
import Spagehetti from "../images/homemade.jpeg";
import ChickenCurry from "../images/ChickenCurry.jpeg";
import Lasagna from "../images/Lasagna.jpeg";
import applepie from "../images/applepie.jpeg";
import background from "../images/background.jpg";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "Homemade Spaghetti",
      image: Spagehetti,
      price: "RS 1299",
    },
    {
      id: 2,
      name: "Chicken Curry",
      image: ChickenCurry,
      price: "Rs 1499",
    },
    {
      id: 3,
      name: "Vegetable Lasagna",
      image: Lasagna,
      price: "Rs 1350",
    },
    {
      id: 4,
      name: "Apple Pie",
      image: applepie,
      price: "Rs 4999",
    },
  ];

  return (
    <>
      <div className="w-full  bg-teal-500 text-white">
        <NavBar />

        <div
          style={{
            backgroundImage: `url(${background})`,
          }}
          className="flex flex-col justify-center items-center min-h-[calc(100vh-80px)] px-6 gap-5 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Welcome to Local Taste
          </h1>
          <p className="text-2xl  font-bold mb-4 drop-shadow-lg">
            Enjoy fresh, homemade meals prepared with love and local
            ingredients.
          </p>
          <a
            onClick={() => {
              navigate("/product");
            }}
            className="bg-white text-teal-600 font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition"
          >
            Explore Our Menu
          </a>
        </div>

        <section className="bg-white text-black py-16 px-4 md:px-12">
          <h2
            className="text-3xl font-bold text-center"
            style={{ marginBottom: "40px" }}
          >
            Popular Dishes
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 w-[80%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover object-center"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                    <p className="text-teal-600 font-bold">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="flex justify-center">
        {" "}
        <div className="bg-white  w-[70%] text-gray-800  mt-10 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold " style={{ marginBottom: "20px" }}>
            About Local Taste
          </h2>
          <p className="text-lg leading-relaxed">
            Local Taste is more than just a homemade food kitchen — it's a
            celebration of tradition, authenticity, and the comforting power of
            food. Rooted in family recipes and cultural heritage, we are proud
            to serve meals that carry the warmth of home in every bite. Our
            journey began with a simple idea: to bring back the lost charm of
            slow-cooked, soul-nourishing food in a fast-paced world. In a time
            when quick fixes dominate the dining scene, we chose a different
            path — one that honors time, care, and community. What started in a
            humble kitchen with a few cherished recipes has grown into a beloved
            destination for those who crave real food made with real heart.
            <br /> <br />
            At Local Taste, every dish is prepared with love and attention,
            using fresh, locally sourced ingredients. We prioritize quality and
            seasonality, ensuring that each meal not only delights the taste
            buds but also supports our network of local farmers and producers.
            From creamy lasagnas to spiced dumplings and buttery naan, our food
            is an expression of the diverse flavors that make up our community.{" "}
            <br /> <br />
            We serve people — not just customers. Our cozy environment, friendly
            service, and personalized care make every visit feel like coming
            home. Whether you're joining us for a quick lunch, catering a
            special occasion, or ordering comfort food on a rainy evening, we
            want you to feel seen, welcomed, and nourished.<br></br>
            As we continue to grow, we remain committed to our core values:
            homemade quality, local connection, and joyful hospitality. We're
            not here to just feed you — we're here to remind you that the best
            meals are the ones that make you feel something.<br></br>
            Welcome to Local Taste — where every dish tells a story, and every
            bite feels like home.
            <br /> <br />
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
