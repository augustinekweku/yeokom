import { Col, Row } from "react-bootstrap";
import ImageViewerModal from "../ImageModal";
import { useReducer } from "react";

const images = [
  {
    imgUrl: "/img/projects/topography/Langford Topography.png",
    caption: "Langford, West Oxfordshire",
  },
  {
    imgUrl: "/img/projects/topography/Topography Swindon Wiltshire.png",
    caption: "Swindon, Wiltshire",
  },
];

type State = {
  showImageModal: boolean;
  imageUrl: string;
  imageCaption: string;
};
const TopographySurvey = () => {
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
                    imageUrl: img.imgUrl,
                    imageCaption: img.caption,
                  });
                }}
                className="w-100"
              >
                <img
                  src={img.imgUrl}
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

export default TopographySurvey;
