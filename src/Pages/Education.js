import React from 'react'
import CollapsibleCard from './../components/CollapsibleCard.js'
import {pageTitleStyle, cardIconStyle} from './../components/Base.js'
import {PanelGroup} from 'react-bootstrap'

import umass from '../resources/umass.png'

export let Education = () => {


  const card = (id, icon, title, subtitle, body) => {
    const iconImage = (
      <img src={icon} alt="INF" style={cardIconStyle} />
    )

    return (
      <CollapsibleCard icon={iconImage} title={title} subtitle={subtitle} eventKey={id}>
        {body}
      </CollapsibleCard>
    )
  }

  const semester = (i) => {
    const sem = i % 2 === 0 ? "Spring 201" : "Fall 201"
    var year = "" + (7 - Math.floor((i-1)/2))
    return sem + year
  }

  return(
    <div>
      <h1 style={pageTitleStyle}>
        Education
      </h1>
      <PanelGroup accordion>
        {[...Array(8).keys()].map(i =>
          card(i, umass, semester(i), "", "")
        )}
      </PanelGroup>
    </div>
  )
}
