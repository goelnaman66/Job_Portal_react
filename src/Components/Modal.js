import React from 'react';


function Modal(props) {
  const { show, onClose, children } = props;

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="flex justify-center items-center bg-white fixed top-0 left-0 w-full h-full z-1">
        <button onClick={onClose} className="modal-close bg-sky-400 text-white p-2 rounded-sm rounded-sm mt-8 mb-2">
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
