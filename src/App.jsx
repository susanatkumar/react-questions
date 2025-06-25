import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
return (
<>
<div class="h-screen w-full bg-white relative flex overflow-hidden">
   <aside class="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
      <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
         </svg>
      </div>
      <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
         </svg>
      </div>
      <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
         </svg>
      </div>
      <div class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
         </svg>
      </div>
   </aside>
   <div class="w-full h-full flex flex-col justify-between">
      <header class="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
         <div class="flex flex-shrink-0 items-center space-x-4 text-white">
            <div class="flex flex-col items-end ">
               <div class="text-md font-medium ">React Question & Answers</div>
               <div class="text-sm font-regular">Student</div>
            </div>
            <div class="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"></div>
         </div>
      </header>
      <main class="max-w-full h-full flex relative overflow-y-hidden">
         <div class="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
            <div class="w-96 h-auto rounded-lg flex-shrink-0 flex-grow bg-gray-400">
               <h1 class='text-center mt-1 text-black text-[#797B7C] font-medium color-red'>React Interview Questions</h1>
               <div className='p-3'>
                  <h2 className='font-medium '>1. What is React? </h2>
                  <p>React is a JavaScript library used for building user interfaces, particularly
                     single-page applications. It allows developers to create reusable UI
                     components that manage their own state and render efficiently when data
                     changes. 
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>2. What is the difference between a function component and a class component in
                     React? 
                  </h2>
                  <p>Function components are simpler and are written as JavaScript functions.
                     They can use hooks for state and lifecycle features. Class components, on the
                     other hand, are ES6 classes that extend React.Component and use methods
                     like render() and lifecycle methods.
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>3. What are React Hooks?
                  </h2>
                  <p>React hooks are functions that allow you to use state and lifecycle features in
                     function components. Common hooks include: 
                  </p>
                  <ul>
                     <li>useState(): For managing state in a function component.</li>
                     <li>useEffect(): For side effects like data fetching, subscriptions, etc. </li>
                     <li>useContext(): To access context data. </li>
                     <li>useReducer(): For more complex state management.</li>
                  </ul>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>4. What is the Virtual DOM in React?
                  </h2>
                  <p>The Virtual DOM is an in-memory representation of the real DOM elements.
                     React uses it to optimize UI updates by first rendering changes in the virtual
                     DOM and then updating the real DOM only for the changed elements. 
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>5. What are React props and state?
                  </h2>
                  <p>Props: Short for "properties," props are used to pass data from a parent
                     component to a child component. Props are immutable. 
                  </p>
                  <p>State: State is a data structure that represents the component’s local state. It
                     can be changed over time, and when it changes, the component re-renders.
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>6. What is the purpose of useEffect hook in React?
                  </h2>
                  <p>useEffect is used for handling side effects like data fetching, subscriptions,
                     and DOM manipulation in function components. It runs after the render, and
                     you can control when it runs using dependency arrays. 
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>7. What is the difference between controlled and uncontrolled components in
                     React?
                  </h2>
                  <p>Controlled components: These are React components where form elements
                     (like input, textarea, etc.) are controlled by React state. The state is the single
                     source of truth.
                  </p>
                  <p>Uncontrolled components: These are form elements that maintain their own
                     internal state and don't require React state management. You can interact with
                     the DOM directly using refs.
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>8. What is React Context?
                  </h2>
                  <p>React Context is a way to share state across the component tree without
                     passing props down manually at every level. It's useful for global data like
                     theme, authentication, or language preferences.
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>9. What is the key prop in React and why is it important? </h2>
                  <p>The key prop is used to uniquely identify elements in a list or collection of
                     elements. It helps React optimize re-renders by efficiently comparing the
                     virtual DOM and determining which items have changed, been added, or been
                     removed.
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>10. What is Redux and how does it work with React? </h2>
                  <p>Redux is a state management library that can be used with React to manage
                     global state. It uses a central store to manage the state of an application, and
                     actions and reducers are used to modify that state. Redux follows the
                     principles of Flux architecture. 
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>11. What is JSX and why is it used in React?
                  </h2>
                  <p>JSX is a syntax extension that allows you to write HTML-like code within
                     JavaScript. It provides a more intuitive way to define UI elements and
                     improves the readability of React components.
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>12. What are Pure Components in React?
                  </h2>
                  <p>Pure components in React are components that only re-render when their
                     props or state have changed. They implement a shallow comparison of props
                     and state, making them more efficient than regular components.
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>13. What are error boundaries in React?
                  </h2>
                  <p>Error boundaries are React components that catch JavaScript errors anywhere
                     in their child component tree, log the errors, and display a fallback UI. They
                     prevent crashes by isolating errors in specific parts of the component tree. 
                  </p>
               </div>
               <h1 class='text-center mt-1 text-black text-[#797B7C] font-medium color-red'>Advanced Questions </h1>
               <div className='p-3'>
                  <h2 className='font-medium '>1. What is the difference between componentDidMount and useEffect? </h2>
                  <p>componentDidMount is a lifecycle method used in class components that is
                     called after the component is mounted. useEffect in function components is
                     equivalent and can be configured to run once, on every render, or on specific
                     dependencies. 
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>2. Explain reconciliation in React.
                  </h2>
                  <p>Reconciliation is the process through which React updates the DOM. It
                     compares the new virtual DOM with the previous version and makes changes
                     only to the DOM elements that need to be updated, improving performance.
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>3. What is React Suspense and how does it help with code splitting? </h2>
                  <p>React Suspense is a feature that allows you to defer the loading of components
                     or data until they are ready. It is useful for implementing code splitting, where
                     chunks of code are only loaded when required, improving the application's
                     load time. 
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>4. What is the purpose of React.memo? </h2>
                  <p>React.memo is a higher-order component that prevents re-renders of function
                     components if their props haven't changed. It's useful for optimizing
                     performance in functional components. 
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>5. What is the difference between useCallback and useMemo? </h2>
                  <p>5. What is the difference between useCallback and useMemo?
                     useCallback is used to memoize functions, preventing their recreation on every render.
                     useMemo is used to memoize the result of a function, preventing unnecessary recalculations
                     on every render. 
                  </p>
               </div>
               <h1 class='text-center mt-1 text-black text-[#797B7C] font-medium color-red'>Components Based Question </h1>
               <div className='p-3'>
                  <h2 className='font-medium '>1. What is a React component? </h2>
                  <p>A React component is a building block of a React application. Components are
                     JavaScript functions or classes that accept input (called props) and return React
                     elements that describe what should appear on the screen. Components can be
                     functional or class-based. 
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>2. What is the difference between function components and class components in
                     React? 
                  </h2>
                  <p>Function Components:</p>
                  <ui>
                     <li>Simpler syntax.</li>
                     <li>Can use hooks like useState, useEffect, etc. </li>
                     <li>Do not have lifecycle methods but can achieve similar behavior using hooks.</li>
                  </ui>
                  <p>Class Components: </p>
                  <ui>
                     <li>Requires ES6 class syntax. </li>
                     <li>Can have lifecycle methods like componentDidMount, componentDidUpdate,
                        and componentWillUnmount. 
                     </li>
                     <li>Can have state using this.state and this.setState(). </li>
                  </ui>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>3. What are props in React components?
                  </h2>
                  <p>props (short for properties) are inputs to React components. They are passed from
                     parent to child components and are read-only. Props are used to customize a
                     component's behavior or appearance.
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>4. What is state in React components?
                  </h2>
                  <p>state is an object that stores a component's dynamic data. Unlike props, state can
                     change over time, and when the state changes, the component re-renders to reflect the
                     new state. In class components, state is initialized using this.state, and in function
                     components, state is managed using the useState hook. 
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>5. What is the difference between props and state in React?
                  </h2>
                  <p>Props: Immutable, passed from parent to child, used to customize a component's
                     appearance or behavior. 
                  </p>
                  <p>State: Mutable, managed within a component, and used to store dynamic data that
                     may change over time. 
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>6. What is JSX and how does it relate to React components?
                  </h2>
                  <p>JSX (JavaScript XML) is a syntax extension that allows writing HTML-like code
                     within JavaScript. It is commonly used in React components to describe the UI. JSX
                     is transformed into React createElement calls behind the scenes. 
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>7. Can you explain the concept of "rendering" in React?
                  </h2>
                  <p>"Rendering" in React refers to the process of generating and updating the UI based on
                     changes to state or props. When a component's state or props change, React re
                     renders the component to update the DOM accordingly. 
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>8. What is the render() method in React class components?
                  </h2>
                  <p>In class components, the render() method is required and returns the JSX that defines
                     the UI of the component. It is called automatically by React when the component's
                     state or props change.
                  </p>
               </div>
               <h1 class='text-center mt-1 text-black text-[#797B7C] font-medium color-red'>Intermediate React Component Questions
               </h1>
               <div className='p-3'>
                  <h2 className='font-medium '>9. What is a stateless component? </h2>
                  <p>A stateless component is a component that does not manage its own state. It only
                     accepts props and renders UI based on those props. Function components are typically
                     stateless, though they can use hooks for state.
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>10. What is a functional component in React? </h2>
                  <p>A functional component is a JavaScript function that returns JSX. In modern React,
                     functional components can use hooks (like useState, useEffect, etc.) to manage state
                     and lifecycle events. 
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>11. What is a class component in React? </h2>
                  <p>A class component is a JavaScript class that extends React.Component and includes
                     lifecycle methods like componentDidMount, componentDidUpdate, and
                     componentWillUnmount. It can manage its own state via this.state. 
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>12. What is the significance of key prop in a list of components?
                  </h2>
                  <p>The key prop helps React identify which items have changed, been added, or been
                     removed. This helps in efficiently re-rendering only the changed items in a list,
                     improving performance. 
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>13. What are higher-order components (HOCs)? </h2>
                  <p>A Higher-Order Component (HOC) is a function that takes a component and returns a
                     new component with additional props or behavior. It's a pattern used for code reuse.
                     For example, withRouter is an HOC in React Router that injects routing props into a
                     component. 
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>14. What is component lifecycle in React? </h2>
                  <p>Component lifecycle refers to the series of methods that are called at different stages
                     of a component's existence in React, including: 
                  </p>
                  <ul>
                     <li>Mounting: constructor, render, componentDidMount. </li>
                     <li>Updating: componentDidUpdate, shouldComponentUpdate. </li>
                     <li>Unmounting: componentWillUnmount. </li>
                     <li>In functional components, you can simulate lifecycle behavior using the
                        useEffect hook. 
                     </li>
                  </ul>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>15. What is the difference between componentDidMount() and componentDidUpdate()? </h2>
                  <p>componentDidMount() is called once after the component is initially rendered and
                     mounted in the DOM. It’s typically used for tasks like data fetching.
                  </p>
                  <p>componentDidUpdate() is called after any update to the component, either from props
                     or state changes. It’s used for reacting to changes in props or state.
                  </p>
               </div>
               <h1 class='text-center mt-1 text-black text-[#797B7C] font-medium color-red'>Advanced React Component Questions</h1>
               <div className='p-3'>
                  <h2 className='font-medium '>16. What is the purpose of React.memo()?
                  </h2>
                  <p>React.memo() is a higher-order component that memoizes a functional component. It
                     prevents re-renders of the component if its props have not changed. It’s used to
                     optimize performance by avoiding unnecessary renders of child components.
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>17. What are controlled and uncontrolled components in React?
                  </h2>
                  <p>Controlled components: These are components where the form element values (e.g.,
                     input, select, textarea) are controlled by React state. The value is set via state and
                     updated using onChange event handlers. 
                  </p>
                  <p>Uncontrolled components: These are components where the form element values
                     are handled by the DOM itself. You can access their values using refs but don’t need
                     to store them in React state.
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>18. What is React Context, and how can it be used in components?
                  </h2>
                  <p>React Context is a way to share state across the component tree without passing props
                     manually at every level. It is useful for global data (like authentication, theme,
                     language). Components consume context data using useContext in function
                     components or Context.Consumer in class components.
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>19. What is the difference between useEffect and componentDidMount?
                  </h2>
                  <p>useEffect() is a hook that works in function components and can be used for side
                     effects like data fetching, DOM manipulation, and more. It runs after every render by
                     default, but you can control when it runs using the dependency array. 
                  </p>
                  <p>componentDidMount() is a lifecycle method in class components, called once after the
                     initial render when the component is mounted. It’s commonly used for similar tasks
                     like data fetching. 
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>20. What is the purpose of shouldComponentUpdate() in class components?
                  </h2>
                  <p>shouldComponentUpdate() is a lifecycle method in class components that determines
                     whether a component should re-render when there are changes in props or state. It can
                     be used to optimize performance by preventing unnecessary re-renders. 
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>21. What is a "pure" component in React?
                  </h2>
                  <p>A PureComponent is a class component that implements shouldComponentUpdate()
                     with a shallow prop and state comparison. It prevents re-renders if the props and state
                     haven't changed, offering performance optimization for components that always
                     render the same output for the same input. 
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>22. What is the useCallback hook used for in function components?
                  </h2>
                  <p>useCallback is a hook that returns a memoized version of a callback function. It is
                     useful to prevent unnecessary re-creations of functions on every render, which can
                     help with performance in certain scenarios, such as passing functions as props to
                     child components. 
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>23. How does React handle component re-renders?
                  </h2>
                  <p>React determines whether a component needs to re-render based on changes to its
                     state or props. If there’s a change, React schedules a re-render and performs a diffing
                     process to update the DOM efficiently (via the Virtual DOM). React will only re
                     render components whose state or props have changed.
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>24. What is the difference between useEffect with an empty dependency array and
                     componentDidMount ?
                  </h2>
                  <p>useEffect with an empty dependency array ([]) behaves similarly to
                     componentDidMount in class components. It runs only once after the first render,
                     making it ideal for performing setup tasks such as data fetching.
                  </p>
               </div>
               <div className='p-3'>
                  <h2 className='font-medium '>25. What are Render Props in React?
                  </h2>
                  <p>Render Props is a pattern for sharing code between React components using a prop
                     that is a function. The function returns JSX that will be rendered. It allows
                     components to share their logic without explicitly inheriting from one another.
                  </p>
               </div>
               <h1 class='text-center mt-1 text-black text-[#797B7C] font-medium color-red'>Bonus: Miscellaneous React Component Questions </h1>
               <div className='p-3 mb-6'>
                  <h2 className='font-medium '> How can you optimize React components for performance?
                  </h2>
                  <p>Use React.memo to prevent unnecessary re-renders of function components. </p>
                  <p>Use shouldComponentUpdate or PureComponent to optimize class components.</p>
                  <p>Use React.lazy and Suspense for code splitting. </p>
                  <p>Avoid unnecessary anonymous functions in props. </p>
                  <p>Implement useCallback and useMemo hooks for memoizing functions and values.</p>
               </div>
            </div>
            {/* 
            <div class="w-96 h-80 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
            <div class="w-96 h-80 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
            <div class="w-96 h-80 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
            <div class="w-96 h-80 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
            <div class="w-96 h-80 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
            <div class="w-96 h-80 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
            <div class="w-96 h-80 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
            <div class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
            */}
         </div>
      </main>
   </div>
</div>
</>
)
}
export default App