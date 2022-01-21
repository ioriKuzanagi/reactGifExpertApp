import React, { useState } from 'react'
//import { GifExpertApp } from '../GifExpertApp';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {                 // Dt la Props de la Funcion GifExpertApp.
    const [inputValue, setInputValue] = useState('');   // hook useState()


    const handleInputChange = (e) => {                  // e captura el EVENTO
        setInputValue(e.target.value);
    }


    const handleSubmit = (e) => {                       // e captura el EVENTO
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);           // operador Spret ...cats = Todas las demas de cats
            setInputValue('');
        }
    }


    return (
        <form onSubmit={handleSubmit}>              {/* // onSubmit    No refresca la Pagina para hacer las cosas... */}
            {/* <h1>{inputValue}</h1> */}
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}       //se va a disparar cada vez que el input cambie
            />
        </form>
    )


}
AddCategory.propTypes = {                       // F propTypes van hasta el Final del componente.
    setCategories: PropTypes.func.isRequired    // PropTypes se llama al paquete importado.         
}

