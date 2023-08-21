import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from "./components/Home/Home";
import EnglishMenu from './components/EnglishMenu/EnglishMenu';
import PolishMenu from './components/PolishMenu/PolishMenu';
import ItalianMenu from './components/ItalianMenu/ItalianMenu';
import FrenchMenu from './components/FrenchMenu/FrenchMenu';
import MainSelection from './components/MainSelection/MainSelection';
import EnglishPizzaNonVeg from './components/EnglishPizzaNonVeg/EnglishPizzaNonVeg';
import VegSel from './components/VegSel/VegSel';
import PizzaEnglishVeg from './components/EnglishPizzaVeg/EnglishPizzaVeg';
import PastaEnglish from './components/EnglishPasta/EnglishPasta';
import EnglishDrinks from './components/DrinksEnglish/EnglishDrinks';
import FingerFoodEnglish from './components/FingerFoodEnglish/FingerFoodEnglish';
import EnglishDealsMenu from './components/MenuDealEnglish/EnglishDealsMenu';
import DessertEnglish from './components/DessertsEnglish/DessertEnglish';
import SaladEnglish from './components/SaladEnglish/SaladEnglish';
import Biersorten from './components/BiersortenEnglish/biers';
import DrinkSel from './components/DrinkSel/DrinkSel';
import StartPage from './components/StartPage/StartPage';



function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/EnglishMenu" element={<EnglishMenu />} />
        <Route path="/PolishMenu" element={<PolishMenu />} />
        <Route path="/ItalianMenu" element={<ItalianMenu />} />
        <Route path="/FrenchMenu" element={<FrenchMenu />} />
        <Route path="/SelectionMenu" element={<MainSelection />} />
        <Route path="/EnglishPizzaNonVeg" element={<EnglishPizzaNonVeg />} />
        <Route path="/EnglishPizzaVeg" element={<PizzaEnglishVeg />} />
        <Route path="/EnglishPasta" element={<PastaEnglish />} />
        <Route path="/VegSel" element={<VegSel />} />
        <Route path="/DrinkSel" element={<DrinkSel />} />
        <Route path="/EnglishDrinks" element={<EnglishDrinks />} />
        <Route path="/FingerFoodEnglish" element={<FingerFoodEnglish />} />
        <Route path="/EnglishDealsMenu" element={<EnglishDealsMenu />} />
        <Route path="/EnglishDesserts" element={<DessertEnglish />} />
        <Route path="/EnglishSalad" element={<SaladEnglish />} />
        <Route path="/EnglishBeer" element={<Biersorten />} />
        
    
       
      </Routes>
    </Router>
  );
}

export default App;
