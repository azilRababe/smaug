import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  Services,
  World,
} from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About id="about" />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>

    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      {/* <Services id="services" /> */}
    </div>
    <World />
    <div className="relative">
      <Insights id="why-us" />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer id="contact" />
  </div>
);

export default Page;
