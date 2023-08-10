import "./App.css";
import clapping from "./asset/clapping.gif";
import Footer from "./component/Footer";
import Input from "./component/Input";
function App() {
  return (
    <div className=" w-full min-h-screen font-poppins bg-gradient-to-r from-[#003366] to-[#0099cc] text-white px-4 flex justify-center items-center">
      <div className="w-[850px] bg-amazon_blue p-10 flex flex-col gap-10">
        <Input />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
