import React from 'react';
import './css/productCard.css';
import { ChevronUpOutline } from 'react-ionicons';

function productCard(logo, name, description, votes) {
    return (
        <div class="product">
            <img src={logo}/>
            <div class="block-1">
                <h2 class="title-product">{name}</h2>
                <p class="description">{description}</p>
            </div>
            <div class="block-2">
                <button>
                <ChevronUpOutline
                color={'#00000'} 
                height="25px"
                width="25px"
                /></button>
                <p>{votes}</p>
            </div>       
        </div>
    );
}

export default productCard;