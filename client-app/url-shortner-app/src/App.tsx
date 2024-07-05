import * as React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <div className=" min-h-svh flex flex-col bg-[#f2e8e4]"> 
      <Header />
      <div className="flex-grow">
        <Container />
      </div>
      <Footer />
      
      </div>
    </>
  );
};

export default App;
