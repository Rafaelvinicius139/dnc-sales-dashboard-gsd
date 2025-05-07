import styled from "styled-components";

const LoginArea = styled.div`
  background-color: #666;
 
`;

const LoginImage = styled.div`
   background-image: url('/foto.jpg');
   background-size: cover;
   height: 100vh;
   width: 50vw;
`;


function Login() {

  return (
    <>

     <LoginArea>Login</LoginArea>
     <LoginImage/>
    </>
  )
}

export default Login

