import NavbarSection from "./components/NavbarSection";
import Header from "./components/Header";
import CalendarTaskSection from "./components/CalendarTaskSection";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <NavbarSection />
      </div>
      <hr />
      <div className="container mx-auto">
        <Header />
        <CalendarTaskSection />
      </div>
    </>
  );
}

export default App;
