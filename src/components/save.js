import React, { useState} from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SaveButton from './button';
import Backdrop from './backdrop';


const Save = () => {
    const [isLoading, setIsLoading] = useState(false);
    const handleSaveClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        toast.success("Data saved successfully!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000
        });
    };
    return (
        <div className="py-6 px-20">
            <SaveButton onClick={handleSaveClick} />
            {isLoading && <Backdrop />}
        </div>
    );
};

export default Save;