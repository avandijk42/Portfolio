import React, { Component } from 'react';
import CollapsibleCard from './../components/CollapsibleCard.js'
import {pageTitleStyle, cardIconStyle, cardListStyle} from './../components/Base.js'
import {PanelGroup} from 'react-bootstrap'

import cisco from '../resources/cisco.png'
import amazon from '../resources/amazon.ico'
import umass from '../resources/umass.png'
import redlance from '../resources/redlance.PNG'

import TimelineData from './../resources/blurbs/Timeline.json'
const job_desc_key = "job_description"
const lines_key = "lines"

export default class Timeline extends Component{

  cardBody = (key) => {
    const desc = TimelineData[key][job_desc_key]
    const lines = TimelineData[key][lines_key]

    console.log(desc)
    return (
      <ul>
        <li style={cardListStyle.title}>
          {desc}
          <ul>
            {
              lines.map(line =>
                <li style={cardListStyle.listItem}> {line} </li>
              )
            }
          </ul>
        </li>
      </ul>
    )
  }

  card = (id, icon, title, subtitle) => {
    const iconImage = (
      <img src={icon} alt="INF" style={cardIconStyle}/>
    )

    return(
      <CollapsibleCard icon={iconImage} title={title} subtitle={subtitle} eventKey={id} collapsible>
        {this.cardBody(title)}
      </CollapsibleCard>
    )
  }

  render(){
    return(
      <div>
        <h1 style={pageTitleStyle}>
          timeline
        </h1>
        <PanelGroup>
          {this.card(0, cisco, "Cisco", "Aug 2018 - Now")}
          {this.card(1, umass, "Project RAISE", "Sep 2016 - Jul 2018")}
          {this.card(2, amazon, "Amazon", "May 2017 - Aug 2017")}
          {this.card(3, redlance, "RedLance Comics", "May 2016 - Nov 2016")}
        </PanelGroup>
      </div>
    )
  }
}

const styles = {
  positionName:{
    fontFamily:"'Roboto', sans-serif",
    fontWeight:600,
    fontSize:22,
    listStyleType:"none"
  },
  jobDescription:{
    fontFamily:"'Montserrat', sans-serif",
    fontWeight:100,
    fontSize:20,
    listStyleType:"disc"
  }
}
