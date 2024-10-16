import React, { useState, useEffect } from 'react';
import "./Section.css";
import { MdCalendarMonth } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { FcMoneyTransfer } from "react-icons/fc";

export default function Section() {
    const [valueAmount, setValue] = useState("");
    const [valueinCome, setValueincome] = useState("");
    const [valueExpense, setValueExpense] = useState("");
    const [valueExpenseAmoun, setValueExpenseAmount] = useState("");
    const [valueExpenseCategory, setValueExpenseCategory] = useState("");
    const [tasks, setTasks] = useState([]);
    const [outFlows, setOutflows] = useState([]);

    // balans

    const [balance ,setBalance]=useState(0);
    const [expenseBalance ,setExpenseBalance]=useState(0);
    const [IncomeBalance ,setIncomeBalance]=useState(0);

    

    const [dateTime, setDateTime] = useState({
        day: '',
        month: '',
        hour: '',
        minute: '',
        year: '',
        weekDay: '',
    });

    useEffect(() => {
        const now = new Date();
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const weekDays = [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ];
        const day = now.getDate();
        const weekDay = weekDays[now.getDay()];
        const year = now.getFullYear();
        const month = months[now.getMonth()];
        const hour = String(now.getHours()).padStart(2, '0');
        const minute = String(now.getMinutes()).padStart(2, '0');

        setDateTime({ day, month, hour, minute, year, weekDay });
    }, []);

    const [showForm, setShowForm] = useState(false);
    const [formType, setFormType] = useState('');

    const toggleForm = (type) => {
        setShowForm(true);
        setFormType(type);
    };

    const closeForm = () => {
        setShowForm(false);
    };

    const addTask = (e) => {
        e.preventDefault();
        if (valueAmount && valueinCome) {
            setTasks([...tasks, { sum: valueAmount, title: valueinCome }]);
            setBalance(balance + parseFloat(valueAmount));
            setIncomeBalance(IncomeBalance + parseFloat(valueAmount) )
            setValue("");
            setValueincome("");
            closeForm();
        }
    };

    const outFlow = (e) => {
        e.preventDefault();
        if (valueExpense && valueExpenseAmoun && valueExpenseCategory) {
            setOutflows([...outFlows, { Expense: valueExpense, Amount: valueExpenseAmoun, Category: valueExpenseCategory }]);
            setBalance(balance - parseFloat(valueExpenseAmoun));
            setExpenseBalance(expenseBalance- parseFloat(valueExpenseAmoun))
            setValueExpense("");
            setValueExpenseAmount("");
            setValueExpenseCategory("");
            closeForm();
        }
    };


    return (
        <div className='Section'>
            {!showForm ? (
                <div className="col-12">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <p>
                                <span>{dateTime.year}</span>
                                <sup>{dateTime.day}<MdCalendarMonth className='ms-1 mb-2' size={18} color='#ff6f91' /></sup>
                            </p>
                            <div className="button">
                                <button className="btn me-2" id='flowButton' onClick={() => toggleForm('Outflow')}>Outflow</button>
                                <button className="btn" id='flowButton' onClick={() => toggleForm('Inflow')}>Inflow</button>
                            </div>
                        </div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <p className='d-flex justify-content-between align-items-center'><strong>Inflow</strong> <strong>{IncomeBalance}</strong></p>
                                
                                <p className='d-flex justify-content-between align-items-center'><strong>Outflow</strong> <strong>{expenseBalance}</strong></p>
                                <hr />
                                <p className='d-flex justify-content-between align-items-center'><strong>Overall balance</strong> <strong>{balance}</strong></p>
                            </blockquote>
                        </div>
                        <div>
                            {tasks.map((task, index) => (
                                <div key={index} className="card">
                                    <div className="card-header d-flex align-items-center justify-content-between">
                                       <div className='d-flex align-items-center '>
                                           <div className="text-center me-2 ">
                                                <span className="display-5 day">{dateTime.day}</span>
                                            </div>
                                            <div className="text">
                                                <p className="mb-0 text-center">{dateTime.weekDay}</p>
                                                <p className="mb-0" id='pushtiRang'>{dateTime.month} {dateTime.year}</p>
                                            </div>
                                       </div>
                                        <p className="text-end">+{task.sum}</p>
                                    </div>
                                    <div className="card-body">
                                        <blockquote className="blockquote mb-0">
                                            <p className='d-flex justify-content-between align-items-center'>
                                                <strong>{task.title} <FcMoneyTransfer /></strong> <strong>+{task.sum}</strong>
                                            </p>
                                            <p className='text-end '>
                                                <MdEdit color='#ff6f91' className='icon me-2'/>
                                                <FaRegTrashCan color='#ff6f91' className='icon' />
                                            </p>
                                            <hr />
                                        </blockquote>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            {outFlows.map((outFlow, index) => (
                                <div key={index} className="card">
                                    <div className="card-header d-flex align-items-center justify-content-between">
                                        <div className='d-flex align-items-center '>
                                            <div className="text-center me-2 ">
                                                <span className="display-5 day">{dateTime.day}</span>
                                            </div>
                                            <div className="text">
                                                <p className="mb-0 text-center">{dateTime.weekDay}</p>
                                                <p className="mb-0" id='pushtiRang'>{dateTime.month} {dateTime.year}</p>
                                            </div>
                                        </div>
                                        <p className="text-end">-{outFlow.Amount}</p>
                                    </div>
                                    <div className="card-body">
                                        <blockquote className="blockquote mb-0">
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <strong>{outFlow.Category} <FcMoneyTransfer /></strong> <br />
                                                
                                                <strong>-{outFlow.Amount}</strong>
                                            </div>
                                            <strong>{outFlow.Expense}</strong>
                                            <p className='text-end '>
                                                <MdEdit color='#ff6f91' className='icon me-2'/>
                                                <FaRegTrashCan color='#ff6f91' className='icon' />
                                            </p>
                                            <hr />
                                        </blockquote>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="expense-form mt-3">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            <span>{formType === 'Inflow' ? 'Inflow' : 'Outflow'}</span>
                            <button className="btn-close" aria-label="Close" onClick={closeForm}></button>
                        </div>
                        <div className="card-body">
                            <form onSubmit={formType === 'Inflow' ? addTask : outFlow}>
                                {formType === 'Inflow' ? (
                                    <>
                                        <div className="mb-3">
                                            <label htmlFor="incomeSource" className="form-label">Income Source</label>
                                            <input
                                                value={valueinCome}
                                                onChange={(e) => setValueincome(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                id="incomeSource"
                                                placeholder="e.g., Salary, Gift" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="incomeAmount" className="form-label">Amount</label>
                                            <input
                                                value={valueAmount}
                                                onChange={(e) => setValue(e.target.value)}
                                                type="number"
                                                className="form-control"
                                                id="incomeAmount"
                                                placeholder="e.g., 500" />
                                        </div>
                                        <button 
                                type="submit"
                                onClick={addTask}
                                
                                 className="btn " id='flowButton'>Submit</button>
                           
                                    </>
                                ) : (
                                    <>
                                        <div className="mb-3">
                                            <label htmlFor="expenseName" className="form-label">Expense Name</label>
                                            <input
                                                type="text"
                                                value={valueExpense}
                                                onChange={(e) => setValueExpense(e.target.value)}
                                                className="form-control"
                                                id="expenseName"
                                                placeholder="Grocery, Rent" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="expenseAmount" className="form-label">Amount</label>
                                            <input
                                                type="number"
                                                value={valueExpenseAmoun}
                                                onChange={(e) => setValueExpenseAmount(e.target.value)}
                                                className="form-control"
                                                id="expenseAmount"
                                                placeholder="amount of money" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="expenseCategory" className="form-label d-flex">Category</label>
                                            <select
                                                


                                                id="expenseCategory"
                                                value={valueExpenseCategory}
                                                onChange={(e) => setValueExpenseCategory(e.target.value)}
                                            >
                                                <option value="">Expense category</option>
                                                <option value="Food">Food</option>
                                                <option value="Transport">Transport</option>
                                                <option value="Housing">Housing</option>
                                                <option value="Utilities">Utilities</option>
                                                <option value="Entertainment">Entertainment</option>
                                            </select>
                                        </div>
                                        <button 
                                type="submit"
                                onClick={outFlow}
                                
                                 className="btn " id='flowButton'>Submit</button>
                           
                                    </>
                                )}
                                 </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
