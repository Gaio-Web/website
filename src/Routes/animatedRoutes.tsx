import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Contact } from '../types';
import NewLayout from '../pages/NewLayout';
import axios from 'axios';

import { LoadingPage } from '../pages/Components/LoadingPage';

export default function AnimatedRoutes() {

    const [data, setData] = useState<Contact | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const response = await axios.get<Contact>(
                    `${import.meta.env.VITE_MAIN_API_URL}/findByConvertedName/${import.meta.env.VITE_CONVERTED_NAME}`
                );
                setData(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData()
            .then(() => {
                console.log('Data fetched!!');

            })
            .catch((error) => console.error(error));
    }, []);

    if (loading) {
        return (
            <LoadingPage />
        );
    }

    return (
        <Routes>
            <Route path="/" element={<NewLayout />} />
        </Routes>
    );
}

type typeofAnimatedRoutes = typeof AnimatedRoutes;
