import React, { Component } from 'react';
import headshot from './../resources/headshot-outline.png';
import githubIcon from './../resources/github.png'
import linkedInIcon from './../resources/linkedin.png'

import '../styles/Sidebar.css'

const navRowData = {
  "About":"glyphicon-info-sign",
  "Education":"glyphicon-education",
  "Timeline":"glyphicon-time",
  "Projects":"glyphicon-list-alt"
}

class Sidebar extends Component {

  navRow = (desc, icon) => (
    <li role="presentation" className="navRow" key={desc}>
      <a href={"#/"+desc.toLowerCase()}>
        <div className={"navGlyph glyphicon "+ icon} aria-hidden="true"></div>
        <div id="navText">
          {desc}
        </div>
      </a>
    </li>
  )

  render(){
    return(
      <div id="sidebar">
        <div id="headshotContainer">
          <a href="/">
            <img id="headshot" src={headshot} alt={"logo"}/>
          </a>
          <div id="nameText"> Alan Vandijk </div>
          <div id="descriptionText"> Junior Software Developer </div>
        </div>
        <ul id="navContainer" className="nav nav-pills nav-stacked">
          {Object.keys(navRowData).map(desc => (
            this.navRow(desc, navRowData[desc])
          ))}
        </ul>
        <div id="linkIconContainer">
          <a href="https://github.com/avandijk42" target="_blank" rel="noopener noreferrer">
            <img className="linkIcons" src={githubIcon} alt={"github"} />
          </a>
          <a href="https://www.linkedin.com/in/alan-van-dijk-709863a9/" target="_blank" rel="noopener noreferrer">
            <img className="linkIcons" src={linkedInIcon} alt={"linkedin"}/>
          </a>
        </div>
      </div>
    )
  }
}

export default Sidebar



/*



*/
