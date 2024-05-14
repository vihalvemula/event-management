import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Services from "./Services";

const AllServices = () => {
  return (
    <div>
      <Header />
      <div style={{ flex: 1, minHeight: "100vh" }}>
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default AllServices;
