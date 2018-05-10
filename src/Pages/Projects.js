import React from 'react'
import {pageTitleStyle} from './../components/Base.js'
import TwentyFourtyEight from './../components/2048.js'
import AdjustableBarGraph from './../components/AdjustableBarGraph.js'
import CollapsibleCard from './../components/CollapsibleCard.js'

import reactLogo from './../logo.svg'

export let Projects = () => {

  const selfDescription = () => {
    return(
      <p>
        This website was developed from scratch, without the use of a template.
      </p>
    )
  }

  const reactIcon = () => (
    <img src={reactLogo} alt="" style={{width:60, height:60}}/>
  )

  return(
    <div>
      <h1 style={pageTitleStyle}>Projects</h1>
      <CollapsibleCard title='This Website' icon={reactIcon()}>
        {selfDescription()}
      </CollapsibleCard>
        <div style={{width:"50%", float:"left"}}>
          <CollapsibleCard title='Two to the Eleventh' collapsible>
            <TwentyFourtyEight/>
          </CollapsibleCard>
        </div>
        <div style={{width:"50%", float:"left"}}>
          <CollapsibleCard title= "Adjustable Bar Graph" collapsible>
            <AdjustableBarGraph barCount={4}/>
          </CollapsibleCard>
        </div>
    </div>
  )
}
