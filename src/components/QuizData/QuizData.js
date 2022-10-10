import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const QuizData = ({ quiz }) => {
    const { question, options, id, correctAnswer } = quiz;
    console.log(correctAnswer)



    const handleClick = (event) => {
        if (event === correctAnswer) {
            alert('Your answer is correct')
        } else {
            alert('WRONG')
        }

    }


    return (
        <div className='mt-20 border p-10 space-y-10'>
            <div className='flex items-center justify-between'>
                <p className='bg-blue-400 rounded-xl w-1/2 p-2'> <span className='font-semibold'>Quiz ID</span> : <span className='text-white'> {id}</span></p>
                <Link><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></Link>
            </div>
            <h1 className='font-semibold text-4xl'> {question}</h1>
            <ul className='grid lg:grid-cols-2'>{

                options.map((element, key) => <li key={key}>
                    <div className="flex border m-5 items-center pl-3">
                        <input onClick={e => handleClick(e.target.value)} id="list-radio-license" type="radio" value={element} name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{element}</label>
                    </div>

                </li>)
            }</ul>

        </div>
    );
};

export default QuizData;