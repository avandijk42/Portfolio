import React, { Component } from 'react';
import CollapsibleCard from './../components/CollapsibleCard.js'
import {pageTitleStyle, cardIconStyle} from './../components/Base.js'
import {PanelGroup} from 'react-bootstrap'


import cisco from '../resources/cisco.png'
import amazon from '../resources/amazon.ico'
import umass from '../resources/umass.png'
import redlance from '../resources/redlance.PNG'

export default class Timeline extends Component{

  card = (id, icon, title, subtitle, body) => {
    const iconImage = (
      <img src={icon} alt="INF" style={cardIconStyle}/>
    )

    return(
      <CollapsibleCard icon={iconImage} title={title} subtitle={subtitle} eventKey={id} collapsible>
        {body}
      </CollapsibleCard>
    )
  }

  render(){
    return(
      <div>
        <h1 style={pageTitleStyle}>
          Timeline
        </h1>
        <PanelGroup accordion>
          {this.card(0, cisco, "Cisco", "Aug 2018 - Now", "asd\nasdf\nasdf\nasdf\nasdf\nasdf")}
          {this.card(1, umass, "Project RAISE", "Sep 2016 - Jul 2018", "asd\nasdf\nasdf\nasdf\nasdf\nasdf")}
          {this.card(2, amazon, "Amazon", "May 2017 - Aug 2017", "asd\nasdf\nasdf\nasdf\nasdf\nasdf")}
          {this.card(3, redlance, "RedLance Comics", "May 2016 - Nov 2016", "asd\nasdf\nasdf\nasdf\nasdf\nasdf")}
        </PanelGroup>
      </div>
    )
  }
}
