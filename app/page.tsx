import Navbar from "./Components/Navbar";
import Showcase from "./Components/Showcase";
import Simple from "./Components/Simple_Process";
import Animated from "./Components/Animated_lines";
import WorkSlider from "./Components/Slider";

export default function Home() {
  return (
    <>
      <Navbar />
      <Showcase />
      <Animated />
      <Simple />
      <WorkSlider />
      <div className="min-h-96"></div>
    </>
  );
}
