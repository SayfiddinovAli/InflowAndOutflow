import React from 'react';
import { CiWallet } from "react-icons/ci";
import "./Header.css"

export default function Header() {
  return (
    <div className='shadow py-3' id='Header'>
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo qismi */}
        <div className="d-flex align-items-center">
          
          <h6 className='ms-3 mt-3 mb-0'>
             <span className='ps-3 '>
            <CiWallet size={35} color='#ff6f91' />
          </span>
          Expense Tracker</h6>
        </div>

        {/* Buttons qismi */}
        <div className="buttons">
          <button className='btn btn-light me-2'>Add Transaction</button>
          <button className='btn btn-outline-dark'>Sign In</button>
        </div>
      </div>
    </div>
  );
}
