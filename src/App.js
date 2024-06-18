// FileName: App.js 

import styled from "styled-components"; 
import Tracker from "./components/Tracker"; 
import GlobalStyles from "./globalStyles"; 

const Main = styled.div` 
    background: #ecf0f3;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    user-select: none;
`; 

const App = () => { 
return ( 
	<Main> 
	<GlobalStyles /> 
	<Tracker /> 
	</Main> 
) 
} 

export default App;
