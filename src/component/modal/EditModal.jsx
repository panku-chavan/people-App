import axios from "axios";
import { useEffect, useState } from "react"
import { Button, Modal } from "react-bootstrap"

export const EditModal = ({ id, show, closeEdit, name1, email1, mobile1, dob1, gender1 }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');

    useEffect(() => {
        setName(name1);
        setEmail(email1);
        setMobile(mobile1);
        setDob(dob1);
        setGender(gender1);
    }, [id])

    const info = {
        name: name,
        email: email,
        mobile: mobile,
        dob: dob,
        gender: gender
    }
    const saveEdit = () => {
        // console.log(id)
        //console.log(info)
        axios.put(`http://localhost:5000/peoples/edit/${id}`, info)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
        closeEdit();
        // setName('');
        // setEmail('');
        // setDob('');
        // setMobile('');
        // setGender('');
    }
    return (
        <>
            <Modal show={show} onHide={closeEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action="" className=" "
                    //onSubmit={handleSubmit}
                    >
                        <label className="form-label" htmlFor="">Name</label>
                        <input className="form-control" type="text" id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <label className="form-label" htmlFor="">Email</label>
                        <input className="form-control" type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label className="form-label" htmlFor="">Mobile</label>
                        <input className="form-control" type="number"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                        />

                        <label className="form-label" htmlFor="">Birth Date</label>
                        <input className="form-control" type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />

                        <label className="form-label" htmlFor="">Gender</label>
                        {/* <input className="form-control" type="text" value={gender} onChange={(e) => setGender(e.target.value)} /> */}
                        <select name="" id="" className="form-control"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="">select</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                        </select>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeEdit}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveEdit}>
                        Done
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}