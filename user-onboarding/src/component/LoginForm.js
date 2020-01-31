import React from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function LoginForm() {
    return (
        <div>
            <h1>Onboarding New User!</h1>
            <Form >
                <label>
                    Name:
                    <Field text="text" name="name" />
                </label>
                <label>
                    Email:
                    <Field text="text" name="email" />
                </label>
                <label>
                    Password:
                    <Field text="text" name="password" />
                </label>
                <button>Submit</button>
            </Form>
        </div>
    );

}

const FormikLoginForm = withFormik({
    mapPropsToValues({ name, email, password, }) {
        return {


        }

    }










})(LoginForm);

export default FormikLoginForm;