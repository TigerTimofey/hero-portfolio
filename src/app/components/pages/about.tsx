import LazyLoad from "react-lazy-load";
import PieChart from "../piecharts/piechartAbout";

const aboutMe = {
  name: "I'm a web developer based in the cozy city Tallinn, Estonia.",
  description: `\u00A0 Since 2020, I've embarked on an exciting journey in web development, crafting digital experiences and bringing ideas to life on the web. When I'm not immersed in code, you'll find me wielding my skills as a passionate sushi chef, creating delectable culinary delights.
  Beyond the world of technology, I'm a loving father, cherishing every moment with my family. Life is a rich tapestry of flavors, both in code and in the kitchen!`,
};

export default function About() {
  return (
    <>
      <div className="bg-gray-300">
        <div className="container flex items-center justify-center px-4 mx-auto">
          <h1
            style={{ fontFamily: "var(--font-calsans), sans-serif" }}
            className="mt-2 z-10 text-4xl text-transparent duration-1000 bg-black cursor-default text-edge-outline  font-display sm:text-6xl md:text-6xl whitespace-nowrap bg-clip-text"
          >
            .about
          </h1>
        </div>
        <main className="flex flex-col items-center flex-1 px-4 sm:px-20 w-full text-center z-10 py-8 sm:pb-20 relative">
          <section className="border border-gray-300 bg-white rounded-lg shadow-lg mt-16 w-full hover:shadow-2xl transition pt-16 lg:pt-24 relative z-0">
            <div className="p-4 flex flex-col justify-center items-center border-b">
              <div className="flex justify-between w-full items-baseline">
                <div className="mx-auto text-center flex flex-col">
                  <div className="mx-auto">
                    <LazyLoad width="100%" threshold={0.25}>
                      <PieChart />
                    </LazyLoad>
                  </div>
                  <br />
                  <h4 className="font-semibold text-xl">
                    <code>{aboutMe.name}</code>
                  </h4>
                  <br />
                  <h5 className="text-gray-700">{aboutMe.description}</h5>
                </div>
              </div>
            </div>
          </section>{" "}
        </main>
      </div>
    </>
  );
}
