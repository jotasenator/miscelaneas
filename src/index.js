import React from 'react';
import ReactDOM from 'react-dom';
import { data } from './components/hackerrankSortedList/data'
import { SortedList } from './components/hackerrankSortedList/SortedList';

// import { data } from './components/01-useState/hackerrankTestSimulator/data';
// import { Padre } from './components/01-useState/07-tarea-memo/Padre';
// import { Simulator } from './components/01-useState/hackerrankTestSimulator/Simulator';

// import CallbackHook from './components/01-useState/06-Memo/CallbackHook';
// import MemoHook from './components/01-useState/06-Memo/MemoHook';
// import Layout from './components/01-useState/05-useLayoutEffect/Layout';
// import Memorize from './components/01-useState/06-Memo/Memorize';
// import RealExampleRef from './components/01-useState/04-useRef/RealExampleRef';
// import FocusScreen from './components/01-useState/04-useRef/FocusScreen';
// import FormWithCustomHook from './components/01-useState/02-useEffect/FormWithCustomHook';
// import MultipleCustomHooks from './components/01-useState/03-examples/MultipleCustomHooks';

import './index.css';

// import CounterApp from './components/01-useState/CounterApp'
// import HookApp from './HookApp';
import reportWebVitals from './reportWebVitals';
// import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
// import SimpleForm from './components/01-useState/02-useEffect/SimpleForm';


ReactDOM.render(
  <React.StrictMode>
    {/* <CounterApp /> */}
    {/* <HookApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    {/* <RealExampleRef /> */}
    {/* <Layout /> */}
    {/* <Memorize /> */}
    {/* <MemoHook /> */}
    {/* <CallbackHook /> */}
    {/* <Padre /> */}
    {/* <Simulator data={data} /> */}
    <SortedList data={data} />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
