export const AddDetails = () => {
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("form submitted")
    }
    return (
        <div className="container-sm">
            <h3 className="text-center">Add Details</h3>
            <div className="shadow p-5 mb-5 bg-white rounded">
                <div className="row d-flex justify-content-center">
                    <form action="" className=" col-md-6 " onClick={handleSubmit}>
                        <label className="form-label" htmlFor="">Name</label>
                        <input className="form-control" type="text" />
                        <label className="form-label" htmlFor="">Email</label>
                        <input className="form-control" type="text" />
                        <label className="form-label" htmlFor="">Mobile</label>
                        <input className="form-control" type="text" />
                        <label className="form-label" htmlFor="">Birth Date</label>
                        <input className="form-control" type="text" />
                        <label className="form-label" htmlFor="">Gender</label>
                        <input className="form-control" type="text" />
                        <div className="row d-flex justify-content-center">
                            <input type="submit" className="btn btn-primary mt-4 col-md-2" value="Add" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}