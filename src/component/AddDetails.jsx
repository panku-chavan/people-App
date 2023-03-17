import axios from "axios";
import { useState } from "react";

export const AddDetails = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const info = {
        name: name,
        email: email,
        mobile: mobile,
        dob: dob,
        gender: gender
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        if (name !== '' && email !== '' && mobile !== '' && dob !== '' && gender !== '') {
            console.log("form submitted", info);
            axios.post('http://localhost:5000/peoples', info)
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
        }else{

        }



        setName('');
        setMobile('');
        setGender('');
        setEmail('');
        setDob('');

    }
    return (
        <div className="container-sm">
            <h3 className="text-center">Add Details</h3>
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
        </div>
    )
}