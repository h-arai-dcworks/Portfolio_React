import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RestaurantDetailPage from "./pages/RestaurantDetailPage/RestaurantDetailPage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants/:id" element={<RestaurantDetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
