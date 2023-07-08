import React from 'react';

export default function modal({open, onClose, children}) {
    return(
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors`}>

        </div>
    )
}