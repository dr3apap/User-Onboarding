import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";






function LoginForm({ values, errors, touched, status, }) {
    const [users, setUsers] = useState([])
    useEffect(() => {
        console.log("status has changed", status);
        status && setUsers(users => [...users, status])


    }, [status]);

    return (
        <div>
            <h1>Onboarding New User!</h1>
            <Form >
                <label htmlFor="name">
                    Name:
                    <Field
                        id="name"
                        text="text" name="name" placeholder="Enter FullName" />
                    {touched.name && errors.name && (<p>{errors.name}</p>)}

                </label>
                <label htmlFor="email">
                    Email:
                    <Field
                        id="email"
                        text="text" name="email" placeholder="Enter Email" />
                    {touched.email && errors.email && (<p>{errors.email}</p>)}

                </label>
                <label htmlFor="password">
                    Password:
                    <Field
                        id="password"
                        type="password" name="password" placeholder="Type in Password" />
                    {touched.password && errors.password && (<p>{errors.password}</p>)}

                </label>
                <label htmlFor="service">
                    <Field id="service" type="checkbox" name="service" check={values.service} />


                    <span className="checkmark"></span>

                </label>
                <button type="submit">Submit</button>
            </Form>
            {users.map(user => (
                <ul key={user.password} >
                    <li>
                        Name:{user.name}</li>
                    <li>Email:{user.Email}</li>
                    <li>Password:{user.password}</li>

                </ul>))}
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
            name: Yup.string().required("Must enter Fullname"),
            // password: Yup.string().min(`password must be ${12} letter long`),
            email: Yup.string().required("Email can't be empty")



        }),

    handleSubmit(values, { setStatus, resetForm }, formikBag) {
        console.log("submitting", values)
        axios.post("https://reqres.in/api/users/", values)
            .then(res => {

                console.log("Success", res);
                setStatus(res.data)
                resetForm()

            })
            .catch(err => {
                console.log("The post requested: ", err.response)
            });

    }


})(LoginForm);
// Replaced LoginForm with Formik LoginForm
export default FormikLoginForm;