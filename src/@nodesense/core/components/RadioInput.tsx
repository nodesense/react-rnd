import React from 'react';

import {Field, ErrorMessage} from 'formik';
import {  Box  } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

interface RadioInputProps{
    name: string;
    label: string;
    type?: string; 
    options: any[];
    optionValue: string;
    optionText: string;
}

const RadioInput = ({name,label, options, optionValue, optionText}: RadioInputProps) => {
    return (
        <React.Fragment>
            <Box width="50%" p={2}>
            <Field name= {name} >
            {({
                          field, 
                          form 
                          
                      }: any) => (
                         <React.Fragment>
                             <FormLabel component="legend">{label}</FormLabel>
                         <RadioGroup name={name}>
                            {
                                options.map((option) =>(
                                    <FormControlLabel {...field} 
                                                      key={option[optionValue]} 
                                                      value={option[optionValue]}
                                                      control={<Radio />} 
                                                      label=  {option[optionText]} />
 
                            ))}
                               
                        </RadioGroup>
                              
                            <ErrorMessage name={name} component="span" />
                         </React.Fragment>
                    )}
            </Field>
            </Box>   
        </React.Fragment>
    )
}

export default RadioInput;