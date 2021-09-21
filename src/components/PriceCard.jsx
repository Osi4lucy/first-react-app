import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin-right: 50px;
	padding: 20px;
	-webkit-box-shadow: 1px 7px 15px -4px #000000;
	box-shadow: 1px 7px 15px -4px #000000;
	background-color: white;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
  @media only screen and (max-width: 480px) {
	margin-right: 0;
  margin-bottom:10px;
  padding:10px;}
`;
const Price = styled.span`
	font-weight: bold;
	font-size: 40px;
  @media only screen and (max-width: 480px) {
		font-size: 30px;
    }
`;
const PriceContainer = styled.div`
	display: flex;
	align-items: center;
`;
const Type = styled.button`
	padding: 10px;
	margin: 10px 0;
	border: 1.5px solid crimson;
	color: crimson;
	background-color: white;
	border-radius: 10px;
  @media only screen and (max-width: 480px) {
		display:none;}
`;
const List = styled.ul`
	list-style: none;
  margin-right:10px;
  `;
const ListItem = styled.li`
	margin: 20px 0;
  text-align: center;
  @media only screen and (max-width: 480px) {
		margin:10px;
    font-size:12px}
`;
const Button = styled.button`
	border: none;
	background-color: darkblue;
	color: white;
	font-size: 16px;
	font-weight: bold;
	padding: 15px;
	border-radius: 10px;
	cursor: pointer;
  @media only screen and (max-width: 480px) {
font-size:12px;
padding: 7px;}
`;

const PriceCard = ({price, type}) => {
	return (
		<Container>
			<PriceContainer>
        $<Price>{price}</Price>/month
			</PriceContainer>
      <Type>{type}</Type>
			<List>
				<ListItem>200 Hand-Crafted Templates</ListItem>
				<ListItem>Exculsive Support</ListItem>
				<ListItem>50+ Prebuilt Websites</ListItem>
				<ListItem>Premium Plugins</ListItem>{' '}
			</List>
			<Button>Join Now</Button>
		</Container>
	);
};

export default PriceCard;
