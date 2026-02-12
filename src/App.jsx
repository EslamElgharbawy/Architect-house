import { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader";
import MainContent from "./Components/MainContent/MainContent";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const Timeout = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(Timeout);
  }, []);
  return (
    <>
      <AnimatePresence>
        {isLoading ? <Loader key={"loader"}/> : <MainContent key={"mainContent"}/>}
      </AnimatePresence>
    </>
  );
}

export default App;
