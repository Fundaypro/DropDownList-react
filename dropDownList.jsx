import { useState } from "react"
import "./animations.css"

const DropDownList = (props) => {
    const styleUl = {
        textDecoration : "none",
        padding : "0px",
        paddingInlineStart : "0px",
        textAlign : "right",
        minWidth : "100%",
        borderLeft :  "black 1px solid",
        maxWidth : "80%",
        textAlign : "center",
    }
    return <ul
        style={{
            listDecoration : "none" ,
            margin : 0,
            marginLeft : "2.2rem",
            paddingInlineStart : "0px",
            display : "flex",
            flexDirection : "column",
            transition: "0.7s",
            }}>
            {props.list.map((e , i)=>{
                return <ul
                className={ props.status ? "dropdown-item" : "out-item"}
                key={i} 
                style = {styleUl}
                >{e}</ul>
            })}
        </ul>

}

export default DropDownList