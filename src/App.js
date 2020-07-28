import React, { useState } from 'react';
import {BrowserRouter , Switch ,Route} from 'react-router-dom'
import Home from './components/home/Home';
import Description from './components/description/Description';
import Header from './components/Header';


function App() {
  const [state, setState]= useState({
    pictures : [
      {
        img: "/images/one.jpg",
        description: "my wedding day",
        comments: []
      },
      {
        img: "/images/two.jpg",
        description: "yes, i did it",
        comments: []
      },
      {
        img: "/images/three.jpg",
        description: "she makes me happy",
        comments: []
      },
      {
        img: "/images/four.jpg",
        description: "me at flower girl mode",
        comments: []
      },
      {
        img: "/images/five.jpg",
        description: "sending kisses",
        comments: []
      },
      {
        img: "/images/six.jpg",
        description: "does this dress suite me ?",
        comments: []
      },
      {
        img: "/images/seven.jpg",
        description: "big like",
        comments: []
      },
      {
        img: "/images/eight.jpg",
        description: "love is love",
        comments: []
      },
      {
        img: "/images/nine.jpg",
        description: "at the beach",
        comments: []
      },
      {
        img: "/images/ten.jpg",
        description: "dont forget to smile",
        comments: []
      },
      {
        img: '/images/eleven.jpg' ,
        description: 'our wedding picture' ,
        comments: []
      },
    ],
    desImage: {},
    
  })
  const  { desImage ,pictures } = state
  return (
   <BrowserRouter>
   <Header />
   <main>
     <Switch>
       <Route path='/' exact>
        <Home desImage={desImage} pictures={pictures} state={state}  setState={setState}/>
       </Route>
       <Route path='/description' exact>
        <Description desImage={desImage} pictures={pictures} state={state}  setState={setState} /> 
       </Route>
     </Switch>
   </main>
   </BrowserRouter>
  );
}

export default App;
