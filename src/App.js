import { Fragment } from 'react';
import './App.css';
import { Navbar } from './componenets/Navbar/Navbar';
import Card from './componenets/Card/Card';
import { MainDiv } from './componenets/Main/styles';
import Sort from './componenets/Sort/Sort';



function App() {
  return (
   <Fragment>
<Navbar />  
<MainDiv>
<Sort />
<Card />  
</MainDiv>
   </Fragment>
  );
}

export default App;
