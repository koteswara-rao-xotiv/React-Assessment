import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import SaveButton from './button';


const Save = ({ onClick }) => {
    return (
        <div className="py-6 px-20">
            <SaveButton onClick={onClick} />
        </div>
    );
};

export default Save;