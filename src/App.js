import { Route, Routes } from "react-router-dom";
import SideBar from "./component/SideBar/SideBar"
import Dashboard from "./component/Dashboard/Dashboard"
import Login from "./component/Login";
import CarData from "./component/Cars/CarData";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<SideBar/>} />
      <Route path="/dashboard" element={ <SideBar> <Dashboard/> </SideBar>} />
      <Route path="/car" element={ <SideBar> <CarData/> </SideBar>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </>
  );
}

export default App;
