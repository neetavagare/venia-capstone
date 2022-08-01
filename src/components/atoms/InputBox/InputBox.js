import Icon from "../Icon/Icon";

export default function InputBox(props) {
    let className = props.classValue ? props.classValue : ""
    let id = props.id
    let labelClass = props.labelClass ? props.labelClass + " label" : "label"
    let isIcon = props.isIcon ? props.isIcon : false;

    return (

        <div>
            <label className={labelClass} for={id}> {props.label} </label>
            <input type={props.type} className={className} name={props.type} placeholder={props.placeholder}></input>
            {
                isIcon && 
                <Icon name="help-circle"></Icon>
            }
            <span for={id}> {props.error} </span>

        </div>

    )
}