import React from "react";

export default function ImageUserOwned(props) {
  const data = props.props;
  return data.complete.map((item, idx) => {
    return (
      <div className="row" key={idx}>
        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
          <div
            className="bg-image hover-overlay hover-zoom ripple rounded"
            data-mdb-ripple-color="light"
          >
            <a href={item["Image.pathOrigin"]} download>
              <img
                src={item["Image.pathWatermark"]}
                alt="W3Schools"
                className="w-100"
              />
            </a>

            <a href="#!">
              <div
                className="mask"
                style={{
                  backgroundColor: "rgba(251, 251, 251, 0.2)",
                }}
              />
            </a>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
          <p>
            <strong>{item["Image.name"]}</strong>
          </p>
          <p>Artist: {item["User.firstName"]}</p>
          <strong>Ordered On</strong>
          <p>{item.createdAt}</p>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <p className="text-start text-md-center">
            <strong>{item.price}฿</strong>
          </p>
        </div>
        <hr className="my-4" />
      </div>
    );
  });
}
