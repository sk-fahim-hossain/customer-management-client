import React from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const TableRow = ({users,handleDeleteCustomer}) => {
    
    return (
        <>
            {
                users.map(user=> {
                    const {_id, name, email, phone} = user;
                    return(
                        <tr key={_id} className='border-b-slate-400'>
                            <td>{_id}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{phone}</td>
                            <Link to={`/update/${_id}`}><td><span  className='tooltip  tooltip-accent ' data-tip="Edit Customer"  ><PencilSquareIcon  className="h-6 w-6  text-blue-500 cursor-pointer hover:border p-1 rounded-sm border-sky-700" /></span></td></Link>
                            <td><span onClick={()=>handleDeleteCustomer(_id)} className="tooltip  tooltip-accent" data-tip="Delete!" ><TrashIcon className="h-6 w-6 text-blue-500 cursor-pointer hover:border p-1 rounded-sm border-sky-700"  /></span></td>
                            
                        </tr>
                    )
                })
            }
        </>
    );
};

export default TableRow;


