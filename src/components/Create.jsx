import { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import data from '../data/data';

const getLocalItem = () => {
    let list = localStorage.getItem('items');
    if (list) {
        return JSON.parse(list);
    }
    return [];
}

const Create = () => {
    const [inputData, setInputData] = useState('');
    const [selectData, setSelectData] = useState('');
    const [items, setItems] = useState(getLocalItem());

    const addItem = () => {
        if (inputData && selectData) {
            setItems([...items, { task: inputData, priority: selectData }]);
            setInputData('');
            setSelectData('');
        }
    }

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

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
                                    <div className='form-group mb-3'>
                                        <label htmlFor="title">Task Name</label>
                                        <input type="text" name="task" className='form-control' placeholder='Enter Task' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                                    </div>
                                    <div className='form-group'>
                                        <select className="form-select" aria-label="Select" value={selectData} onChange={(e) => setSelectData(e.target.value)}>
                                            <option defaultValue>Select Priority</option>
                                            {data.map((item) => (
                                                <option key={item.name}>{item.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='form-group mt-3'>
                                        <button onClick={addItem} className='btn btn-primary align-items-center'>Create Task</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 mt-5'>
                        <div className='card'>
                            <div className='card-body'>
                            <ul className='list-group'>
                            {items.map((item, index) => (
                                        <li className='list-group-item d-flex flex-row  justify-content-between' key={index}>
                                                <div>
                                                <input className="form-check-input me-1" type="checkbox"/>
                                                  {item.task}<span className='mx-2 bg-success-subtle px-3 py-2 rounded'>{item.priority}</span>
                                                </div>
                                                <div>
                                                    <a href="#"><FaEdit/></a>
                                                    <a href="#"><MdDelete color='red'/></a>
                                                </div>
                                        </li>
                                ))}
                                </ul>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Create;
