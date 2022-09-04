import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import { useFormik } from 'formik';
import axios from "axios";
import {useState} from "react";

export default function InvitationForm(props) {
    const [failure, setFailure] = useState("");

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            confirmEmail: '',
        },
        validate: (data) => {
            let errors = {};

            if (!data.name) {
                errors.name = 'Name is required.';
            }
            if (data.name.length < 3) {
                errors.name = "Name must have at least 3 characters."
            }
            if (!data.email) {
                errors.email = 'Email is required.';
            }
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.email = 'Invalid email address. E.g. example@email.com';
            }
            if (!data.confirmEmail) {
                errors.confirmEmail = 'You must confirm your email.';
            }
            if (data.confirmEmail !== data.email) {
                errors.confirmEmail = 'Please ensure your emails match.';
            }
            return errors;
        },
        onSubmit: (data) => {
            submit(data)

            // formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    const submit = (data) => {
        axios.post("https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth",
            {
                name: data.name,
                email: data.email
            }
        ).then(res => {
            if (res.status === 200) {
                props.success();
            }
        }).catch(err => {
            setFailure(err.message)
        })
    };

    return (
        <div className="flex flex-column gap-4">
            <div className="flex gap-3">
                <div className="text-xl">
                    Request an invite
                </div>
                <Button onClick={props.close}>
                    <i className="pi pi-times" ></i>
                </Button>
            </div>
            <form className="flex flex-column gap-3" onSubmit={formik.handleSubmit}>

                <div className="flex flex-column">
                    <InputText placeholder="Full Name" id="name" name="name" value={formik.values.name} onChange={formik.handleChange}/>
                    {getFormErrorMessage('name')}
                </div>

                <div className="flex flex-column">
                    <InputText placeholder="Email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange}/>
                    {getFormErrorMessage('email')}
                </div>

                <div className="flex flex-column">
                    <InputText placeholder="Confirm Email" id="confirmEmail" name="confirmEmail" value={formik.values.confirmEmail} onChange={formik.handleChange}/>
                    {getFormErrorMessage('confirmEmail')}
                </div>

                <Button type="submit">
                    <div className="text-xs">
                        Send
                    </div>
                </Button>

                {failure &&
                    <small className="p-error">{failure}</small>
                }
            </form>
        </div>
    );

}