import React, { Component} from 'react';
import AdjustableBar from './AdjustableBar';

import '../styles/AdjustableBarGraph.css'

var [adjustBarViewWidth, adjustBarViewHeight] = [450.0, 400.0];

const percents = (N) => [...Array(N).keys()].map(i =>
  1.0 / N
)

class AdjustableBarGraph extends Component {

  constructor(props) {
    super(props);

    this.state = {
      percents: percents(props.barCount),
      active_idx: -1,
      barCount: props.barCount,
    }
    this.baseState = this.state;
  }

  updatePercents = (index, percent) => {
    var percents_prev = this.state.percents
    percents_prev[index] = percent

    var remainder = 1.0 - this.state.percents.slice(0,index+1).reduce((x,y)=>x+y)
    for (var i=index+1; i<this.state.barCount; i++){
        percents_prev[i] = remainder / (this.state.barCount - index - 1)
    }

    this.setState({
      percents: percents_prev,
      active_idx: index,
    })
  }

  incrementBarCount = (e) => {
    //resets graph to base state and changes barCount
    if (this.state.barCount < 10){
      this.setState ({
          percents: percents(this.state.barCount + 1),
          active_idx: -1,
          barCount: this.state.barCount + 1,
      })
    }
  }

  decrementBarCount = (e) => {
    //resets graph to base state and changes barCount
    if (this.state.barCount > 2){
      this.setState ({
          percents: percents(this.state.barCount - 1),
          active_idx: -1,
          barCount: this.state.barCount - 1,
      })
    }
  }

  reset = (e) => {
    this.setState ({
        percents: percents(this.state.barCount),
        active_idx: -1,
    })
  }

  controlBar = () => {
    return(
    <div className="controlbar">
      <button className="control" onClick={this.decrementBarCount}>
        <div className="control-label"> -1 BAR </div>
      </button>
      <button className="control" onClick={this.reset}>
        <div className="control-label"> RESET </div>
      </button>
      <button className="control" onClick={this.incrementBarCount}>
        <div className="control-label"> +1 BAR </div>
      </button>
    </div>
  )}

  percentsView = (percents, barWidth, barSpacing) => {
    const fontSize = Math.min(30, barWidth)

    return(
      <div className="percentsView" style={{width: adjustBarViewWidth}}>
        {percents.map((p,i) =>
          <div style={{width:barWidth, marginLeft:barSpacing, textAlign:"center"}}>
            <div style={{fontSize:fontSize, left:50, color:"black"}}> {Math.round(p * 100)} </div>
          </div>
        )}
      </div>
    )
  }

  render() {
    const handleSpacing = adjustBarViewWidth / (15.0 + this.state.barCount);
    const handleWidth = (adjustBarViewWidth - ((this.state.barCount + 1) * handleSpacing)) / this.state.barCount
    const handleXPositions = [...Array(this.state.barCount).keys()].map(i => (i+1) * handleSpacing + i * handleWidth)
    return (
      <div>
        <div className="adjusting-bar"
          style={{
            width:adjustBarViewWidth,
            height:adjustBarViewHeight,
            position:"relative"
          }}>
          {[...Array(this.state.barCount).keys()].map(i =>
            <AdjustableBar
              key = {i}
              id = {i}
              handleSize = {{width:handleWidth, height:handleWidth * 0.6}}
              parentHeight = {adjustBarViewHeight}

              handleX = {handleXPositions[i]}
              updatePercents = {this.updatePercents}
              percents = {this.state.percents}
              active_idx = {this.state.active_idx}
            />
          )}
        </div>
        {this.percentsView(this.state.percents, handleWidth, handleSpacing)}
        {this.controlBar()}
        {this.props.children}
      </div>
    );
  }
}

export default AdjustableBarGraph;
