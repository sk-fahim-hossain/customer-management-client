import React, { useEffect, useState } from 'react';
import TableRow from '../components/TableRow';
import toast from 'react-hot-toast';


const AllCustomers = () => {
    const [users, setUsers] = useState([])

    const url = 'http://localhost:5000/customers'
    async function fetchData() {
        try {
            const res = await fetch(url)
            const data = await res.json()
            if (data.length > 0) {
                setUsers(data)
            }
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        fetchData()
    }, [])



    const handleDeleteCustomer = (id) => {
        const restCustomers = users?.filter(user => user._id !== id)
        setUsers(restCustomers)


        const url = `http://localhost:5000/customers/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Deleted successfully!`)
                }
            })

    }




    return (
        <div>
            <h2 className='text-center text-2xl py-3'>All Customers Here</h2>
            <div className="lg:w-1/2 mx-auto bg-gray-800 rounded-md p-4 md:w-full">
                {users &&
                    <table className='table'>
                        <thead className='bg-slate-800'>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </thead>
                        <tbody>
                            <TableRow users={users} handleDeleteCustomer={handleDeleteCustomer}></TableRow>
                        </tbody>
                    </table>
                }
            </div>
        </div>
    );
};

export default AllCustomers;