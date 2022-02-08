import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import Hello from './documentacion/main/1_Hello_World/Hello';
import Welcome from './documentacion/main/4_componentes_propiedades/1_componente_funcional/Welcome';

ReactDOM.render(
    <React.StrictMode>
        <Welcome name={'Thiago'}/>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

