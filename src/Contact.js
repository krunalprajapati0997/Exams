import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { InputAdornment } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
const axios = require('axios'); 

function Contact() {

    const name = () =>{
        axios.get()
    }
    name()

    const [allEntry, setAllEntry] = useState([])


    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        fullname: '',
        phone: '',
        email: '',
        address: '',
        password: '',
        birthdate: ''
    });

    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        fullname: '',
        phone: '',
        email: '',
        address: '',
        password: '',
        birthdate: ''
    });

    const [submit, submitted] = useState(false);

    const printValues = e => {
        e.preventDefault();
        setForm({
            firstname: data.firstname,
            lastname: data.lastname,
            fulltname: data.fullname,
            phone: data.phone,
            email: data.email,
            address: data.address,
            password: data.password,
            birthdate: data.birthdate
        });

        const newEntry = { firstname: data.firstname, lastname: data.lastname, fullname: data.fullname, phone: data.phone, email: data.email, address: data.address, password: data.password, birthdate: data.birthdate }

        setAllEntry([...allEntry, newEntry])
        submitted();

        console.log(allEntry);
    };

    const updateField = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value

        });
    };

    return (

        <>

            <div className="border border-primary container border-3"  >
                <div style={{ textAlign: 'center' }}>

                    <h1>Contact Form</h1>
                    <h5 className='mb-3' >Required</h5>
                    <div>

                        <form style={{ textAlign: 'center' }} onSubmit={printValues}  >


                            <label style={{ textAlign: 'left' }}>

                                <strong>First Name</strong> <br></br>
                                <input type="text" required name="firstname" className='mx-2' className='m-2' value={data.firstname} onChange={updateField} />
                            </label><br></br>

                            <label style={{ textAlign: 'left' }}>
                                <strong>Last Name</strong><br></br>
                                <input type="text" required name="lastname" className='mx-2' className='m-2' value={data.lastname} onChange={updateField} />
                            </label><br></br>

                            <label style={{ textAlign: 'left' }}>
                                <strong>Full Name</strong> <br></br>
                                <input type="text" name="fullname" className='mx-2' className='m-2' value={data.fullname} onChange={updateField} />
                            </label>
                            <br></br>

                            <label style={{ textAlign: 'left' }}>
                                <strong>Phone <PhoneAndroidIcon className='mx-1' /></strong><br></br>

                                <input type="number" required name="phone" className='mx-2' size="10" className='m-2' value={data.phone} onChange={updateField} />
                            </label><br></br>

                            <label style={{ textAlign: 'left' }}>
                                <strong>Email <EmailIcon className='mx-1' /></strong> <br></br>
                                <input type="text" required class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" className='mx-2' className='m-2' value={data.email} onChange={updateField} />
                            </label><br></br>

                            <label style={{ textAlign: 'left' }}>
                                <strong>Address</strong><br></br>
                                <input type="text" name="address" className='mx-2' className='m-2' value={data.address} onChange={updateField} />
                            </label><br></br>


                            <label style={{ textAlign: 'left' }}>
                            <strong>Password<VisibilityIcon className='mx-2'/></strong><br></br>
                            
                         <input type="password"  name="password"   placeholder="Password" className='mx-2' value={data.password} onChange={updateField} />
                        </label><br></br>

                             
                                
                            




                            <TextField
                                id="date" className='my-3'
                                label="Choose your birthdate"
                                type="date"
                                defaultValue="2000-01-01"
                                InputLabelProps={{ shrink: true, }} />
                            <br />



                            <input class="form-check-input my-3" type="checkbox" value="" id="invalidCheck2" required />
                            <label class="form-check-label my-3 mx-3" for="invalidCheck2">
                                Agree to terms and conditions
                            </label>
                            <br />




                            <button className='my-2 btn btn-success ' ><strong>Submit</strong></button>


                        </form>



                        <p>{submit ? form.firstname : null}</p>
                        <p>{submit ? form.lastname : null}</p>
                        <p>{submit ? form.fullname : null}</p>
                        <p>{submit ? form.phone : null}</p>
                        <p>{submit ? form.email : null}</p>
                        <p>{submit ? form.address : null}</p>
                        <p>{submit ? form.password : null}</p>

                        <div className='showDataStyles'>
                            <div class='table'>
                                <table class="table-primary" style={{ margin: 'auto' }}>
                                    <tr>
                                        <th >First Name</th>
                                        <th>Last Name</th>

                                        <th> Full Name</th>
                                        <th>  Phone Num</th>
                                        <th> Email </th>
                                        <th> Address</th>
                                        <th> Password </th>


                                    </tr>
                                    {
                                        allEntry.map((curElem) => {
                                            return (
                                                <tr>
                                                    <td  >
                                                        <p> {curElem.firstname}</p>
                                                    </td>
                                                    <td>
                                                        <p> {curElem.lastname}</p>
                                                    </td>

                                                    <td>
                                                        <p>   {curElem.fullname}  </p>
                                                    </td>
                                                    <td>
                                                        <p> {curElem.phone}</p>
                                                    </td>
                                                    <td>
                                                        <p> {curElem.email} </p>
                                                    </td>
                                                    <td>
                                                        <p> {curElem.address}</p>
                                                    </td>
                                                    <td>
                                                        <p> {curElem.password}</p>
                                                    </td>

                                                </tr>
                                            )
                                        })
                                    }
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>

    );
}

export default Contact
