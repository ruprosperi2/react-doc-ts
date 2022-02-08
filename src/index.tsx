import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import Hello from './documentacion/main/1_Hello_World/Hello';
// import Welcome from './documentacion/main/4_componentes_propiedades/1_componente_funcional/Welcome';
// import Welcome from './documentacion/main/4_componentes_propiedades/3_renderizado_componente/Welcome';
import Comment from './documentacion/main/4_componentes_propiedades/4_extraccion_componentes/Comment';

// const element = <Welcome name={'sobrino'}/>
//
// ReactDOM.render(
//     <React.StrictMode>
//         {element}
//     </React.StrictMode>,
//     document.getElementById('root')
// );

const info: object = {
    user:{
        name: 'Ruben',
        avatarUrl: 'https://www.tutorialesprogramacionya.com/angularya/detalleconcepto.php?punto=24&codigo=24&inicio=20'
    },
    text: 'hola mundo'
};

ReactDOM.render(
    <React.StrictMode>
        <Comment info={info}/>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

