import React from 'react'
import {pageTitleStyle,projectDescriptionStyle} from './../components/Base.js'
import TwentyFourtyEight from './../components/2048.js'
import AdjustableBarGraph from './../components/AdjustableBarGraph.js'
import CollapsibleCard from './../components/CollapsibleCard.js'

import './../styles/Projects.css'

import reactLogo from './../logo.svg'

export let Projects = () => {

  const selfDescription = () => {
    return(
      <p style={projectDescriptionStyle}>
        This website was developed from scratch, without the use of a template.
      </p>
    )
  }

  const reactIcon = () => (
    <img src={reactLogo} alt="" style={{width:60, height:60}}/>
  )

  return(
    <div>
      <h1 style={pageTitleStyle}>projects</h1>
      <CollapsibleCard title='This Website' icon={reactIcon()}>
        {selfDescription()}
      </CollapsibleCard>
        <div className="project-card">
          <CollapsibleCard title='Two to the Eleventh' collapsible>
            <TwentyFourtyEight/>
          </CollapsibleCard>
        </div>
        <div className="project-card">
          <CollapsibleCard title= "Adjustable Bar Graph" collapsible>
            <AdjustableBarGraph barCount={4}/>
          </CollapsibleCard>
        </div>
    </div>
  )
}
