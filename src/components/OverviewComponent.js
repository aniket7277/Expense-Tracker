// FileName: OverviewComponent.js 

import styled from "styled-components";

const Container = styled.div` 
display: flex; 
justify-content: space-between; 
align-items: center; 
margin-bottom: 25px; 
`; 

const Balance = styled.h2` 
font-weight: 500; 
& span { 
	font-weight: bold; 
} 
`; 

const AddBtn = styled.button` 
cursor: pointer; 
background-color: #33ccff; 
color: rgb(255, 255, 255); 
padding: 7px 20px; 
font-size: 16px; 
border: none; 
text-transform: uppercase; 
border-radius: 5px; 
box-shadow: inset 5px 5px 8px #66d9ff, inset -5px -5px 8px #00ace6;
&:hover{
	box-shadow: inset 5px 5px 8px #00ace6, inset -5px -5px 8px #00ace6;
}

`; 

const OverviewComponent = ({ toggle, setToggle, income, expense }) => { 
const bal = income - expense; 

return ( 
	<Container> 
	<Balance> 
		Balance <span>₹{bal}</span> 
	</Balance> 
	<AddBtn className="addButton" onClick={() => setToggle(!toggle)}> 
		{toggle ? "Cancel" : "Add"} 
	</AddBtn> 
	</Container> 
); 
}; 

export default OverviewComponent; 

    