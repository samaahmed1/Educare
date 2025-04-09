import Hero from "./components/ui/Hero";
import Welcome from "./components/ui/Welcome";
import Header from "./components/layouts/Header";
import StartLearning from "./components/ui/StartLearning/StartLearning";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Welcome />
      <StartLearning/>
    </>
  );
}

export default App;
