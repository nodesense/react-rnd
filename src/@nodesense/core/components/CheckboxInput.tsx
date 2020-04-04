import React from 'react';
import {Field, ErrorMessage} from 'formik';
import {Checkbox, Box } from '@material-ui/core';

interface CheckboxInputProps{
    name: string;
    label: string;
}

const CheckboxInput = (props: CheckboxInputProps) => {
    return (
        <React.Fragment>
            <Box>
            <Field name= {props.name} >
            {({
                          field, // { name, value, onChange, onBlur }
                          form // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          
                      }: any) => (
                         <React.Fragment>
                            <Checkbox  name= {props.name} {...field}
                                        label= {props.label}   />
                            <label>{props.label}</label>
                            <ErrorMessage name={props.name} component="span" />
                         </React.Fragment>
                    )}
            </Field>
            </Box>
        </React.Fragment>
    )
}

export default CheckboxInput;