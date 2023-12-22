import React from 'react';
import documents from '../assets/icons/reject.svg';
import DeclarationSection from './declaration'
import ChangeRegime from './changeRegime'

const DeclarationComponent = () => {
    return (
        <>
        <div className="px-8 py-2" style={{ backgroundColor: '#faeceb' }}>
            <div className="flex items-center">
                <img
                    src={documents}
                    alt="Image"
                    className="mr-4"
                    style={{ maxWidth: '100px' }}
                />
                <div>
                    <h2 className="text-2xl font-bold" style={{ color: '#96302a' }}>
                        Amount Not Declared
                    </h2>
                    <p className="text-lg" style={{ color: '#c84038' }}>You will miss out on lot of tax benefits</p>
                </div>
            </div>
        </div>
        <div>
        <DeclarationSection/>
        </div>
        <div>
            <ChangeRegime/>
        </div>
        </>
    );
};

export default DeclarationComponent;