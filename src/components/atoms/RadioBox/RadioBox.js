export default function RadioBox(props) {
    let id = props.id.replaceAll(/\s/g, '')

    let handleClick = props.handleClick ? props.handleClick : null;
    let value = props.value ? props.value : "";
    let classValue = props.classValue ? props.classValue : "";
    let labelclassValue = props.labelclassValue ? props.labelclassValue : "";

    return (
        <div className="form-info">
            <input type={props.type} className={classValue} id={id} name={props.type} value={value} onClick={handleClick}></input>
            <label for={id} className={labelclassValue}> {props.text} </label>
        </div>
    )
}