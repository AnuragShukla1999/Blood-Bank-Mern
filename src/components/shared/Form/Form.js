import React, { useState } from 'react'
import { handleLogin, handleRegister } from '../../../services/authService';

const Form = ({ formType, submitBtn, formTitle }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("doner");
    const [name, setName] = useState("");
    const [organisationName, setOrganisationName] = useState("");
    const [hospitalName, setHostpitalName] = useState("");
    const [website, setWebsite] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("")

    return (
        <div>
            <form
                onSubmit={(e) => {
                    if (formType === "login") {
                        return handleLogin(e, email, password, role);
                    } else {
                        return handleRegister(e, name, role, email, password, phone, organisationName, address, hospitalName, website);
                    }
                }}
            >

                <h1>{formTitle}</h1>
                <hr />
                <div>
                    <div className="form-check ms-2">
                        <input
                            type='radio'
                            className='form-check-input'
                            name='role'
                            value={"doner"}
                            onChange={(e) => setRole(e.target.value)}
                            defaultChecked
                        />
                        <label htmlFor="adminRadio" className="form-check-label">
                            Doner
                        </label>
                    </div>

                    <div className="form-check ms-2">
                        <input
                            type='radio'
                            className='form-check-input'
                            name='role'
                            id='adminRadio'
                            value={"admin"}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        <label htmlFor="adminRadio" className="form-check-label">
                            Admin
                        </label>
                    </div>

                    <div className="form-check ms-2">
                        <input
                            type='radio'
                            className='form-check-input'
                            name='role'
                            id='hospitalRadio'
                            value={"hospital"}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        <label htmlFor="hospitalRadio" className="form-check-label">
                            Hospital
                        </label>
                    </div>

                    <div className="form-check ms-2">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="role"
                            id="organisationRadio"
                            value={"organisation"}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        <label htmlFor="organisationRadio" className="form-check-label">
                            Organisation
                        </label>
                    </div>

                </div>

                

            </form>
        </div>
    )
}

export default Form