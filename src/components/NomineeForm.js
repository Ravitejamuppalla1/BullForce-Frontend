import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { asyncAddNominee } from '../actions/nomineeActions'

const NomineeForm = () => {
    const [name, setName] = useState('')
    const [relation, setRelation] = useState('')
    const [aadhaarNumber, setAadhaarNumber] = useState('')
    const [formErrors, setFormErrors] = useState({})


    const dispatch = useDispatch()
    const errors = {}

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleRelationChange = (e) => {
        setRelation(e.target.value)
    }

    const handleAadhaarNumber = (e) => {
        setAadhaarNumber(e.target.value)
    }

    const runValidations = () => {
        if (name.length === 0) {
            errors.name = 'Nominee Name cannot be blank'
        }
        if (relation.length === 0) {
            errors.relation = 'Nominee Relation cannot be blank'
        }
        if (aadhaarNumber.length === 0) {
            errors.aadhaarNumber = 'Nominee Aadhaar Number cannot be blank'
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        runValidations()

        if (Object.keys(errors).length === 0) {
            setFormErrors({})

            const formData = {
                name,
                relation,
                aadhaarNumber
            }

            const reset = () => {
                setName('')
                setRelation('')
                setAadhaarNumber('')

            }
            dispatch(asyncAddNominee(formData, reset))
        }
        else {
            setFormErrors(errors)
        }

    }

    return (

        <div >
            <h1 style={{ fontSize: '20px', marginLeft: '100px', fontStyle: 'italic', marginBottom: '80px', padding: '20px' }}><b>
                <span style={{ color: 'yellow' }}>Bull</span>
                <span style={{ color: 'white' }}>Force</span>
            </b> </h1>
            <div className='container' style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/Vector.png)`
                , backgroundRepeat: 'no-repeat',overflow:'hidden'

            }}  >
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={process.env.PUBLIC_URL + '/Group 41881.png'} alt="Your Image" style={{ marginRight: '300px' }} />
                    </div>
                    <div className='col-md-6'>
                        <h4 style={{ color: 'lightgreen', fontSize: '25px' }} >Add nominee</h4>
                        <p style={{ color: 'white', fontSize: '12px' }} >Select below option</p>
                        <form onSubmit={handleSubmit} className='form'>
                            <input type='text' value={name} onChange={handleNameChange} placeholder='   Enter nominee name' style={{ borderRadius: '5px', width: '300px', height: '45px', marginBottom: '20px' }} />
                            {formErrors.name && <span style={{ color: "red" }}>{formErrors.name}</span>}<br />

                            <select onChange={handleRelationChange} value={relation} style={{ borderRadius: '5px', width: '300px', height: '45px', marginBottom: '20px', color: 'gray', paddingLeft: '10px' }}>
                                <option value='' > Nominee relation</option>
                                <option value='father'>Father</option>
                                <option value='Mother'>Mother</option>
                                <option value='Sibiling'>Sibiling</option>
                                <option value='Others'>Others</option>
                            </select>{formErrors.relation && <span style={{ color: "red" }}>{formErrors.relation}</span>}<br />

                            <input type='text' value={aadhaarNumber} onChange={handleAadhaarNumber} placeholder='   Nominee aadhaar number' style={{ borderRadius: '5px', width: '300px', height: '45px', marginBottom: '20px' }} />
                            {formErrors.aadhaarNumber && <span style={{ color: "red" }}>{formErrors.aadhaarNumber}</span>}<br />

                            <button style={{ backgroundColor: '#F7330E', marginLeft: '100px', borderRadius: '15px', height: '35px', color: 'white' }}>Submit</button>
                        </form>
                    </div>
                </div>


            </div>

        </div>

    )
}

export default NomineeForm