import React from 'react';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

const CustomInput = (props) => {
    return (
        <div>
            <CustomInput
                className={props.className}
                type={props.type}
                name={props.name}
                id={props.id}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            > 
                <option value="">Select an Airport</option>
                <option value="LAX">LAX</option>
            </CustomInput>
        </div>
    );
};

export default CustomInput;