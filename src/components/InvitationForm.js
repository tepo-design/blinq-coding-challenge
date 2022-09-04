import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import { useFormik } from 'formik';
import axios from "axios";
import {useState} from "react";

export default function InvitationForm(props) {
    const [failureResponse, setFailureResponse] = useState("");
    const [loading, setLoading] = useState(false);

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
            requestInvitation(data)
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error mt-1">{formik.errors[name]}</small>;
    };

    const requestInvitation = (data) => {
        setLoading(true);
        axios.post("https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth",
            {
                name: data.name,
                email: data.email
            }
        ).then(res => {
            if (res.status === 200) {
                props.inviteSent();
            }
        }).catch(err => {
            setFailureResponse(err.message)
        }).finally(() => setLoading(false));
    };

    return (
        <div>
            <form className="flex flex-column gap-3" onSubmit={formik.handleSubmit}>
                <div className="flex flex-column justify-content-center">
                    <InputText placeholder="Full Name" id="name" name="name" value={formik.values.name} onChange={formik.handleChange}/>
                    {getFormErrorMessage('name')}
                </div>
                <div className="flex flex-column justify-content-center">
                    <InputText placeholder="Email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange}/>
                    {getFormErrorMessage('email')}
                </div>
                <div className="flex flex-column">
                    <InputText placeholder="Confirm Email" id="confirmEmail" name="confirmEmail" value={formik.values.confirmEmail} onChange={formik.handleChange}/>
                    {getFormErrorMessage('confirmEmail')}
                </div>
                <div className="flex justify-content-center">
                    <Button type="submit" loading={loading} loadingIcon="pi pi-spin pi-spinner mr-1" className="bg-blue-100 border-none w-3 justify-content-center">
                        <div className="text-xs">
                            Send
                        </div>
                    </Button>
                </div>
                {failureResponse &&
                    <small className="p-error text-center">{failureResponse}</small>
                }
            </form>
        </div>
    );

}