import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCustomer = () => {
    const customerData = useLoaderData()
   
    const handleUpdateCustomer = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // console.log(form,name,email,phone);
        const updatedCustomer = { name, email, phone }
        // console.log(newCustomer)
        fetch(`http://localhost:5000/update/${customerData._id}`, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify( updatedCustomer)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        
    }
    return (
        <div className='w-1/2 mx-auto bg-base-200 mt-16 border-cyan-600 border-2 rounded'>
            <h2 className='text-center text-3xl pt-8'>Update Customer</h2>
            <form onSubmit={handleUpdateCustomer} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" name='name' defaultValue={customerData.name} className="input input-accent input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" name='email' defaultValue={customerData.email} className="input input-accent input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input type="text" placeholder="Number" name="phone" defaultValue={customerData.phone} className="input input-accent input-bordered" required />

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update Customer</button>
                </div>
            </form>
        </div>
    )
};

export default UpdateCustomer;