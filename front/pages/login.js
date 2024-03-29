import Navbar from '../components/Navbar/Navbar.component';
import Connect from '../components/Connect/Connect.component';
import Footer from '../components/Footer/Footer.component';
import { Main } from '../styles/LoginPage.styles';
import Login from '../components/Login/Login.component';


const Admin = () => {

  return (
    <Main>
      <Navbar background="white" color="black"/>
      <Login />
      <Connect />
      <Footer />
    </Main>
  )
}





export default  Admin;
