import Footer from "../../components/Footer";
import Header from "../../components/Header";
import VenuesListPage from "./VenuesListPage";

const AllServices = () => {
  return (
    <div>
      <Header />
      <div style={{ flex: 1, minHeight: "100vh" }}>
        <VenuesListPage />
      </div>
      <Footer />
    </div>
  );
};

export default AllServices;
