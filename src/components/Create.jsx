import {useState} from 'react';
import data from '../data/data';

const Create = () => {
    const [inputData,setInputData]=useState('');


    console.log(inputData)
    return (
        <>
            <div className='container mx-auto mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='col-md-12'>
                            <div className='card-header'>
                                <h2 className='text-center'>Create Task</h2>
                            </div>
                            </div>
                            <div className='col-md-12'>
                                    <div className='card-body'>
                                        <form action="">
                                            <div className='form-group mb-3'>
                                                <label htmlFor="title">Task Name</label>
                                                <input type="text" name="task"  className='form-control' placeholder='Enter Task' value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
                                            </div>
                                            <div className='form-group'>
                                            <select className="form-select" aria-label="Select">
                                                <option defaultValue>Select Priority</option>
                                                { 
                                                    data.map((item)=>(
                                                        <option key={item.name}>{item.name}</option>
                                                    )
                                                    )}
                                            </select>
                                            </div>
                                            <div className='form-group mt-3'>
                                                <button type="submit" className='btn btn-primary align-items-center'>Create Task</button>
                                            </div>
                                        </form>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Create;