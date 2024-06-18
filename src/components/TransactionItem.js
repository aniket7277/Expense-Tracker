// FileName: TransactionItem.js 

import React from "react"; 
import styled from "styled-components"; 

const Item = styled.div` 
display: flex; 
justify-content: space-between; 
align-items: center; 
border: 1px solid #e6e8e9; 
background-color: #fff; 
border-radius: 5px; 
padding: 10px 20px; 
border-right: 5px solid ${(props) => (props.isExpense ? "red" : "green")}; 
margin-bottom: 10px; 
cursor: pointer; 
`; 

const RemoveButton = styled.button` 
background-color: #33cc33; 
color: white; 
border: none; 
padding: 5px 10px; 
border-radius: 3px; 
cursor: pointer; 
box-shadow: 5px 5px 8px #00000020, -5px -5px 8px #ffff;
&:hover { 
	box-shadow: inset 5px 5px 8px #2eb82e, inset -5px -5px 8px #33cc33;
} 
`; 

const TransactionItem = ({ transaction, removeTransaction }) => { 
return ( 
	<Item isExpense={transaction?.transType === "expense"}> 
	<span>{transaction.details}</span> 
	<span>₹{transaction.amount}</span> 
	<RemoveButton onClick={() => removeTransaction(transaction.id)}> 
		Remove 
	</RemoveButton> 
	</Item> 
); 
}; 

export default TransactionItem; 