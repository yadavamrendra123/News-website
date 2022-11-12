import React from 'react'
import News from './Components/News'
import NewsData from './NewsData'
import Meme from './Components/Meme'
import './css/index.css'
let news=NewsData.map(item=>{
    return (
        <News 
                {...item}
        />
    )
    
})

export default function(){
    return(

    <>
         <nav className='navbar'>
                <h2>My News</h2>
        </nav>
        {news} 
        

    </>
    )
}