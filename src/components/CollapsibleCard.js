import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import './../styles/Cards.css'

let styles = {
  card: {
    backgroundColor: "#CCCC",
    width: "calc(100%-30px)",
    marginLeft:30,
    marginRight:30,
    marginBottom:30,
    // border: "2px solid #b82601",
    boxShadow: "0px 0px 10px #0008"
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
