export default function RadioBox(props) {
    let id = props.id.replaceAll(/\s/g, '')

    let handleClick = props.handleClick ? props.handleClick : null;
    let value = props.value ? props.value : "";
    let classValue = props.classValue ? props.classValue + " default-radio" : "default-radio";
    let labelclassValue = props.labelclassValue ? props.labelclassValue + " default-radio" : "default-radio";
    let containerClass = props.containerClass ? props.containerClass : "";
    let partailLabel = props.partailLabel ? props.partailLabel : false;
    let partailclassValue = props.partailclassValue ? props.partailclassValue  : "";

    return (
        <div className={containerClass}>
            <input type={props.type} className={classValue} id={id} name={props.type} value={value} onClick={handleClick}></input>
            {
                partailLabel === false &&
                <label for={id} className={labelclassValue}> {props.text} </label>
            }
            {
                partailLabel &&
                <label for={id} className={labelclassValue}> {props.text} <span className={partailclassValue}> {props.partialText}</span> </label>
            }

        </div>
    )
}