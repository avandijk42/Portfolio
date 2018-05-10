import React, { Component } from 'react'
import {projectDescriptionStyle} from './Base.js'
import Blurbs from './../resources/blurbs/Projects.json'

const focusShadow = {
  true:"0px 0px 20px #000",
  false:"0px 0px 5px #0008"
}

export default class TwentyFourtyEight extends Component{
  constructor(props) {
    super(props)

    this.randomRemaining.bind(this)
    this.squish.bind(this)
    const empty = [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]
    ]
    var board = this.randomRemaining( this.randomRemaining(empty) )

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.clickHandler = this.clickHandler.bind(this);

    this.state = {
      board:board,
      focused:true
    }
  }

  handlePress(e){
    if (e.keyCode >= 37 && e.keyCode <= 40 && this.state.focused){
      e.preventDefault()
      const board = this.randomRemaining(this.squish(e.keyCode))
      if (board !== null){
        this.setState({
          board: board
        })
      }
    }
    return false
  }

  blockScroll(e){
    if (e.keyCode >= 37 && e.keyCode <= 40 && this.state.focused){
      e.preventDefault()
    }
  }

  squish(direction){
    var board = this.state.board
    if (direction === 37 || direction === 39){
      //LEFT RIGHT
      for(var i=0; i<4; i++){
        var buffer = []
        for(var j=0; j<4; j++){
          if (board[i][j] !== 0){
            buffer.push(board[i][j])
            board[i][j] = 0
          }
        }

        var results = []
        for (var b=0; b<buffer.length; b++){
          if (buffer[b] === buffer[b+1]){
        		results.push(buffer[b] * 2)
        		b++
          } else {
        		results.push(buffer[b])
          }
        }

        const diff = direction === 37 ? 0 : 4 - results.length
        for (var jb=0; jb<results.length; jb++){
          board[i][jb + diff] = results[jb]
        }
      }
      return board
    } else if (direction === 38 || direction === 40){
      //UP DOWN
      for(j=0; j<4; j++){
        buffer = []
        for(i=0; i<4; i++){
          if (board[i][j] !== 0){
            buffer.push(board[i][j])
            board[i][j] = 0
          }
        }

        results = []
        for (b=0; b<buffer.length; b++){
          if (buffer[b] === buffer[b+1]){
        		results.push(buffer[b] * 2)
        		b++
          } else {
        		results.push(buffer[b])
          }
        }

        var diff = direction === 38 ? 0 : 4 - results.length
        for (var ji=0; ji<results.length; ji++){
          board[ji + diff][j] = results[ji]
        }
      }
      return board
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.blockScroll.bind(this))
    window.addEventListener('keyup', this.handlePress.bind(this))
    window.addEventListener('click', this.clickHandler.bind(this))
  }

  clickHandler(e){
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.setState({focused:false})
    } else if (this.wrapperRef) {
      this.setState({focused:true})
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  randomRemaining(board){
    var indexes = []
    for (var i=0; i<16; i++){
      if (board[Math.floor(i/4)][i%4] === 0) indexes.push(i)
    }
    if (indexes.length === 0){
      return null
    } else {
      const nextTile = Math.random() < 0.5 ? 2 : 4
      const nextIndex = indexes[Math.floor(Math.random() * indexes.length)]
      board[Math.floor(nextIndex/4)][nextIndex%4] = nextTile
      return board
    }
  }

  reset(e){
    const empty = [
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0],
      [0,0,0,0]
    ]
    var board1 = this.randomRemaining( this.randomRemaining(empty) )
    this.setState({
      board:board1
    })
    return false
  }

  controlBar = () => {
    return(
    <div style={styles.control.bar}>
      <button style={styles.control.button} onClick={this.reset.bind(this)}>
        <div style={styles.control.label}> RESET </div>
      </button>
    </div>
  )}

  colorForNum = (num) => {
    const exp = num === 0 ? 0 : Math.log2(num)
    return tileColors[exp]
  }

  render () {
    const board = this.state.board
    const shadow = {boxShadow:focusShadow[this.state.focused]}
    console.log(Blurbs["2048"]["description"])
    return (
      <div>
        <p style={projectDescriptionStyle}> {Blurbs["2048"]["description"]} </p>
        <div ref={this.setWrapperRef} style={{width:styles.board.width, marginLeft:styles.board.marginLeft}}>
          <div style={{...shadow,...styles.board}}>
              {[...Array(4).keys()].map(i =>
                [...Array(4).keys()].map(j =>
                  <div
                    style={{
                      ...styles.cell, ...styles.cellFont,
                      left:j*styles.cell.width + (j+1)*10 + 12,
                      top:i*styles.cell.height + (i+1)*10 + 12,
                      backgroundColor:this.colorForNum(board[i][j])
                    }}
                    key={i*4 + j}>
                    {""+(board[i][j] !== 0 ? board[i][j] : "")}
                  </div>
                )
              )}
          </div>
          {this.controlBar()}
        </div>
      </div>
    )
  }
}

const styles={
  board:{
    width:400,
    height:400,
    backgroundColor:"#444",
    marginLeft:"calc(50% - 200px)",
    borderRadius:10,
    border:"1px solid #000c",
    position:"relative",
    // display:"table",
    // borderSpacing:10,
    transition:'box-shadow 0.25s'
  },
  row:{
    // display:"table-row",
    width:"100%",
    height:80
  },
  cell:{
    width:80,
    height:80,
    backgroundColor:"#656565",
    borderRadius:5,
    position:"absolute",
    boxShadow:"0px 2px 2px #0008"
  },
  cellFont:{
    fontSize:40,
    fontWeight:1000,
    fontFamily:"'Roboto', sans-serif",
    textAlign:"center",
    verticalAlign:"middle",
    color:"#1c1c1c",
    textShadow:"-1px 1px 1px #0004"
  },
  control:{
    bar:{
      width:400,
      height:50,
      margin:"30px 0px 30px calc(50% - 200px)"
    },
    button:{
      width:130,
      height:50,
      borderRadius:5,
      backgroundColor:"#b82601",
      boxShadow: "-1px 2px 7px #000c"
    },
    label:{
      fontSize: 20,
      fontFamily: "'Roboto', sans-serif, Arial, sans-serif",
      fontWeight: "500",
      color: "#FFF",
      textShadow: "-1px 1px 2px #000b",
    }
  }
}

const tileColors = [
  styles.cell.backgroundColor,
  "#6b7981",
  "#59768c",
  "#3c69a0",
  "#33827e",
  "#118e48",
  "#4fab20",
  "#b1b92e",
  "#bd5f27",
  "#c1481a",
  "#c30303"
]
