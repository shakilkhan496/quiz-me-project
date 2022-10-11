import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Statics = () => {
    const quizData = useLoaderData();
    console.log(quizData.data);
    const data = quizData.data;

    return (
        <div>
            <div className='mt-28'>
                <h1 data-aos="fade-right" className='text-center text-5xl font-semibold'>Question <span className='text-blue-600'>Statistics</span></h1>
            </div>
            <div data-aos="zoom-in" className='mx-auto mt-20 w-full lg:ml-96'>

                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey='total' />
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
};

export default Statics;