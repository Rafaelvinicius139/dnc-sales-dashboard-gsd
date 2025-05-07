import styled from "styled-components";

const RegistrationArea = styled.div`
  background-color: #666;
 
`;

const RegistrationImage = styled.div`
   background-image: url('/foto.jpg');
   background-size: cover;
   height: 100vh;
   width: 50vw;
`;


function Registration() {

  return (
    <>

    <RegistrationArea></RegistrationArea>
   <RegistrationImage></RegistrationImage>
    </>
  )
}

export default Registration