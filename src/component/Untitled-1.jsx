export const AddDetails = () => {
    return (
        <div className="container-lg">
            <h3 className="text-center">Add Details</h3>
            <div className="shadow p-5 mb-5 bg-white rounded">
                <form action="" className=" ">
                    <label className="form-label" htmlFor="">Name</label>
                    <div>
                        <input className="form-control" type="text" />
                    </div>
                    <label className="form-label" htmlFor="">Email</label>
                    <div>
                        <input className="form-control" type="text" />
                    </div>
                    <label className="form-label" htmlFor="">Mobile</label>
                    <div>
                        <input className="form-control" type="text" />
                    </div>
                    <label className="form-label" htmlFor="">Birth Date</label>
                    <div>
                        <input className="form-control" type="text" />
                    </div>
                    <label className="form-label" htmlFor="">Gender</label>
                    <div>
                        <input className="form-control" type="text" />
                    </div>
                </form>
            </div>
        </div>
    )
}