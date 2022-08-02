import { CheckBox } from '../../atoms';
import React from 'react';

export default function FiltersComponent(props) {

    return (
        <div>
            {
                props.categories && props.categories.map((item, index) => (

                    <React.Fragment key={"ch" + index}>
                        <div>
                            <CheckBox type="checkbox" text={item} value={item} handleClick={props.handleClick} />
                        </div>

                    </React.Fragment>
                )
                )}

            <div className="filterborder"></div>
        </div>
    )
}