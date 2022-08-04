import { Title , Main , Container , Btn } from './Login.styles';
import {useState} from 'react'
import { useRouter } from 'next/router'



const Login = () => {

  const router = useRouter()
  const [username , setUsername ] = useState('');
  const [password , setPassword ] = useState('');
  const [error , setError ] = useState(null);
  const isInvalid = username === '' || password === '';

  function redirectClick(){
    setError('');
    router.push('login')
  }

  const handleSingIn = (e)=>{
    e.preventDefault();
    console.log(`Username : ${username} and passowrd : ${password}`);

    setError('Failed to log in as HangFire');
    setUsername('');
    setPassword('');
  }


  return (
    <Main>
      <Container>
      { error ?
          <>
            <h4 style={{textAlign : 'center' , paddingTop : '10vw'}}>{error}</h4>
            <Btn style={{marginTop : '8px'}} onClick={redirectClick}>Rerty</Btn>
          </>
         :
        <>
        <Title>Login</Title>
        <form autoComplete="off" onSubmit={handleSingIn}>
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="name">Username</label>
            <input type="text" value={username} onChange={({target}) => setUsername(target.value)} required className="form-control" placeholder="Enter Username" autoComplete="off" />
            </div>
            <label htmlFor="Password">Password</label>
          <input type="password" value={password} onChange={({target}) => setPassword(target.value)} required className="form-control" placeholder="Enter Password" />
          </div>
          <Btn disabled={isInvalid} type="submit">Submit</Btn>
        </form>
        </>
      }
      </Container>
    </Main>
  )
}



export default Login;
