import React, { Component } from 'react'
import {projectDescriptionStyle} from './Base.js'
import Blurbs from './../resources/blurbs.json'

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
      focused:false
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
    // const leftUp = direction === 37 || direction === 38
    // const upDown = direction === 38 || direction === 40
    //
    // for (var i=0; i<4; i++){
    //   var buffer = []
    //   const dir = leftUp ? 1 : -1
    //   const offset = leftUp ? 0 : 3
    //   for (var j=0; j<4; j++){
    //     const cur = dir*j + offset
    //     if (upDown){
    //       if (board[cur][i] !== 0){
    //         buffer.push(board[cur][i])
    //         board[cur][i] = 0
    //       }
    //     } else {
    //       if (board[i][cur] !== 0){
    //         buffer.push(board[i][cur])
    //         board[i][cur] = 0
    //       }
    //     }
    //   }
    //   var results = []
    //   for (var b=0; b<buffer.length; b++){
    //     const neighbor = buffer[b] === buffer[b+1]
    //     const modifier = neighbor ? 2 : 1
    //     results.push(buffer[b]*modifier)
    //     b += (neighbor ? 1 : 0)
    //   }
    //
    //   const diff = leftUp ? 0 : 4 - results.length
    //   const offset2 = leftUp ? 0 : results.length
    //   for (var jb=0; jb<results.length; jb++){
    //     if (upDown) {
    //       board[jb + diff][i] = results[dir*jb + offset2]
    //     } else {
    //       board[i][jb + diff] = results[jb]
    //     }
    //   }
    //
    // }
    // return board
    //
    //
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

  render () {
    const board = this.state.board
    const shadow = {boxShadow:focusShadow[this.state.focused]}

    return (
      <div>
        <p style={projectDescriptionStyle}> {Blurbs["2048"]["description"]} </p>
        <div ref={this.setWrapperRef} style={{width:styles.board.width}}>
          <div style={Object.assign(shadow,styles.board)}>
              {[...Array(4).keys()].map(i =>
                <div style={styles.row} key={i}>
                  {[...Array(4).keys()].map(j =>
                    <div style={styles.cell} key={i*4 + j}>
                      {""+(board[i][j] !== 0 ? board[i][j] : "")}
                    </div>
                  )}
                </div>
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
    width:600,
    height:600,
    backgroundColor:"#444",
    marginLeft:30,
    borderRadius:10,
    border:"1px solid #000c",
    display:"table",
    borderSpacing:10,
    transition:'box-shadow 0.25s'
  },
  row:{
    display:"table-row",
    width:"100%",
    height:130
  },
  cell:{
    width:130,
    backgroundColor:"#0004",
    borderRadius:5,
    display:"table-cell",
    fontSize:40,
    textAlign:"center",
    verticalAlign:"middle",
    color:"#FFF",
    transition:'1.0'
  },
  control:{
    bar:{
      width:600,
      height:50,
      margin:30
    },
    button:{
      width:130,
      height:50,
      backgroundColor:"#b82601",
      boxShadow: "-3px 3px 3px #0005"
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
