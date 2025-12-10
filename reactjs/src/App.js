import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WorkDetail from "./pages/WorkDetail";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CustomCursor from "./components/layout/CustomCursor";
import ScrollToTop from "./components/layout/ScrollToTop";

const App = () => {
  return (
    <div className="bg-white min-h-screen">
      <CustomCursor />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/work/:slug" element={<WorkDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
