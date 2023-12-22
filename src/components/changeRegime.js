import React from 'react';
import changeIcon from '../assets/icons/arrow-left-right-svgrepo-com.svg';
import infoIcon from '../assets/icons/info-circle-svgrepo-com.svg';

const DeclarationComponent = () => {
    return (
        <div className="px-8 py-2" style={{ backgroundColor: '#f4f6fa' }}>
            <div className="flex items-center">
                <div>
                    <p className="text-lg">Tax Regime : <b>Old</b> </p>
                </div>
                <div className='px-1'>
                <img src={changeIcon} className="h-6 w-6 object-cover"/>
                </div>
                <div className='px-1'>
                <p className="text-lg font-bold" style={{color: "rgb(64 92 210)"}}>Change </p>
                </div>
            </div>
            <div className='flex items-center max-w-4xl'>
            <img src={infoIcon} alt="Info"
                    className="h-6 w-6 object-cover" />
            <div className='p-4'>
                <p className="text-lg" style={{color: "rgb(16 170 100)"}}>Considering your salary structure we feel that Old Regime suits you the best. Although you can move to other tax regime if you want </p>
            </div>
        </div>
        </div>
    );
};

export default DeclarationComponent;