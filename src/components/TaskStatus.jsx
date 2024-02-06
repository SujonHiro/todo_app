import React from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TaskStatus = () => {
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
                                        <li className='list-group-item d-flex flex-row  justify-content-between'>
                                                <div>
                                                <input className="form-check-input me-1" type="checkbox"/>
                                                    Task Name seletc item now stattttt askalskl 
                                                </div>
                                                <div>
                                                    <a href="#"><FaEdit/></a>
                                                    <a href="#"><MdDelete color='red'/></a>
                                                </div>
                                        </li>
                                        <li className='list-group-item d-flex flex-row  justify-content-between'>
                                                <div>
                                                <input className="form-check-input me-1" type="checkbox"/>
                                                    Task Name seletc item now stattttt askalskl 
                                                </div>
                                                <div>
                                                    <a href="#"><FaEdit/></a>
                                                    <a href="#"><MdDelete color='red'/></a>
                                                </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <div className='card'>
                                <div className='card-header'>
                                    <h2 className='text-center text-danger'>InCompleted Tasks</h2>
                                </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
};

export default TaskStatus;