import React from 'react'
import {pageTitleStyle} from './../components/Base.js'
import TwentyFourtyEight from './../components/2048.js'
import AdjustableBarGraph from './../components/AdjustableBarGraph.js'
export let Projects = () => {

  return(
    <div>
      <h1 style={pageTitleStyle}>
        Projects
      </h1>
      <TwentyFourtyEight />
      <AdjustableBarGraph barCount={4}/>
    </div>
  )
}
