import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import './../styles/Cards.css'

let styles = {
  card: {
    backgroundColor: "#f2f2f2",
    width: "calc(100%-30px)",
    marginLeft:50,
    marginRight:50,
    marginBottom:50,
    // border: "2px solid #b82601",
    boxShadow: "0px 3px 7px #0006"
  },
  cardTitle: {
    fontFamily:"'Open Sans', sans-serif, Arial, sans-serif",
    paddingLeft:10,
    fontWeight:600,
    fontSize:22
  },
  cardSubtitle: {
    fontFamily:"'Open Sans', sans-serif, Arial, sans-serif",
    paddingLeft:10,
    fontWeight:400,
    fontSize:16,
    float:"right",
    marginTop:-30,
    marginRight:30
  }
}

export default class CollapsibleCard extends Component{

  render(){
    return(
      <Panel eventKey={this.props.eventKey} style={styles.card} defaultExpanded>
        <Panel.Heading>
          <Panel.Title toggle={this.props.collapsible} style={{display:"inline"}}>
            {this.props.icon}
            <span className="cardTitle" style={styles.cardTitle}>
              {this.props.title}
            </span>
          </Panel.Title>
          <span className="cardSubtitle" style={styles.cardSubtitle}>
            {this.props.subtitle}
          </span>
        </Panel.Heading>
        <Panel.Body collapsible={this.props.collapsible}>
          {this.props.children}
        </Panel.Body>
      </Panel>
    )
  }
}
