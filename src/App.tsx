import React from 'react';
import { Header } from './Components/Header/Menu';
import { Slider } from './Components/Header/Slider';
import { Introduction } from './Components/Introduction';
import { Skills } from './Components/Skills';
import { Solutions } from './Components/Solutions';
import { GlobalStyle } from './Styles/global';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (    
    <>
     <GlobalStyle/>
     <Header/>
     <Slider/>
     <Introduction/>
     <Solutions/>
     <Skills />
    </>
    
  
  );
}

export default App;
