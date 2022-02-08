import React, {useEffect, useState} from 'react';
import "./css/Vote.css";
import { ChevronUpOutline } from 'react-ionicons';
import axios from 'axios';
import products from './products';
import ProductCard from '../components/productCard';

function VotingScreen(props) {

    const[items, setItems] = useState([]);
    const [random, setRandom] = useState('')

    //get product data on page reload
    useEffect( () =>{
        fetchItems();
        randomImg();
    },[])

    // function that supposedly gets product data (doesn't work)
    const fetchItems = async() =>{
        const items = await axios.get('https://frontend1-delta.vercel.app/products')
            setItems(items);
            console.log(items);
    }

    //selects a random product as product of the day 
    const randomImg = () =>{
        var a = []
        products.forEach(function(obj){
            a.push(obj.logo);
        })
        const random = a[Math.floor(Math.random() * a.length)];
        console.log(a);
        setRandom(random);
    }
    

    
   

    return (
        <div class="main">
            <div class="nav">
                <img src={require("../logo.png")}/>
            </div>
            <div class="body">
                <div class="horizontal-div">
                    <div class="title-div">
                        <h2 class="title">Vota por el mejor emprendimiento</h2>
                    </div>
                    <div class="product-div">
                        <img src={random}/>
                        <div class="product-text-div">
                            <h2>Producto</h2>
                            <h2>del Día</h2>
                        </div>
                    </div>
                </div>
                <div class="product-space">
                    {

                    products.map((item, i)=>{

                    return(
                        // <ProductCard 
                        // name={item.name} 
                        // logo={item.logo} 
                        // description={item.description} 
                        // votes={item.votes}/>
                    <div class="product">
                        <a href={item.link} target="_blank"><img  src={item.logo}/></a>
                        <div class="block-1">
                            <h2  class="title-product">{item.name}</h2>
                            <p  class="description">{item.description}</p>
                        </div>
                        <div class="block-2">
                            <button>
                            <ChevronUpOutline
                            color={'#00000'} 
                            height="25px"
                            width="25px"
                            /></button>
                            <p>{item.votes}</p>
                        </div>       
                    </div>
                    )
                    })

                }                   
                </div>
            </div>
            
            
        </div>
    );
}

export default VotingScreen;