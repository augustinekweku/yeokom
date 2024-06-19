import React, { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

const Projects = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "/img/projects/Broad Hinton Swindon.png",
    "/img/projects/Haydon Wick Swindon.png",
  ];

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div>
      <div
        style={{
          zIndex: 99,
        }}
        className="row justify-content-center gap-3 project-images"
      >
        <div className="col-12 col-lg-4">
          <div className="" onClick={() => openImageViewer(0)}>
            <img src="/img/projects/Broad Hinton Swindon.png" alt="" />
            <div className="">
              <p className="caption">Broad Hinton Swindon</p>
            </div>

            <p className="c">Broad Hinton Swindon</p>
          </div>
        </div>
        <div className="col-12 col-lg-4" onClick={() => openImageViewer(1)}>
          <img src="/img/projects/Haydon Wick Swindon.png" alt="" />
          <div className="">
            <p className="caption">Haydon Wick Swindon</p>
          </div>
        </div>
      </div>
      {isViewerOpen && (
        <div>
          <ImageViewer
            src={images}
            disableScroll={true}
            currentIndex={currentImage}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
