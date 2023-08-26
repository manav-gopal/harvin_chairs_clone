import './App.css';
import Hero from './components/Hero';
import Items from './components/Items';
import Highlights from './components/Highlights';
import HappyClients from './components/HappyClients';
import Categories from './components/Categories';
import Services from './components/Services';
import Location from './components/Location';
import Footers from './components/Footers';
import Navbar from './components/Navbar';

import sofa from './components/assets/img/sofa.png'
import chair from './components/assets/img/chair.png'

function App() {
  const header1 = (<h1>Monthly <span>Highlights</span></h1>);
  const header2 = (<h1>Experience <span>Quality Like</span> Never Before</h1>);

  const para1 = (<p>Product of the month Sale Ends In</p>);
  const para2 = (<p>First time in Chhattishgarh</p>);
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className='App_main'>
        <Navbar />
        <Hero />
        <Items />
        <Highlights img={sofa} header={header1} para={para1} time={<h3>00H : 59M : 57S <div className='box'></div></h3>}/>
        <HappyClients />
        <Categories />
        <Services />
        <Highlights img={chair} header={header2} para={para2}/>
        <Location />
        <Footers />
      </main>
    </div>
  );
}

export default App;
