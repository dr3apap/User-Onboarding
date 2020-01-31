import React from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function LoginForm({ values, errors, touched }) {
    return (
        <div>
            <h1>Onboarding New User!</h1>
            <Form >
                <label htmlFor="name">
                    Name:
                    <Field
                        id="name"
                        text="text" name="name" />
                    {touched.name && errors.name && (<p>{errors.name}</p>)}
                </label>
                <label htmlFor="email">
                    Email:
                    <Field
                        id="email"
                        text="text" name="email" />
                </label>
                <label htmlFor="password">
                    Password:
                    <Field
                        id="password"
                        text="text" name="password" />
                </label>
                <label htmlFor="service">
                    <Field id="service" type="checkbox" name="service" check={values.service}>

                    </Field>
                    <span className="checkark"></span>

                </label>
                <button type="submit">Submit</button>
            </Form>
        </div>
    );

}

const FormikLoginForm = withFormik({
    mapPropsToValues({ name, email, password, service }) {
        return {
            name: name || "",
            email: "",
            password: "",
            service: false



        };

    },

    validationSchema: Yup.object().shape
        ({
            name: Yup.string().required()
        }),

    handleSubmit(values, formikBag) {
        console.log("submitting", values)
    }








})(LoginForm);
// Replaced LoginForm with Formik LoginForm
export default FormikLoginForm;