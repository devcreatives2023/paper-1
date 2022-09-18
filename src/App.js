import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blog, Contact, Home } from "./pages";
import { RiseLoader } from "react-spinners";
import { Model } from "./components";
import Context from "./context/Context";
import { AnimatePresence } from "framer-motion";
const App = () => {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center pt-[20%]">
          <RiseLoader
            color="#7329ac"
            loading={loading}
            margin="30%%"
            size={40}
            speedMultiplier={1}
          />
        </div>
      ) : (
        <AnimatePresence exitBeforeEnter>
          <Context className="h-screen bg-white">
            <Model />
            <BrowserRouter>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="blog" element={<Blog />} />
                  <Route path="contact" element={<Contact />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </Context>
        </AnimatePresence>
      )}
    </>
  );
};

export default App;
