import NavBar from "components/NavBar";
import Datatable from "components/NavBar/Datatable";
import Footer from "components/NavBar/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Ola mundo!</h1>

        <Datatable />

      </div>
      <Footer />
    </>
  );
}

export default App;
