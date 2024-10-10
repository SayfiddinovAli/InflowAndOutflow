import React, { useState, useEffect } from 'react';
import "./Section.css";
import { MdCalendarMonth } from "react-icons/md";

export default function Section() {

    const [dateTime, setDateTime] = useState({
        day: '',
        month: '',
        hour: '',
        minute: '',
    });

    useEffect(() => {
        const now = new Date();

        const months = [
          'January', 'February', 'March', 'April', 'May', 'June', 
          'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const day = now.getDate();
        const month = months[now.getMonth()];
        const hour = String(now.getHours()).padStart(2, '0');
        const minute = String(now.getMinutes()).padStart(2, '0');

        setDateTime({ day, month, hour, minute });
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

    return (
        <div className='Section'>
            {!showForm ? (
              
                <div className="col-12">
                <div className="card">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <span>{dateTime.month} <sup>{dateTime.day}<MdCalendarMonth className='ms-1 mb-2' size={18} color='#ff6f91' /></sup> </span>

                        <div className="button">
                            <button className="btn me-2" id='flowButton' onClick={() => toggleForm('Outflow')}>Outflow</button>
                            <button className="btn" id='flowButton' onClick={() => toggleForm('Inflow')}>Inflow</button>
                        </div>
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p className='d-flex justify-content-between align-items-center'> <strong>Inflow</strong> <strong>Summa</strong> </p>
                            <hr />
                            <p className='d-flex justify-content-between align-items-center'><strong>Outflow</strong> <strong>summa</strong></p>
                             <hr />
                        </blockquote>
                        
                    </div>
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <span>{dateTime.month} <sup>{dateTime.day}<MdCalendarMonth className='ms-1 mb-2' size={18} color='#ff6f91' /></sup> </span>

                        <div className="button">
                            <button className="btn me-2" id='flowButton' onClick={() => toggleForm('Outflow')}>Outflow</button>
                            <button className="btn" id='flowButton' onClick={() => toggleForm('Inflow')}>Inflow</button>
                        </div>
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p className='d-flex justify-content-between align-items-center'> <strong>Inflow</strong> <strong>Summa</strong> </p>
                            <hr />
                            <p className='d-flex justify-content-between align-items-center'><strong>Outflow</strong> <strong>summa</strong></p>
                             <hr />
                        </blockquote>
                        
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
                            <form>
                                {formType === 'Inflow' ? (
                                    <>
                                        <div className="mb-3">
                                            <label htmlFor="incomeSource" className="form-label">Income Source</label>
                                            <input type="text" className="form-control" id="incomeSource" placeholder="e.g., Salary, Gift" />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="incomeAmount" className="form-label">Amount</label>
                                            <input type="number" className="form-control" id="incomeAmount" placeholder="e.g., 500" />
                                        </div>

                                        <button type="submit" className="btn w-100" id='flowButton'>
                                            Confirm Inflow
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <div className="mb-3">
                                            <label htmlFor="expenseName" className="form-label">Expense Name</label>
                                            <input type="text" className="form-control" id="expenseName" placeholder="Grocery, Rent" />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="expenseAmount" className="form-label">Amount</label>
                                            <input type="number" className="form-control" id="expenseAmount" placeholder="amount of money" />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="expenseCategory" className="form-label">Category</label>
                                            <select className="form-select" id="expenseCategory">
                                                <option selected>Choose...</option>
                                                <option value="1">Food</option>
                                                <option value="2">Transport</option>
                                                <option value="3">Utilities</option>
                                                <option value="4">Entertainment</option>
                                                <option value="5">Other</option>
                                            </select>
                                        </div>

                                        <button type="submit" className="btn w-100" id='flowButton'>
                                            Add Expense
                                        </button>
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
