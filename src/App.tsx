import Hero from "./components/ui/Hero";
import Welcome from "./components/ui/Welcome";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Info from "./components/ui/Info.module/Info";
import StartLearning from "./components/ui/StartLearning/StartLearning";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Welcome />
      <StartLearning/>
      <Info/>
      <Footer/>
    </>
  );
}

export default App;
