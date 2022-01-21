import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { getGifs } from '../helpers/getGifs';
import { GifGirdItem } from './GifGirdItem';


export const GifGird = ({ category }) => {
    /*     const [images, setImages] = useState([]);           // Va hasta el TOP de la FF    
    
        useEffect(() => {                                   // este Hook asi solo se va a ejecurar 1 vez el codigo
            getGifs(category)                               // meth Importado desde ./Helpers 
                //.then(imgs=>setImages())                  // Funcion que su primer argumento es mandado como argumento dela => funcion setImages() 
                .then(setImages)                            // Factorizada
        }, [category]) */


    const { data: images, loading } = useFetchGifs(category);


    return (                                            //<></> Fragment sino Return solo devuelve 1 sola cosa.
        <>
            <h3>{category}</h3>

            {loading && <p className='animate__animated animate__flash'> Loading... </p>}


            <div className="card-gird">

                {
                    images.map(img => (
                        <GifGirdItem
                            key={img.id}
                            {...img}
                        />
                    ))

                }

            </div>


        </>
    )
}


