import React, { useState, useEffect, useRef  } from "react";
import { fetchData } from '../services/http';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import YearSelection from "./yearSelection";
import DeclarationComponent from './amountDeclaration';
import Section from "./section";

const BodyComponent = () => {
    const isInitialMount = useRef(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
          }
        const fetchAPI = async () => {
            try {
                const result = await fetchData('/v3/b/6572dc690574da7622d1fd42');
                setData({ data: result });
                toast.success("Fetched data successfully!", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000
                  });
            } catch (error) {
                toast.error("Server error", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000
                  });
            }
        };
        fetchAPI();
    }, []);
    return (
        <div>
            <div className="py-6 px-20 pt-20">
                <div>
                    <YearSelection />
                    <div>
                        <DeclarationComponent />
                    </div>
                    <div className="py-6">
                        {data?.data?.length > 0 && data?.data.map((section, index) => (
                            <div className="mb-2">
                                <Section key={index} EachSection={section} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BodyComponent;