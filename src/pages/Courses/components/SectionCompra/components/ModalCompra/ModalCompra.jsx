import {useState, useCallback} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './ModalStyle.css';

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

export default function ModalCompra({price}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(() => {
    setCopied(true);
  }, [])
  return (
    <div>
      <Button className='btn' onClick={handleOpen}><span className='model-btn-text'>Ver los medios de pago</span></Button>
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
            <h3>Medios de pago del Curso</h3>
            <p>Podés pagar tus compras con cualquiera de estos medios. Es rápido y seguro, siempre.</p>
          </div>
          <div className="modal-pagos">
            <h4>Tarjetas de crédito y débito <i className="fas fa-credit-card"></i></h4>
            <p>Se aplicará un recargo.</p>
          </div>
          <div className="modal-pagos">
            <h4>Efectivo <i className="fas fa-money-bill"></i></h4>
            <p>Abonar el 10% del valor del curso para guardar la vacante.</p>
          </div>
          <div className="modal-pagos">
            <h4>Transferencia (10% recargo) <i className="fas fa-exchange-alt"></i></h4>
            <p>Se abona el primer día de clases el total del curso.</p>
          </div>
          <div className="modal-pagos">
            <h4>Cuotas por Mercado Pago <i className="fab fa-cc-visa"></i></h4>
            <p>Serán 2 cuotas de {price} y se cobrarán los días 6 de cada mes.</p>
          </div>
          <div className="modal-pagos">
            <h4>Creditos o Débito <i className="fas fa-credit-card"></i></h4>
            <p>Se cobrará el total + los intereses que genere Mercado Pago.</p>
          </div>
          <div className="modal-pagos">

            <h4>Datos de Transferencia <i className="fas fa-university"></i></h4>
            <span>Milton Lautaro Galvan</span>
            <CopyToClipboard text='0000003100084577050936' onCopy={onCopy}>
              <button className='modal-btn' title='Copiar al portapapeles'>CVU: 0000003100084577050936 <i className="fa fa-copy"></i> </button>
            </CopyToClipboard>
            <CopyToClipboard text='LG.REPARACIONES' onCopy={onCopy}>
              <button className='modal-btn' title='Copiar al portapapeles'>Alias: LG.REPARACIONES <i className="fa fa-copy"></i></button>
            </CopyToClipboard>
              {copied ? <p style={{color: 'green'}}>Copiado al portapapeles</p> : null}
          </div>
        </div>
      </Box>
      </Modal>
    </div>
  );
}
