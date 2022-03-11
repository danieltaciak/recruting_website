import React, { useRef, useState } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { useTrail, a } from '@react-spring/web'
import styles from './styles.module.css'

import logo from './DynamicsLogo.png'
import CC from './CC.png'
import CLC from './CLC.png'
import Cone from './Cone.png'
import STGruppe from './STGruppe.png'
import Pathplanning from './PathplanningComponent.png'
import Infoabend from './Infoabend.png'

import Terminal1 from './Terminal1.png'
import Terminal2 from './Terminal2.png'
import Terminal3 from './Terminal3.png'

import { relative } from 'path/posix'
import { rootCertificates } from 'tls'






const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 500, friction: 150 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 130 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}


// Little helpers ...
const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function App() {
  const parallax = useRef<IParallax>(null!)
  const [open, set] = useState(true)
  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#FF4F4F' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#3B3B3B' }} />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={CLC} style={{ width: '15%', marginLeft: '80%', transform: "rotate(-10deg)"}} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={CC} style={{ width: '15%', marginLeft: '10%', transform: "rotate(3deg)"}} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={STGruppe} style={{ width: '15%', marginLeft: '16%', transform: "rotate(3deg)"}} />
        </ParallaxLayer>
        <ParallaxLayer offset={0.25} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={Infoabend} style={{ width: '23%', marginLeft: '70%', transform: "rotate(10deg)"}} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.2} speed={-0.5} style={{ pointerEvents: 'none' }}>
          <img src={Pathplanning} style={{ width: '15%', marginLeft: '80%', transform: "rotate(10deg)"}} />
        </ParallaxLayer>

        
        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
     
        </ParallaxLayer>

      

          <ParallaxLayer
           sticky={{start: 0, end: 5}}
           offset={3}
           speed={0.1}
           >
            <img src={logo} style={{width: '150px', height: '150px', padding: '30px'}} />
          </ParallaxLayer>
        


        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          
          <div className={styles.container} onClick={() => set(state => !state)}>
          
           <Trail open={open}>
             <span style={{color: '#FF4646'}}>Dynamics</span>
             <span>&ensp;&ensp;&ensp;Regensburg</span>
             <span style={{color: '#FF4646'}}>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Driverless</span>
           </Trail>
          </div>
        </ParallaxLayer>

        

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={Terminal1} style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}>
          <img src={Terminal2} style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer 
          offset={2}
          speed={-0.2}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'left',
            backgroundImage: Terminal3,
          }}
        />
        <ParallaxLayer 
          offset={3.1}
          speed={-0.3}
          style={{
          }}

        ><h1>dynamics-regensburg.de</h1></ParallaxLayer>

      </Parallax>
      
    </div>
  )
}

