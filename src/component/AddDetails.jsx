import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddDetails = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();
    const info = {
        name: name,
        email: email,
        mobile: mobile,
        dob: dob,
        gender: gender
    }
    const notify = () => {
        toast("Data added successfully.....")
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        if (name !== '' && email !== '' && mobile !== '' && dob !== '' && gender !== '') {
            console.log("form submitted", info);
            axios.post('https://people-app-backend-api.vercel.app/peoples', info)
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
            notify();
            navigate("/data")
        } else {

        }



        setName('');
        setMobile('');
        setGender('');
        setEmail('');
        setDob('');
        ///navigate('/data');
    }
    return (
        <div className="container-sm">
            <h3 className="text-center mt-5 mb-5">Add Details</h3>
            <div className="shadow p-5 mb-5 bg-white rounded">
                <div className="row d-flex justify-content-center">
                    <form action="" className=" col-md-6 " onSubmit={handleSubmit}>
                        <label className="form-label" htmlFor="">Name</label>
                        <input className="form-control" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

                        <label className="form-label" htmlFor="">Email</label>
                        <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <label className="form-label" htmlFor="">Mobile</label>
                        <input className="form-control" type="number" value={mobile} onChange={(e) => setMobile(e.target.value)} />

                        <label className="form-label" htmlFor="">Birth Date</label>
                        <input className="form-control" type="date" value={dob} onChange={(e) => setDob(e.target.value)} />

                        <label className="form-label" htmlFor="">Gender</label>
                        {/* <input className="form-control" type="text" value={gender} onChange={(e) => setGender(e.target.value)} /> */}
                        <select name="" id="" className="form-control" value={gender} onChange={(e) => setGender(e.target.value)} >
                            <option value="">select</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                        </select>
                        <div className="row d-flex justify-content-center">
                            <input type="submit" className="btn btn-primary mt-4 col-md-2" value="Add" />
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}