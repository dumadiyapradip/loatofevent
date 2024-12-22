import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Footer from './componet/footer/Footer'
// import Navbar from './componet/header/Navbar';
import NavbarA from './componet/header/Nav1'

function App() {
  return (
    <>
      <NavbarA />
      <Outlet />
      <Footer />
    </>
  )
}
export default App
