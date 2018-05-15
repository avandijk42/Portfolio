import React from 'react'
import CollapsibleCard from './../components/CollapsibleCard.js'
import {pageTitleStyle, cardIconStyle, cardListStyle} from './../components/Base.js'
import {PanelGroup} from 'react-bootstrap'

import umass from '../resources/umass.png'
import jsonData from '../resources/blurbs/Education.json'

export let Education = () => {

  const card = (id, icon, title, subtitle, body) => {
    const iconImage = (
      <img src={icon} alt="INF" style={cardIconStyle} />
    )

    return (
      <CollapsibleCard
        icon={iconImage}
        title={title}
        subtitle={subtitle}
        eventKey={id}
        collapsible
      >
        {body}
      </CollapsibleCard>
    )
  }

  const semester = (i) => {
    const sem = i % 2 === 0 ? "Spring 201" : "Fall 201"
    var year = "" + (7 - Math.floor((i-1)/2))
    return sem + year
  }

  const gpaSubtitle = (i) => (
    "GPA " + jsonData[semester(i)]["gpa"]
  )

  const classBody = (i) => {
    const allClassData = jsonData[semester(i)]["classes"]
    return(
      <ul>
        {allClassData.map(c =>
          <li style={cardListStyle.title}>
            {c["title"]}
            <ul>
              {
                c["description"].map(line =>
                  <li style={cardListStyle.listItem}> {line} </li>
                )
              }
            </ul>
          </li>
        )}
      </ul>
    )
  }

  return(
    <div>
      <h1 style={pageTitleStyle}>
        education
      </h1>
      <PanelGroup>
        {[...Array(8).keys()].map(i =>
          card(i, umass, semester(i), gpaSubtitle(i), classBody(i))
        )}
      </PanelGroup>
    </div>
  )
}
