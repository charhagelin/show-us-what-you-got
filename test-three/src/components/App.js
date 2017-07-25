import React from 'react';
import data from './Data/menu-data.json';
import './App.css';
import Dropdown from './Dropdown';


const App = () => {


  return(
    <div>
      <div className="container">
        <img className="sticker" src='http://s.productreview.com.au/products/images/moshtix_4cb291c5ef20d.jpg' alt="moshtix"/>

           {data.children.map((item, i) => {
             return (
                <Dropdown
                  key={i}
                  item={item}
                   />
                 )
               })
             }
       </div>
    </div>

  )
}

export default App;
