import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar.component';
import Connect from '../components/Connect/Connect.component';
import Footer from '../components/Footer/Footer.component';
import { Main } from '../styles/SoftwarePage.styles';
import Repo from '../components/Repo/Repo.component';
import Techno from '../components/Techno/Techno.component';
import  WithSpinner  from '../components/with-spinner/with-spinner.component';


const RepowWithSpinner = WithSpinner(Repo);

const SoftwarePage = () => {
  const [loading , setLoading ] = useState(true);




  return (
    <Main>
      <Navbar background="white" color="black"/>
      <RepowWithSpinner isLoading={loading} />
      <Techno />
      <Connect />
      <Footer />
    </Main>
  )

}

export default SoftwarePage;
