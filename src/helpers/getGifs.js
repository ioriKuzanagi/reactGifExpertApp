import React from 'react';


export const getGifs = async (category) => {                                        //async await son Promise
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=BkIyoGnrvPGlLg3GPiJrRqtivPZ91boz`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {                              //FCB
        return {
            id: img.id,
            url: img.images?.downsized_medium.url,
            titleX: img.title
        }
    })
    console.log(gifs);
    return gifs;
}
