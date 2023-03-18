import axios from "axios";
import { useState } from "react"
import { Button, Modal } from "react-bootstrap"

export const EditModal = ({id,show,closeEdit,name1,email1,mobile1,dob1,gender1}) => {
    const [name, setName] = useState(name1);
    const [email, setEmail] = useState(email1);
    const [mobile, setMobile] = useState(mobile1);
    const [dob, setDob] = useState(dob1);
    const [gender, setGender] = useState(gender1);
    const info = {
        name: name,
        email: email,
        mobile: mobile,
        dob: dob,
        gender: gender
    }
    const saveEdit=()=>{
       // console.log(id)
        //console.log(info)
        axios.put(`http://localhost:5000/peoples/edit/${id}`,info)
        .then((res)=>console.log(res.data))
        .catch((err)=>console.log(err))
        closeEdit();
        setName('');
        setEmail('');
        setDob('');
        setMobile('');
        setGender('');
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