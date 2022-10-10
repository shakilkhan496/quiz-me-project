import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {

    const topicsData = useLoaderData();
    const topics = topicsData.data;


    return (
        <div className='mt-20 mb-40 grid md:grid-cols-2 grid-cols-1 w-4/5 my-auto mx-auto lg:grid-cols-3 gap-5'>
            {
                topics.map(topic =>
                    <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>
                )
            }
        </div>
    );

};

export default Topics;