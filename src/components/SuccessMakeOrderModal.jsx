import { Modal } from "react-bootstrap";

export default function SuccessMakeOrderModal(props) {
  return (
    <>
      <Modal {...props} size="lg" aria-labelledby="success-upload-post-modal" centered>
        <Modal.Body className="!tw-p-7">
          <p className="!tw-text-2xl !tw-text-center !tw-text-custom-success">You have successfully make order.</p>
        </Modal.Body>
      </Modal>
    </>
  );
}