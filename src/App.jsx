import { useState } from 'react'
import './App.css'
import On from './componentes.jsx/On'
import E from './componentes.jsx/E'
import A from './componentes.jsx/A'
import B from './componentes.jsx/B'
import C from './componentes.jsx/C'
import D from './componentes.jsx/D'
import F from './componentes.jsx/F'
import G from './componentes.jsx/G'
import H from './componentes.jsx/H'
import S from './componentes.jsx/S'


export default function App() {
  const [ count , setCount ] = useState(0)

   return(
   <>
   <div classename = "App"></div>
   <h1></h1>
   <On/>
   <E/>
   <A/>
   <B/>
   <C/>
   <D/>
   <F/>
   <G/>
   <H/>
   <S/>
   </>
   )
}
