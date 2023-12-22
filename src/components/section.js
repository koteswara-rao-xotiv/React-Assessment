import React, { useState } from 'react';
import rightArrow from "../assets/icons/chevron-right-svgrepo-com.svg";
import editIcon from "../assets/icons/pen-svgrepo-com.svg";
import saveIcon from "../assets/icons/reshot-icon-checkmark-GVRAE73C9Z.svg";
import NumericInput from './numericInput'; 


const CollapsibleSection = ({ EachSection, onBlur }) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const [dataValuesList, setDataValuesList] = useState(EachSection.data);

    const handleEditClick = (id) => {
        const updatedDataList = dataValuesList.map((data, index) => index === id ? { ...data, isEditing: true } : data);
        setDataValuesList(updatedDataList);
    };

    const handleBlur = (id, newValue) => {
        const updatedDataList = dataValuesList.map((data, index) =>
            index === id ? { ...data, amount: Number(newValue), isEditing: false } : data
        );
        setDataValuesList(updatedDataList);
        onBlur(updatedDataList);
    };

    return (
        <div className="w-full">
            <div
                onClick={toggleVisibility}
                className="flex justify-between items-center cursor-pointer bg-gray-200 font-bold py-4 px-8"
            >
                <h2 className="mr-2">Section {EachSection.section}</h2>
                <span className={`transform transition-transform duration-300 ${isVisible ? 'rotate-90' : ''}`}>
                    <img
                        src={rightArrow}
                        alt="User"
                        className="h-6 w-6 object-cover"
                    />
                </span>
            </div>
            {isVisible && (
                <div>
                    <div className="flex items-center justify-between p-4 border">
                        <p>Item</p>
                        <p>Amount ( in INR)</p>
                    </div>
                    <div className='border border-t-0'>
                        {dataValuesList?.map((data, index) => (
                            <div className="flex items-center justify-between p-4" key={index}>
                                <p>{data.label}</p>
                                <div>
                                    <div key={index} className="flex items-center">
                                        {data.isEditing ? (
                                            <span className='flex items-center'>
                                                <NumericInput
                                                    initialValue={data.amount}
                                                    onBlur={(newValue) =>handleBlur(index, newValue)}
                                                    isEditing={data.isEditing}
                                                />
                                                <img
                                                    src={saveIcon}
                                                    alt="Save"
                                                    className="h-6 w-6 object-cover"
                                                />
                                            </span>
                                        ) : (
                                            <div className="flex items-center">
                                                <span className="mr-2">{data.amount || "--"}</span>
                                                <img
                                                    src={editIcon}
                                                    alt="Edit"
                                                    className="h-6 w-6 object-cover"
                                                    onClick={() => handleEditClick(index)}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            )}
        </div>
    );
};

export default CollapsibleSection;