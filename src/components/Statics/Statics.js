import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Statics = () => {
    const quizData = useLoaderData();
    console.log(quizData.data);
    const data = quizData.data;

    return (
        <div>
            <h1>Statics</h1>
            {
                data.map(data => <Chart
                    key={data.id}
                    data={data}
                ></Chart>)
            }
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis dataKey='total' />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Statics;