import React, {useState, useEffect} from "react";
import { API_URL, CLOUDINARY_NAME, AccessHeader } from "../../utils/api";
import Swal from "sweetalert2";
import { Image } from "cloudinary-react";
import { Modal, Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../application/selectors/images";
import { putImages } from "../../application/actions/images";
import { pageLoaded } from "../../application/actions/ui";
import { getLoading } from "../../application/selectors/ui";


export default function HomeImages() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const dispatch = useDispatch();
  const images = useSelector(getImages);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(pageLoaded);
  }, [dispatch]);

  return (
    <>
      {loading ? (
        "Loading  images..."
        ) : (
          
          <div className="gallery">
          {images.map((image, index) => (
            <Image
              key={index}
              cloudName={CLOUDINARY_NAME}
              alt={image}
              publicId={image}
              width="200"
              height="200"
              crop="scale"
              //  onClick={handleOnImageClick}
            />
          ))}
        </div>
      )}
    </>
  );
}
