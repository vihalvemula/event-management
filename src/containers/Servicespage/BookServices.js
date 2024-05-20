import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BookVenue from "./BookVenue";
import VenuesListPage from "./VenuesListPage";

const BookServices = () => {
  return (
    <div>
      <Header />
      <div style={{ flex: 1, minHeight: "100vh" }}>
        <BookVenue />
      </div>
      <Footer />
    </div>
  );
};

export default BookServices;
