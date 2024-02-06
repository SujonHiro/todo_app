import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const getLocalItem = () => {
    let list = localStorage.getItem('items');
    if (list) {
        return JSON.parse(list);
    }
    return [];
}

const TaskStatus = (props) => {
    const [items, setItems] = useState(getLocalItem());

    useEffect(() => {
        setItems(items)
    },[items]);
    return (
        <>
            <div className='container mx-auto mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-sm-12 col-md-6 mb-3'>
                        <div className='card'>
                            <div className='card-header'>
                                <h2 className='text-center text-success'>Completed Tasks</h2>
                            </div>
                            <div className='card-body'>
                                <ul className='list-group'>
                                    {items.map((item, index) => (
                                        <li className='list-group-item d-flex flex-row justify-content-between' key={index}>
                                            <div>
                                                <input className="form-check-input me-1" type="checkbox" />
                                                {item.task}
                                            </div>
                                            <div>
                                                <a href="#"><FaEdit /></a>
                                                <a href="#"><MdDelete color='red' /></a>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h2 className='text-center text-danger'>Incompleted Tasks</h2>
                            </div>
                            <div className='card-body'>
                                {/* Render your incompleted tasks here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TaskStatus;
