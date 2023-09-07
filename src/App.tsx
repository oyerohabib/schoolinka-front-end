import NavbarSection from "./components/NavbarSection";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <NavbarSection />
      </div>
      <hr />
      <div className="container mx-auto">
        <Header />
      </div>
    </>
  );
}

export default App;
