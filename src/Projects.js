import React from "react";
import rc from './img/rc.png';
import sw from './img/sw.png'
import "./projects.css"

export default function Projects(){
    return(
        
        <div className="Projects">
            
            <h2>Projects:</h2>
            <div className="gallery">
                <div className="pr">
                    <a href="https://github.com/james04nesbitt/Running-Calender"><img src={rc} alt="runningcalender" /></a>
                    <h3 className="title">Running Planner</h3><br/><br/>
                    <p>The purpose of this project is to provide the user an apt schedule to maximize their miles while meeting thier goal miles<br/><br/> <br/><br/>Built Using: HTML, CSS, JS</p>

                </div>
                <div className="pr">
                    <a href="https://github.com/james04nesbitt/Stock-Ticker"><img src = {sw} alt="Stock-ticker" /></a>
                    <h3 className="title">Stock Watcher</h3><br/><br/>
                    <p>The purpese of this project is to provide the user with real time data of a stock in a GUI format, working on providng other comapny data<br/> <br/><br/>Built Using:PyQt6, Python, Yahoo Finance API</p>
                </div>
                <div className = "pr">
                    <a href="github.com">
                        <img alt="portfolio"/>
                        <h3 className="title">Old Portfolio Website</h3>
                        <p>My old portfolio wesbite I made to learn the basics of web devolopment<br/><br/><br/><br/> Built Using: HTML, CSS</p>
                    </a>
                </div>
            </div>

             
        </div>
    
    )
}