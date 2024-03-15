import React from 'react'

function Cards(props) {
    return (
        <div className='parent-card'>
            <div class="card" id='card'>
                <img src={props.item.img} alt="Course Image"/>
                    <div class="content">
                        <h2>{props.item.title}</h2>
                        <p>{props.item.desc}</p>
                            <p id='price'>{props.item.price}</p>
                    </div>
            </div>
            <div className='hoverbar '>
                <h1>{props.item.title}</h1>
                <button className='signup-btn addtocart'>Add to Cart</button>
            </div>
        </div>
    )
}

export default Cards
