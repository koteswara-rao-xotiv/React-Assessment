import React from 'react';
import remainingIcon from '../assets/icons/remaining.svg';

const IconComponent = ({data}) => {
    return (
        data && <div className='flex items-center m-10'>
            <div className="rounded-full p-4 w-15 border" style={{backgroundColor: data.colorCode}}>
                <img src={remainingIcon} alt="User"
                    className="h-6 w-6 object-cover" />
            </div>
            <div className='p-4'>
                <p className="text-lg">{data.header}</p>
                <h2 className="text-2xl font-bold">
                   {data.amount} INR
                </h2>
            </div>
        </div>
    );
};

export default IconComponent;