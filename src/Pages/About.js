import React from 'react'
import {pageTitleStyle} from './../components/Base.js'
import jsonData from './../resources/blurbs/About.json'


export let About = () => {

  const styles = {
    mainText:{
      fontFamily: "'Montserrat', sans-serif",
      fontSize: 40,
      fontWeight:800,
      margin:"0px 20px 20px 30px",
      color:"#000",
      borderBottom:"solid black 1px",
      paddingBottom:20,
      textShadow:"0px 0px 20px #fff",
    },
    secondaryText:{
      color:"#000",
      fontFamily: "'Roboto', sans-serif, Arial, sans-serif",
      fontWeight:400,
      fontSize:20,
      padding:"10px 50px",
      textShadow:"0px 0px 20px #fff",
    }
  }

  return (
    <div>
      <h1 style={pageTitleStyle}>
        about
      </h1>
      <h2 style={styles.mainText}> {jsonData["main"]} </h2>
      {jsonData["secondary"].map(line =>
        <p style={styles.secondaryText}> {line} </p>
      )}
    </div>
  )
}
