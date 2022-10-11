import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div data-aos="zoom-in" className='lg:text-center mt-20 text-5xl font-semibold'>
                <h1>Q and A section</h1>
            </div>
            <div className='mt-20 space-y-5 lg:mx-20 bg-amber-300 p-14 rounded-2xl shadow hover:scale-110 transition'>
                <h1 className='font-semibold text-3xl'>What is the purpose of React-Router?</h1>
                <p>React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.

                    By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.</p>

            </div>
            <div data-aos="zoom-in" className='mt-20 space-y-5 lg:mx-20 bg-amber-300 p-14 rounded-2xl shadow hover:scale-110 transition'>
                <h1 className='font-semibold text-3xl'>How does context API works?</h1>
                <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. </p>

            </div>
            <div data-aos="zoom-in" className='mt-20 mb-28 space-y-5 lg:mx-20 bg-amber-300 p-14 rounded-2xl shadow hover:scale-110 transition'>
                <h1 className='font-semibold text-3xl'>What is useRef Hook?</h1>
                <p>The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>

            </div>

        </div>
    );
};

export default Blogs;