import { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import data from '../helper/data';
import {getColorClass, statusColor} from '../helper/color';
const getLocalItem = () => {
    let list = localStorage.getItem('items');
    if (list) {
        return JSON.parse(list);
    }
    return [];
}

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const [selectData, setSelectData] = useState('');
    const [items, setItems] = useState(getLocalItem());
    const [checkedItems, setCheckedItems] = useState({});
    const [toggleSubmit,setToggoleSubmit]=useState(true);
    const [editItem,setEditItem]=useState(null);
    const [selectDisabled, setSelectDisabled] = useState(false);
    const [filterStatus, setFilterStatus] = useState('All');
    const [filterPriority, setFilterPriority] = useState('All');
    const [filteredItems, setFilteredItems] = useState([]);
   
    
    const addItem = () => {

            if(!inputData && !selectData){
                alert('please fill data');
            }else if(inputData && !toggleSubmit){
                setItems(items.map((item)=>{
                    if(item.id===editItem){
                        return{...item,task:inputData}
                    }
                    return item
                }))
                setToggoleSubmit(true);
                setInputData('');
                setSelectData('');
                setEditItem(null);
                setSelectDisabled(false);
        }else {
            const allInput={id:new Date().getTime().toString(),task: inputData, priority: selectData ,status:'Incompleted'}
            setItems([...items,allInput]);
            setInputData('');
            setSelectData('');
            filterTasks(...items,allInput);
            setCheckedItems(prevState => ({ ...prevState, [allInput.id]: false }));
        }
        updateLocalStorage([...items]);
        

    }
    const handleCheckboxChange = (id) => {
        setCheckedItems(prevState => ({ ...prevState, [id]: !prevState[id] }));
        const updatedItems = items.map(item => {
            if (item.id === id) {
                return { ...item, status: checkedItems[id] ? 'Incompleted' : 'Completed' };
            }
            return item;
        });
        setItems(updatedItems);
        updateLocalStorage(updatedItems);
    }
    const deleteTask=(id)=>{
        const deleteData=items.filter((item)=>{
           return id!==item.id
        });
        setItems(deleteData)
    }

    const UpdateBtn=(id)=>{
        const editData=items.find((item)=>{
            return id===item.id
        })
        setToggoleSubmit(false)
        setInputData(editData.task);
        setSelectData(editData.priority);
        setEditItem(id);
        setSelectDisabled(true);
    }
    const filterTasks = () => {
        let filteredItems = getLocalItem();

        if (filterStatus === 'All' && filterPriority === 'All') {
            setFilteredItems(items);
        }
        if (filterStatus !== 'All') {
            filteredItems = filteredItems.filter(item => item.status === filterStatus);
        }

        if (filterPriority !== 'All') {
            filteredItems = filteredItems.filter(item => item.priority === filterPriority);
        }
        setFilteredItems(filteredItems);
    };

    const updateLocalStorage = (updatedItems) => {
        localStorage.setItem('items', JSON.stringify(updatedItems));
    }
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
        setFilteredItems(getLocalItem);
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
                                    <div className='form-group mb-3'>
                                        <select className="form-select" aria-label="Select" value={selectData} onChange={(e) =>setSelectData(e.target.value) } disabled={selectDisabled}>
                                            <option defaultValue>Select Priority</option>
                                            {data.map((item) => (
                                                <option key={item.name}>{item.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='form-group mt-3'>
                                    {toggleSubmit ? (
                                            <button onClick={addItem} className='btn btn-primary align-items-center'>Create Task</button>
                                        ) : (
                                            <button onClick={addItem} className='btn btn-info align-items-center'>Update Task</button>
                                        )}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 mt-5'>
                        <div className='card'>
                            <div className='card-body'>
                                <h2 className='text-center text-danger'>Task</h2>
                                <div className='row justify-content-center d-flex'>
                                    <div className='col-md-5'>
                                        <div className='d-flex my-5'>
                                            <select className="form-select" aria-label="Select" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                                                <option value="All">All Status</option>
                                                <option value="Completed">Completed</option>
                                                <option value="Incompleted">Incompleted</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-md-5'>
                                        <div className='d-flex my-5'>
                                            <select className="form-select" aria-label="Select" value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)}>
                                                <option value="All">All Priority</option>
                                                {data.map((item) => (
                                                    <option key={item.name} value={item.name}>{item.name}</option>
                                                ))}
                                            </select>
                                            <button className='btn btn-primary ms-3' onClick={filterTasks}>Filter</button>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            <ul className='list-group'>
                            {filteredItems.map((item) => (
                                        <li className='list-group-item d-flex flex-row  justify-content-between' key={item.id}>
                                                <div>
                                                <input className="form-check-input me-1" type="checkbox" checked={checkedItems[item.id] || false}
                                                    onChange={() => handleCheckboxChange(item.id)}/>
                                                    
                                                <span style={{ textDecorationLine: checkedItems[item.id] ? 'line-through' : 'none' }}>
                                                        {item.task}
                                                </span>
                                                <span className={`mx-2 badge ${getColorClass(item.priority)} px-3 py-1 rounded`}>{item.priority}</span>
                                                <span className={`mx-2 badge ${statusColor(item.status)} px-3 py-1 rounded`}>{item.status}</span>
                                                </div>
                                                <div className='d-flex gap-3'>
                                                    <a  role="button" onClick={() => UpdateBtn(item.id)}><FaEdit color='blue'/></a>
                                                    <a  role="button" onClick={() => deleteTask(item.id)}><MdDelete color='red'/></a>
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

export default Todo;
