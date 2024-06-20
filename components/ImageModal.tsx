import React from "react";
import { Modal, Button } from "react-bootstrap";

interface ImageViewerModalProps {
  show: boolean;
  handleClose: () => void;
  imgUrl: string;
  caption?: string;
}

const ImageViewerModal: React.FC<ImageViewerModalProps> = ({
  show,
  handleClose,
  imgUrl,
  caption,
}) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{caption}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={imgUrl} alt="Modal Image" style={{ width: "100%" }} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageViewerModal;
