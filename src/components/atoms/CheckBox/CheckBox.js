import React from 'react';
// Reusable Checkbox Component

export default function CheckBox(props) {
    let id = props.text.replaceAll(/\s/g,'')

    let handleClick = props.handleClick ? props.handleClick : null;
    let value = props.value ? props.value : "";
    let classValue = props.classValue ? props.classValue + " checkbox" : "checkbox";
    let labelClass = props.labelClass ? props.labelClass + " filteroption" : "filteroption";

    return (
        <React.Fragment>
            <input type={props.type} id={id} className={classValue} name={props.type}  value={value} onClick={handleClick}></input>
            <label for={id} className={labelClass}> {props.text} </label>
        </React.Fragment>

    )
}