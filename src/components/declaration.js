import React from 'react';
import RemainingAmount from './remainingAmount';

const DeclarationComponent = () => {
    return (
        <div className="px-8 py-2">
                <h2 className="text-2xl font-bold">
                    Declaration
                </h2>
                <p className="text-lg">Upload proof for the declarations that you have done for the FY 2022-23 </p>
                <div className='flex items-center'>
                <RemainingAmount data={{header: "Declared Amount", amount: "67,987", colorCode: "#f2ffd6"}}/>
                <RemainingAmount data={{header: "Declared Amount", amount: "67,987", colorCode: "#d6eeff"}}/>
                </div>
        </div>
    );
};

export default DeclarationComponent;