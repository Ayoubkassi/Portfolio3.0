import Head from 'next/head'
import { Main , More , Down , Social } from '../styles/HomePage.styles';
import Navbar from '../components/Navbar/Navbar.component';
import Landing from '../components/Landing/Landing.component';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import Work from '../components/Work/Work.component';
import Projects  from '../components/Projects/Projects.component';
import Ventures from '../components/Ventures/Ventures.component';
import Connect from '../components/Connect/Connect.component';
import Footer from '../components/Footer/Footer.component';
import Media from '../components/Social/Social.component';


export default function Home() {
  return (
    <>
      <Head>
        <title>Ayoub Kassi</title>
        <meta name="keywords" content="Ayoubkassi, Ayoub , kassi , software engineer" />
        <meta name="author" content="Ayoub Kassi" />
        <link rel="icon" href="./1.png" />
      </Head>

      <Main>
        <Navbar background="transparent" color="white"/>
        <Landing />
        <Social>
          <Media flexDirection="column" size="medium"/>
          </Social>
        <Down>
          <More
                to="work"
                activeClass="active"
                spy={true}
                smooth={true}>Read More<br/></More>
          <ExpandMoreRoundedIcon style={{marginLeft : '35px', fontSize: 60 }} />
        </Down>
      </Main>
      <Work />
      <Projects />
      <Ventures />
      <Connect />
      <Footer />
    </>
  )
}
