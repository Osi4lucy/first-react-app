import React from 'react';
import styled from 'styled-components';
import App from '../img/app.png';
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
display: flex;
@media only screen and (max-width: 480px){
		flex-direction: column;
    padding:30px 20px
	}
`;

const Left = styled.div`
width: 50%;
@media only screen and (max-width: 480px){
	display:none;
	}
`;
const Right = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 30px;
@media only screen and (max-width: 480px){
		width: 100%;
	}
`;
const Image = styled.img`
margin-top:30px`;

const Title = styled.span`
font-size:70px;
@media only screen and (max-width: 480px){
		font-size: 50px;
	}
`;

const SubTitle = styled.span`
font-size:24px;
font-style:italic;
color: #333`;

const Description = styled.p`
font-size:20px;
color:#777;
margin-top:30px;
`;
const Button = styled.button`
width:150px;
border:none;
padding: 15px 20px;
background-color:darkblue;
color:white;
font-size:20px;
border-radius:20px;
margin-top: 20px;
cursor: pointer;`;



const Feature = () => {
  return (
    <Container>
      <Left><Image src={App}/></Left>
      <Right>
        <Title><b>Good </b>Design <br/><b>Good </b> business</Title>
        <SubTitle>We know that good design means good business</SubTitle>
        <Description>
        We believe that designing products and services in close relationship with our clients is
					the only way to have a real impact on their business.
        </Description>
        <Description>
        We believe that designing products and services in close relationship with our clients is
					the only way to have a real impact on their business.
        </Description>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  )
}

export default Feature
