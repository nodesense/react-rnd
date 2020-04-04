import React from 'react';

import {Select, Box, MenuItem} from '@material-ui/core';
import {Field, ErrorMessage} from 'formik';
 
interface SelectInputProps{
    name: string;
    label: string;
    placeHolder?: string;
    optionValue: string;  
    optionText: string;
    options: any[];
}

const SelectInput = ({name, label, placeHolder, options, optionValue, optionText} : SelectInputProps) => {
    return (

        <Box  >
            <Field name= {name} >
                    {({
                          field, // { name, value, onChange, onBlur }
                          form // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      }: any) => (
                         <React.Fragment>
                            <Select        name= {name}
                                           label= {label}
                                           {...field}
                                           
                            >
                                
                            {
                                options.map((option) =>(
                                                    <MenuItem key={option[optionValue]} 
                                                                value={option[optionValue]} >
                                                                    {option[optionText]}
                                                    </MenuItem>
                            ))}
                            </Select>
                            
                            <ErrorMessage name={name} component="span" />
                         </React.Fragment>
                    )}

                    
            </Field>
            
            </Box>
    )
}

export default SelectInput;