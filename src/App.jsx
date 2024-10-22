import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import JobForm from "./pages/jobposting";
import Loginpage from "./pages/loginpage";

export default function App() {
  return (
    <>
      <Navbar />
      {/* <JobForm/> */}
      <Routes>
        <Route path="/" element={<JobForm/>}/>
        <Route path="/loginpage" element={<Loginpage/>}/>
      </Routes>
    </>
  );
}

