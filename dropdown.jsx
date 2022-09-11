import { useState } from "react";
import DropDownList from "./dropDownList";
import Title from "./title";

function DropDown (props) {
    const [status , setStatus] = useState(false)
    return <div>
        <Title status={status} setStatus={setStatus} title = {props.data.title} />
        <DropDownList status={status} list = {props.data.list} />
        </div>
}

export default DropDown;