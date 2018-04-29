import React, { Component } from "react";
import Draggable from "react-draggable";
import '../styles/AdjustableBarGraph.css'


class AdjustableBar extends Component {

  constructor(props) {
    super(props);

    const handlePosition = {
      x: props.handleX,
      y:(1.0-props.percents[props.id])*props.parentHeight - props.handleSize.height/2
    }

    this.state = {
      barHeight: (props.percents[props.id]) * props.parentHeight,
      handlePosition: handlePosition,
      bounds: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    // for determining height of bar
    const i = nextProps.id
    const A = nextProps.active_idx
    
    var accumulated = 0
    if (A >= 0) accumulated = nextProps.percents.slice(0,A+1).reduce((x,y)=>x+y)
    if (i > A){
      const thisPercent = nextProps.percents[i]
      const handlePosition = {
        x:nextProps.handleX,
        y:((1.0 - thisPercent)*nextProps.parentHeight - nextProps.handleSize.height/2)
      }
      this.setState({
        barHeight: thisPercent * nextProps.parentHeight,
        handlePosition: handlePosition,
        bounds: accumulated * nextProps.parentHeight
      })
    }
  }


  onDrag = (e, data) => {
    const percent = (this.props.parentHeight - data.y - this.props.handleSize.height/2) / this.props.parentHeight
    this.props.updatePercents(this.props.id, percent)

    const barHeight = this.props.parentHeight - data.y - this.props.handleSize.height/2;
    const handlePosition = {x:this.props.handleX, y:data.y}
    this.setState({
      barHeight: barHeight,
      handlePosition: handlePosition
    })
  }

  render() {
    const dragHandlers = {onStart:this.onStart, onDrag:this.onDrag, onStop:this.onStop}
    var barStyle = "bar-view-active";
    // eslint-disable-next-line
    const active_idx_diff = this.props.id - this.props.active_idx
    if (active_idx_diff !== 0) barStyle = "bar-view-inactive";
    if (this.props.id === this.props.percents.length-1 && active_idx_diff === 1) barStyle = "bar-view-active"
    return (
      <div>
        <div className={ "bar-view" } id={ barStyle }
           style={{
             width:this.props.handleSize.width,
             height:this.state.barHeight,
             left:this.state.handlePosition.x,
             position:"absolute",
             bottom:0
           }}/>
        <Draggable
          axis="y"
          handle=".dragView"
          disabled={Math.abs(active_idx_diff) > 1 || this.props.id === this.props.percents.length-1}
          defaultPosition={null}
          bounds={{
            top: -this.props.handleSize.height/2 + this.state.bounds,
            bottom:this.props.parentHeight-this.props.handleSize.height/2
          }}
          position={{
            x:this.state.handlePosition.x,
            y:this.state.handlePosition.y
          }}
          grid={[4, 4]}
          {...dragHandlers}
          >
          <div className="dragView" style={{
            width:this.props.handleSize.width,
            height:this.props.handleSize.height,
            position:"absolute"
          }} />
        </Draggable>
      </div>
    )
  }
}

export default AdjustableBar
