import React from 'react'
import ComponentNav from './components/nav'
import PriceEngine from './components/tabs/price_engine';
import Tabs from './components/tabs';
import SliderPage from './components/slider';

function App() {
  return (
    <div>
      <ComponentNav/>
      <Tabs/>
    </div>
  );
}

export default App;
