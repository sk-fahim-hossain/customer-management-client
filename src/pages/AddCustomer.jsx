import React from 'react';

const AddCustomer = () => {
    const handleAddNewCustomer = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // console.log(form,name,email,phone);
        const newCustomer = {name, email, phone}
        // console.log(newCustomer)
       fetch('http://localhost:5000/addcustomer',{
        method: 'POST',
        headers: {
            "Content-type": "application/json"
          },
          body:JSON.stringify(newCustomer)
       })
       .then(res => res.json())
       .then(data => console.log(data))
        form.reset()
    }
    return (
        <div className='w-1/2 mx-auto bg-base-200 mt-16 border-cyan-600 border-2 rounded'>
            <h2 className='text-center text-3xl pt-8'>Add New Customer</h2>
            <form onSubmit={handleAddNewCustomer} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" name='name' className="input input-accent input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" name='email' className="input input-accent input-bordered" required />
                    
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input type="text" placeholder="Number" name="phone" className="input input-accent input-bordered" required />
                    
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Customer</button>
                </div>
            </form>
        </div>
    );
};

export default AddCustomer;