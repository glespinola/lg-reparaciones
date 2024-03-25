import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import './ModalFechaStyle.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  zIndex: 9999
};

export default function ModalFecha({normal, intensiva}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button className='btn' onClick={handleOpen}><span className='model-btn-text'>Ver las proximas fechas</span></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
        <span onClick={handleClose} className='modal-span'><i className="fas fa-times"></i></span>
        <div className="modal-container">
          <div className="modal-contenido">
            <h3>Fechas de los Cursos</h3>
            <p>Descubre las dos modalidades de nuestra academia: la <strong>intensiva</strong>, que ofrece cuatro clases de tres horas cada una durante una semana, y la modalidad <strong>normal</strong>, con una clase semanal de tres horas.</p>
          </div>
          <div className="modal-fechas">
            <h4>Modalidad Normal <i className="fa fa-mug-hot"></i></h4>
            {normal}
            {/* <p>Sabado 6/4 a 27/4 de 13:00hs a 16:00hs o de 17:00hs a 20:00hs.</p> */}
          </div>
          <div className="modal-fechas">
            <h4>Modalidad Intensiva <i className="fa fa-bolt"></i></h4>
            <p>{intensiva}</p>
            {/* <p>Lunes 1/4 a Jueves 4/4 de 19:00 a 22:00hs.</p> */}
          </div>
        </div>
      </Box>
      </Modal>
    </div>
  );
}
