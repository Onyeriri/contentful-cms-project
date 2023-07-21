import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

export const useData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const client = createClient({
        accessToken: import.meta.env.VITE_ACCESS_TOKEN,
        space: import.meta.env.VITE_SPACE_ID,
        environment: 'master'
    });

    const getData = async () => {
        try {
            const response = await client.getEntries({
                content_type: 'products'
            });
            
            if (!response) {
                throw new Error('Something went wrong!!!');
            }

            const { items } = response;
            setData(items);
            setIsLoading(!isLoading);
            // console.log(response);
        } catch (error) {
            setIsLoading(!isLoading);
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return {
        data,
        isLoading
    };

};