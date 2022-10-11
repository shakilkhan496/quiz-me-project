import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizData from '../QuizData/QuizData';

const Quiz = () => {
    const quizesDB = useLoaderData();
    const quizes = quizesDB.data.questions;
    const data = quizesDB.data;


    return (
        <div className='mx-auto my-auto w-4/5'>
            <div data-aos="zoom-in" className='font-semibold mt-20 mx-auto text-center text-4xl mb-5'>
                <h1>Quiz of <span className='text-blue-700 font-bold'>{data.name}</span></h1>
            </div>
            {
                quizes.map((quiz, idx) =>
                    <QuizData
                        key={idx}
                        quiz={quiz}

                    ></QuizData>
                )
            }
        </div>
    );
};

export default Quiz;