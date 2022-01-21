import React, { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
// CustomHook .... Cuando se use por 1ra vez useFetchGifs    
export const useFetchGifs = (category) => {                      // Se recibe (category ) como argumento del Hook
    //                                                                  
    const [state, setState] = useState({                         //  Este estado por defecto. state es un OBJ
        data: [],                                                //  state es un obj y tiene dentro a data=[] y loading=bool
        loading: true                                            //     
    })

    useEffect(() => {                                            //  Se hace el Efecto para que solo cambie cuando cambie la {category} de estado.          
        getGifs(category)                                        //  =>Promise Hace la peticion Fetch Api https en el componente getGifs                            
            .then(imgs => {                                      //  Obtiene la data de las imagenes.                                     

                setTimeout(() => {                               //  Se pone un delay intencional de 3000ms                                  
                    setState({                                   //  Metodo para cambiar el estado de { {state} } => OBJ                                                  
                        //  setState dispara una Reenderisacion en el componente GifGird. cargando load y las imagenes. 
                        data: imgs,                              //  Dt la instancia {{data}} en getGifs asignandole el return de la FCB de la Promise                                                
                        loading: false                           //  Cambia el bool                                                                   

                    });

                }, 3000)
            })
    }, [category]);                                              //  Se evealua el hook unicamente cuando { [category] } cambien de estado                                                                                           
    return state;                                                //  state es OBJ { data:[],load=true }


};
