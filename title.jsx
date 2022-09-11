import { useState } from "react";

function Title (props) {

let degCase1 = "rotate(0deg)"
let degCase2 = "rotate(90deg)"
const style = {
    borderBottom : "1px solid black",
    display : "inline-block",
    padding : "0.1em 0.25em",
    fontWeight: 700,
    
    transformOrigin: "0px 100%",
    transition: "0.7s",
    transform: props.status ? degCase2 : degCase1,
}
 const callback = ()=>{
    props.setStatus(!props.status)
    }
    return <div style={
        {
        position : "relative",
        fontSize : "1em"
        }
    }><div 
    style = {style}
    onClick = {callback }
    >{props.title}</div>
    </div>
}

export default Title;