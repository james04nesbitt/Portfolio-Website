import React from "react";

export default function Intro(){
    return(
        <div className="Intro">
            <div className="i">
        <h1> Hello,  I am  <h1 className="name">James Nesbitt</h1></h1>
        <p className="Bio">Welcome to my Coding Portfolio. I am a freshman studying <br/>Computer Science at the University of Michigan</p>
        
        <div className="Buttons">
            <div className="b">
                <button className="project"><a>RESUME</a></button>
            </div>

            <div className="b">
                <form  action="https://github.com/james04nesbitt" >
                <input className="github" type="submit" value="GITHUB"/>
                </form>
            </div>
            </div>
        </div>
        
        </div>
    )
}