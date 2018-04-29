import React, { Component } from 'react';
import AdjustableBarGraph from './AdjustableBarGraph';
import { widgetType } from './Base'
import { Col } from 'react-bootstrap';
import './../styles/WidgetsPage.css'

var blurbs = require('./../resources/blurbs.json')

class WidgetPage extends Component{

  getWidget(stateKey) {
    if (stateKey === widgetType.barGraph){
      const text = blurbs.AdjustableBarGraph
      return (
        <div>
          <h2>
            Widgets
          </h2>
          <h3 id="widget-title">
            { text.title }
          </h3>
          <AdjustableBarGraph barCount={4}>
            <p id="widget-description">
              { text.description }
            </p>
          </AdjustableBarGraph>
          <div style={{height:1000}} />
        </div>
      )
    }
  }

  render(){
    return(
      <div>
        {this.getWidget(this.props.widgetType)}
      </div>
    )
  }
}

export default WidgetPage
