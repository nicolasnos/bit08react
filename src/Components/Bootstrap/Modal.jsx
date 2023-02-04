import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function bModal({ bName, setList }) {
  const renameBone = () => {
    console.log(bName);
  };
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Cambia el nombre del hueso</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input type="text" onClick={renameBone} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Cerrar</Button>
          <Button variant="primary">Guardar cambios</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default bModal;
