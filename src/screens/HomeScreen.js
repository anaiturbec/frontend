import React, {useState} from 'react';
import "./css/Home.css";
import Modal from 'react-modal';
import {useNavigate}from 'react-router-dom';
import axios from 'axios';


function HomeScreen(props) {
    //modal states
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible2, setModalVisible2] = useState(false);
    const [isModalVisible3, setModalVisible3] = useState(false);
    
    //user states sign up
    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');

    //user states sign in
    const [passwordSI, setPasswordSI] = useState('');
    const [emailSI, setEmailSI] = useState(''); 
   
    //product states
    const [pname, setpName] = useState('');
    const [logo, setLogo] = useState(''); 
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const votes = 0;

    //rnavigation in between routes
    const navigate = useNavigate();


    //modal # 1 sign in
    const toggleModal = () =>{
        setModalVisible(!isModalVisible);
    };

    //modal # 2 sign up
    const toggleModal2 = () =>{
        setModalVisible2(!isModalVisible2);
    };

    // modal # 3 register product
    const toggleModal3 = () =>{
        setModalVisible3(!isModalVisible3);
    };


    //inserts user data into the database
    const submitSignUp = async() =>{
        const body = { name, email, password};
        const {response} = await axios.post('https://backendph2.herokuapp.com/users/signup', body, {
            headers: {'content-type': 'application/json' }
        });
        console.log(response);
        navigate('/vote');
    };

    //inserts product data into the database
    const submitProduct = async() =>{
        const body = { pname, logo, description, link, votes};
        const {response} = await axios.post('https://backendph2.herokuapp.com/products/register', body, {
            headers: {'content-type': 'application/json' }
        });
        console.log(response);
        alert('Producto agregado exitosamente!');
        toggleModal3();
    };


    //verifies user password and id is valid in database
    const submitSignIn = async() =>{
        const body = { emailSI, passwordSI};
        const {response} = await axios.post('https://backendph2.herokuapp.com/users/signin', body, {
            headers: {'content-type': 'application/json' }
        });
        console.log(response);
        navigate('/vote');
    };

    
    //modal # 1 styles
    const customStyles = {
        content: {
            height: 500,
            width: 500,
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: 15
        },
    };

    //modal # 2 & 3 styles
    const customStyles2 = {
        content: {
            height: 300,
            width: 500,
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: 15
        },
    };


    return (
        <div class="main">
            <div class="nav">
                <img src={require("../logo.png")} class="logo"/> 
                <div class="links">
                    <button class="sibtn"onClick={()=> toggleModal()}>Sign In</button>
                    <button class="subtn" onClick={()=> toggleModal2()}>Sign Up</button>
                </div>
            </div> 
            <Modal isOpen={isModalVisible} class = "modal" style={customStyles2}>
                <button class="modalbtn" onClick={toggleModal}>X</button>
                <input type="text" placeholder="Email" value={emailSI} onChange={e=> setEmailSI(e.target.value)}/>
                <input type="text" placeholder="Contraseña"value={passwordSI} onChange={e=> setPasswordSI(e.target.value)}/>
                <button class="btn" onClick={() => submitSignIn()}>Sign In</button>

            </Modal>
            <Modal isOpen={isModalVisible2} class = "modal" style={customStyles}>
                <button class="modalbtn" onClick={toggleModal2}>X</button>
                <input type="text" placeholder="Nombre Completo" value={name} onChange={e=> setName(e.target.value)}/>
                <input type="text" placeholder="Email" value={email} onChange={e=> setEmail(e.target.value)}/>
                <input type="text" placeholder="Contraseña" value={password} onChange={e=> setPassword(e.target.value)}/>
                <input type="text" placeholder="Confirmar Contraseña"/>
                <button class="btn" onClick={()=>submitSignUp()}>Sign Up</button>

            </Modal>
            <div class="box-2">
                <div class="box-2-text">
                    <h2>Descubre los últimos</h2>
                    <h2>productos en el</h2>
                    <h2>mercado!</h2>
                </div>
                <img src={require("../img1.png")} class="logo"/> 
            </div>
            <div class="colored-box">
                <img src={require('../placeholder.png')}/>
                <div class="text">
                    <p class="tittle">Producto del Día</p>
                    <h6>WarWordly</h6>
                    <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu fermentum orci. </p>
                </div>
            </div>
            <div class="box-3">
                <div class="box-3-text">
                    <h1>¡Registra tu</h1>
                    <h1>emprendimiento</h1>
                    <h1>para promover</h1>
                    <h1>tu producto!</h1>
                    <button onClick={()=> toggleModal3()}>Registrar</button>
                </div>
                <img src={require('../img2.png')}/>
                
            </div> 
            <Modal isOpen={isModalVisible3} class = "modal" style={customStyles}>
                <button class="modalbtn" onClick={toggleModal3}>X</button>
                <input type="text" placeholder="Nombre del Emprendimiento" value={pname} onChange={e=> setpName(e.target.value)}/>
                <input type="text"  placeholder="link de su página web" value={link} onChange={e=> setLink(e.target.value)}/>
                <textarea type="text" placeholder="descripción" cols="54" rows={5}  value={description} onChange={e=> setDescription(e.target.value)}/>
                <input id="upload" type="file" id="myFile" name="filename"  value={logo} onChange={e=> setLogo(e.target.value)}/>
                <button class="btn" onClick={()=>submitProduct()}>Submit</button>

            </Modal>
        </div>
    );
}

export default HomeScreen;
