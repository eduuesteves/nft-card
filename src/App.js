import './styles.scss';
import { useState } from 'react';
import equilibrium from './images/image-equilibrium.jpg';
import ethereum from './images/icon-ethereum.svg';
import clock from './images/icon-clock.svg';
import avatar from './images/image-avatar.png';

export function App() {
  const [c, setC] = useState(true);

  return (
    <div className="wrapper">
      <img 
        src={equilibrium}
        className={c ? 'opacity' : null}
        
      />
      <div>
        <h1 
            className={c ? 'green' : null}
        >Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div className="cash">
          <div className="ethereum">
            <img src={ethereum} />
              0.041 ETH
          </div>
          <div className="clock">
            <img src={clock} />
              3 days left
          </div>
        </div>
        <div className="profile">
          <img src={avatar} />
          <p>Creation of <strong>Jules Wyvern</strong></p>
        </div>
      </div>
    </div>
  )
}