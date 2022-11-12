import React from  'react'
export default function(news){
    return (
        <div className='main-container'>
            <img className='image' src={news.img}  />
            <div className='content' >
                <div className='location'>
                <img src="/location.png" className='location--img'/>
                <h4>{news.location}</h4> <span> view on google map</span>
                </div>

               {news.title && <h2 className='title'>Heading : {news.title}</h2>}
                <p>{news.Desc}</p>
            </div>
        </div>
    )
}