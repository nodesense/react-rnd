import React from 'react';

import {TextInput} from '@nodesense/core';
import {SelectInput} from '@nodesense/core';

import {RadioInput} from '@nodesense/core';
import {CheckboxInput, TextAreaInput, NumberInput} from '@nodesense/core';

import {Formik, Form, Field} from 'formik';

import {Button} from '@material-ui/core';
import * as _ from 'lodash';

import * as Yup from 'yup';

const ManufacturerSchema = Yup.object().shape({
    id: Yup.string(),
    name: Yup.string()
                .min(3, 'Must be 5 characters or more')
                // .test('is-42', "this isn't the number i want", value =>
                //         Promise.resolve(false),
                // )
                .required('Required'),
    usergroup_id: Yup.number().required(),
    description: Yup.string().required(),
    userType: Yup.string().required(),
    enabled: Yup.boolean().required(),
    employeesCount: Yup.number().required(),
});

const ManufacturerFormSchema = Yup.object().shape({
    manufacturer: ManufacturerSchema
});

interface ManufacturerProps {
}

class ManufacturerModel {
    id: string = '';
    name: string = 'hello';
    description: string = 'welcome'
    usergroup_id: number = 3;
    userType: string = "1";
    enabled: boolean = true;
    employeesCount: number = 10;
}

interface ManufacturerState {
    initialValues: any;
}

class Manufacturer extends React.Component<ManufacturerProps, ManufacturerState> {
    constructor(props: ManufacturerProps) {
        super(props)

        this.state = {
            initialValues: { 
                        manufacturer: new ManufacturerModel()
                    }
        }
    }

    onSubmit = (values: any, actions: any) => {
         console.log("values", values.manufacturer)
         console.log("actions", actions);
    }

    render() {
        return (
            <div>
                <h2>Manufacturer</h2>
                <Formik
                        initialValues={  this.state.initialValues as Readonly<{}> }
                        validationSchema= {ManufacturerFormSchema}
                        onSubmit={this.onSubmit}
                        >
                             { (props: any) => (
                                <Form>

                                    <TextInput name="manufacturer.name"
                                            label="Name" />
                                
                                
                                    <TextAreaInput name="manufacturer.description"
                                            label="Description"
                                            placeHolder="Description"
                                            />

                                    <SelectInput name="manufacturer.usergroup_id"
                                                 label="User Group"
                                                 optionValue="_id"
                                                 optionText="text"
                                                 options = { [ {_id: 1, text: 'Admin'}, 
                                                                {_id: 2, text: 'User'}, 
                                                                {_id: 3, text: 'Staff'},  ] }
                                    />

                                    <RadioInput name="manufacturer.userType" 
                                                label="User Type"
                                                 
                                                options = { [ {id: "1", name: 'Admin'}, 
                                                                {id: "2", name: 'User'}, 
                                                                {id: "3", name: 'Staff'} ]}

                                                optionValue="id"
                                                optionText="name"
                                                
                                                />


                                    <CheckboxInput name="manufacturer.enabled"
                                                   label="Is Enabled"
                                                    />

                                    <NumberInput name="manufacturer.employeesCount"
                                                label="Employees Count" />

                                    <Button type="submit" 
                                            variant="contained" 
                                            color="primary"
                                            
                                            disabled= {! _.isEmpty(props.errors)}
                                            >
                                            Save
                                    </Button>

                                    <pre> {JSON.stringify(props.errors)} </pre>

                                </Form>
                             ) }
                </Formik>

            </div>
        )
    }
}

export default Manufacturer;