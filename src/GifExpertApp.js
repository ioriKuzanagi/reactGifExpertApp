import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGird } from './components/GifGird'

export const GifExpertApp = () => {
    const serie = 'Kimetsu no Yaiba';
    const [categories, setCategories] = useState(['One Punch']);
    /*     const handleAdd = () => {                                                                        //// setCategories puede tener una FCB           
            //setCategories(cats => [...cats, serie]);                                                   //cats=> asi se llama la FCB    
            setCategories([serie, ...categories]);                                                       // Se usa el operador SPRED (...)
            //setCategories([...categories, serie]);                                                       // Se agrega Al FINAL del la LISTA.
        } */


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>{
                categories.map(category =>
                    //return <li key={category}>{category}</li>
                    <GifGird
                        key={category}
                        category={category}


                    />

                )
            }
            </ol>
        </>

    );



}