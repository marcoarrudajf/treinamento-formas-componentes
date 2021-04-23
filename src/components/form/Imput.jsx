import React, {useState} from 'react';


export default  (props) => {

   const [nome, setNome] = useState('Nome')
    return (

        <>
            <input type="text" value= {nome} onChange={e => setNome(e.target.value)}/>
            <h3>{nome}</h3>
           
        </>


    );
};
