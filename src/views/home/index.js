import React, { useState, useEffect } from "react";
import { CLOUDINARY_NAME } from "../../infrastructure/services/api/config";
import { Image, Transformation } from "cloudinary-react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getImages, getModalImages } from "../../application/selectors/images";
import { getImageById } from "../../application/actions/images";
import { pageLoaded } from "../../application/actions/ui";
import { getLoading } from "../../application/selectors/ui";
import Layout from "../components/Layout";
import Banner from "./Banner";
import { userOrder } from "../../application/actions/orders";

function Home() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleOrder = () => {
    dispatch(userOrder(ModalImageData.id))
    setShow(false)
  };

  const images = useSelector(getImages);
  const loading = useSelector(getLoading);
  const ModalImageData = useSelector(getModalImages);

  const handleOnImageClick = async (event) => {
    setShow(true);
    dispatch(getImageById(event.target.alt));
  };

  useEffect(() => {
    setShow(false);
    dispatch(pageLoaded);
  }, [dispatch]);

  const ImagesSection = (
    <>
      {loading ? (
        "Loading  images..."
      ) : (
        <>
          <div className="gallery">
            {images.map((image, index) => (
              <Image
                key={index}
                cloudName={CLOUDINARY_NAME}
                alt={image.id}
                publicId={image.publicId}
                crop="scale"
                onClick={(e)=>{handleOnImageClick(e)}}
              >
                <Transformation
                  crop="scale"
                  width="300"
                  height="200"
                  dpr="auto"
                  responsive_placeholder="blank"
                />
              </Image>
            ))}
          </div>

          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>
                ภาพ:{ModalImageData && ModalImageData.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={ModalImageData && ModalImageData.pathWatermark}
                width="200px"
                height="200px"
              />
              <h6>
                เจ้าของภาพ :{" "}
                <span>{ModalImageData && ModalImageData.owner}</span>
              </h6>
              <h6>
                ราคา : <span>{ModalImageData && ModalImageData.price}</span>
              </h6>
              <h6>
                รายละเอียด :{" "}
                <span>{ModalImageData && ModalImageData.detail}</span>
              </h6>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                ปิด
              </Button>
              <Button variant="primary" type="submit" onClick={handleOrder}>
                สั่งซื้อ
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
  return (
    <Layout>
      <Banner />
      {ImagesSection}
    </Layout>
  );
}

export default Home;
