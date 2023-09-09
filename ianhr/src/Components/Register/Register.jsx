import React, { useRef, useEffect } from "react";
import { useFormik } from "formik";
import { candidate } from '../../Schemas'
import './register.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com'


const initialValues = {
    position: "",
    name: "",
    nationality: "",
    ppNumber: "",
    ppExpireDate: "",
    dob: "",
    visaStatus: "",
    experience: "",
    expectedSalary: "",
    contact: ""
}


const Register = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])


    const inputRef = useRef();

    useEffect(() => {
        inputRef.current?.focus();
    }, [])


    const {
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        resetForm
    } = useFormik({
        initialValues,
        validationSchema: candidate,
        onSubmit: async (values) => {
            emailjs.send('service_ndf34wc', 'template_a7yr6bl',
                values, '9DqEFeb5aV7YlGreu')
                .then(() => {
                    console.log('email sent');
                });
            resetForm();
            toast.success("Form Submitted")
        }
    })

    return (
        <div className="formContainer">
            <ToastContainer position="top-center" />
            <form className="homeCard grid" id="myForm">
                <span className="title">APPLICANT DETAILS</span>
                <div className="inputsDiv">
                    <div className="locationDiv">
                        <label htmlFor="location">Position</label>
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder='Position Applied For'
                            onChange={handleChange}
                            value={values.position}
                            name={"position"}
                            autoComplete="off"
                        />
                        <div className={`expandable ${touched.position && errors.position ? 'show' : ''}`}>
                            {errors.position}
                        </div>
                    </div>


                    <div className="distDiv">
                        <label htmlFor="distance">Full Name</label>
                        <input
                            type="text"
                            placeholder='Enter Full Name'
                            onChange={handleChange}
                            value={values.name}
                            name={"name"}
                            autoComplete="off"
                        />
                        <div className={`expandable ${touched.name && errors.name ? 'show' : ''}`}>
                            {errors.name}
                        </div>
                    </div>
                </div>


                <div className="inputsDiv">
                    <div className="priceDiv">
                        <label htmlFor="price">Nationality</label>
                        <input
                            type="text"
                            placeholder='Enter Nationality'
                            onChange={handleChange}
                            value={values.nationality}
                            name={"nationality"}
                            autoComplete="off"
                        />
                        <div className={`expandable ${touched.nationality && errors.nationality ? 'show' : ''}`}>
                            {errors.nationality}
                        </div>
                    </div>

                    <div className="priceDiv">
                        <label htmlFor="price">Passport Number</label>
                        <input
                            type="text"
                            placeholder='Please Enter Passport Number'
                            onChange={handleChange}
                            value={values.ppNumber}
                            name={"ppNumber"}
                            autoComplete="off"
                        />
                        <div className={`expandable ${touched.ppNumber && errors.ppNumber ? 'show' : ''}`}>
                            {errors.ppNumber}
                        </div>
                    </div>
                </div>


                <div className="inputsDiv">
                    <div className="priceDiv">
                        <label htmlFor="price">Passport Expiry</label>
                        <input
                            type="text"
                            placeholder='DD-MM-YYYY'
                            onChange={handleChange}
                            value={values.ppExpireDate}
                            name={"ppExpireDate"}
                            autoComplete="off"
                        />
                        <div className={`expandable ${touched.ppExpireDate && errors.ppExpireDate ? 'show' : ''}`}>
                            {errors.ppExpireDate}
                        </div>
                    </div>

                    <div className="priceDiv">
                        <label htmlFor="price">Date Of Birth</label>
                        <input
                            type="text"
                            placeholder='DD-MM-YYYY'
                            onChange={handleChange}
                            value={values.dob}
                            name={"dob"}
                            autoComplete="off"
                        />
                        <div className={`expandable ${touched.dob && errors.dob ? 'show' : ''}`}>
                            {errors.dob}
                        </div>
                    </div>
                </div>

                <div className="inputsDiv">
                    <div className="priceDiv">
                        <label htmlFor="price">Visa Status</label>
                        <input
                            type="text"
                            placeholder='Overseas/Visit/Cancel'
                            onChange={handleChange}
                            value={values.visaStatus}
                            name={"visaStatus"}
                            autoComplete="off"
                        />
                        <div className={`expandable ${touched.visaStatus && errors.visaStatus ? 'show' : ''}`}>
                            {errors.visaStatus}
                        </div>
                    </div>

                    <div className="priceDiv">
                        <label htmlFor="price">Experience</label>
                        <input
                            type="text"
                            placeholder='Enter Years/Months'
                            onChange={handleChange}
                            value={values.experience}
                            name={"experience"}
                            autoComplete="off"
                        />
                        <div className={`expandable ${touched.experience && errors.experience ? 'show' : ''}`}>
                            {errors.experience}
                        </div>
                    </div>
                </div>


                <div className="inputsDiv">
                    <div className="priceDiv">
                        <label htmlFor="price">Expected Salary</label>
                        <input
                            type="text"
                            placeholder='Enter Expected Salary in AED'
                            onChange={handleChange}
                            value={values.expectedSalary}
                            name={"expectedSalary"}
                            autoComplete="off"
                        />
                        <div className={`expandable ${touched.expectedSalary && errors.expectedSalary ? 'show' : ''}`}>
                            {errors.expectedSalary}
                        </div>
                    </div>

                    <div className="priceDiv">
                        <label htmlFor="price">Contact</label>
                        <input
                            type="text"
                            placeholder='Enter Contact'
                            onChange={handleChange}
                            value={values.contact}
                            name={"contact"}
                            autoComplete="off"
                        />
                        <div className={`expandable ${touched.contact && errors.contact ? 'show' : ''}`}>
                            {errors.contact}
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn" onClick={handleSubmit}>
                    SUBMIT
                </button>
            </form>
        </div>
    )
}

export default Register