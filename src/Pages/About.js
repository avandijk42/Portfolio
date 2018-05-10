import React from 'react'
import {pageTitleStyle} from './../components/Base.js'
import jsonData from './../resources/blurbs/About.json'


export let About = () => {

  const styles = {
    mainText:{
      fontFamily: "'Montserrat', sans-serif",
      fontSize: 40,
      margin:"0px 20px 20px 30px",
      color:"#FFF",
      textShadow:"0px 3px 15px #000"
    },
    secondaryText:{
      color:"#FFF",
      fontFamily: "'Montserrat', sans-serif, Arial, sans-serif",
      fontWeight:300,
      fontSize:20,
      textShadow:"0px 2px 5px #000",
      padding:"10px 50px",
    }
  }

  return (
    <div>
      <h1 style={pageTitleStyle}>
        About
      </h1>
      <h2 style={styles.mainText}> {jsonData["main"]} </h2>
      {jsonData["secondary"].map(line =>
        <p style={styles.secondaryText}> {line} </p>
      )}
    </div>
  )
}
