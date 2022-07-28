import React from 'react';
// Reusable Checkbox Component

export default function CheckBox(props) {
    let id = props.text.replaceAll(/\s/g,'')

    let handleClick = props.handleClick ? props.handleClick : null;
    let value = props.value ? props.value  : "";

    return (
        <React.Fragment>
            <input type={props.type} id={id} className="checkbox" name={props.type}  value={value} onClick={handleClick}></input>
            <label for={id} className="filteroption"> {props.text} </label>
        </React.Fragment>

    )
}