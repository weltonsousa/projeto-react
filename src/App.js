import React, { useState } from "react";

import Tasks from "./components/Tasks";
import Menu from "./components/Menu";
import Rodape from "./components/Rodape";
import "./App.css"




const App = () => {

    const [task, setTask] = useState([
        {
            id: '1',
            title: 'Estudar programacao',
            completed: false,
        },
        {
            id: '2',
            title: 'Ler livros',
            completed: true,
        }
    ]);

    return <div className="container">    
        <Menu /> 
        <Tasks />     
        <Rodape />
    </div>

}

export default App;