import React, { Component } from 'react'

const styles={
  board:{
    width:600,
    height:600,
    backgroundColor:"#444",
    marginLeft:30,
    borderRadius:10,
    boxShadow:"0px 0px 15px #0008",
    border:"1px solid #000c",
    display:"table",
    borderSpacing:10,
  },
  row:{
    width:"100%",
    height:130,
    display:"table-row",
  },
  cell:{
    width:130,
    height:130,
    borderSpacing:"9px",
    backgroundColor:"#0004",
    borderRadius:5,
    display:"table-cell",
    fontSize:40,
    textAlign:"center",
    verticalAlign:"middle",
    top:45,
    color:"#FFF",
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

    this.state = {
      board:board
    }
  }

  handlePress(e){
    if (e.keyCode >= 37 && e.keyCode <= 40){
      e.preventDefault()

      e.stopImmediatePropagation()
      const board = this.randomRemaining(this.squish(e.keyCode))
      if (board !== null){
        this.setState({
          board: board
        })
      }
    }
    return false
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
    window.addEventListener('keyup', this.handlePress.bind(this))
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
    window.removeEventListener('keyup', this.handlePress.bind(this))
    window.addEventListener('keyup', this.handlePress.bind(this))
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
      <button style={styles.control.button} onClick={(e) => this.reset(e)}>
        <div style={styles.control.label}> RESET </div>
      </button>
    </div>
  )}

  render () {
    const board = this.state.board

    return (
      <div>
        <div style={styles.board}>
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
        <div style={styles.control.bar}>
          <button style={styles.control.button} onClick={this.reset.bind(this)}>
            <div style={styles.control.label}> RESET </div>
          </button>
        </div>
      </div>
    )
  }
}
