// TermsModal.jsx
import React from 'react';

const TermsModal = ({ onAccept }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Terms and Conditions</h2>
                <p>Please read and accept our Terms and Conditions and Privacy Policy to proceed.</p>
                <p>Terms and Conditions...</p>
                <p>Privacy Policy...</p>
                
                <button className="yes-bttn" onClick={onAccept}>I Accept</button>
            </div>
        </div>
    );
};

export default TermsModal;
