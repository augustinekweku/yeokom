import { Col, Row } from "react-bootstrap";
import ImageViewerModal from "../ImageModal";
import { useReducer } from "react";

const images = [
  {
    width: 220,
    height: 374,
    largeURL: "/img/projects/Broad Hinton Swindon.png",
    thumbnailURL: "/img/projects/Broad Hinton Swindon.png",
    caption: "Broad Hinton Swindon",
  },
  {
    width: 320,
    height: 212,
    largeURL: "/img/projects/Haydon Wick Swindon.png",
    thumbnailURL: "/img/projects/Haydon Wick Swindon.png",
    caption: "Haydon Wick Swindon",
  },
];

type State = {
  showImageModal: boolean;
  imageUrl: string;
  imageCaption: string;
};
const CivilEngineering = () => {
  const [state, updateState] = useReducer(
    (state: State, newState: Partial<State>) => {
      return { ...state, ...newState };
    },
    {
      showImageModal: false,
      imageUrl: "",
      imageCaption: "",
    }
  );
  return (
    <div>
      <ImageViewerModal
        show={state.showImageModal}
        imgUrl={state.imageUrl}
        caption={state.imageCaption}
        handleClose={() => {
          updateState({ showImageModal: false });
        }}
      />
      <Row className="image-gallery">
        {images.map((img, index) => (
          <Col key={index} xs={12} md={6} className="mb-4">
            <div className="img-container">
              <button
                onClick={() => {
                  updateState({
                    showImageModal: true,
                    imageUrl: img.largeURL,
                    imageCaption: img.caption,
                  });
                }}
                className="w-100"
              >
                <img
                  src={img.thumbnailURL}
                  className="img-fluid"
                  alt={`Image ${index + 1}`}
                />
              </button>
              <p>{img.caption}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CivilEngineering;
