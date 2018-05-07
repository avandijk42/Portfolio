import React from 'react'
import {pageTitleStyle} from './../components/Base.js'
import TwentyFourtyEight from './../components/2048.js'
import AdjustableBarGraph from './../components/AdjustableBarGraph.js'
import CollapsibleCard from './../components/CollapsibleCard.js'
export let Projects = () => {

  return(
    <div>
      <h1 style={pageTitleStyle}>Projects</h1>
      <CollapsibleCard title='Two to the Eleventh' collapsible>
        <TwentyFourtyEight />
      </CollapsibleCard>
      <CollapsibleCard title= "Adjustable Bar Graph" collapsible>
        <AdjustableBarGraph barCount={4}/>
      </CollapsibleCard>
    </div>
  )
}
