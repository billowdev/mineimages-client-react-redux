import React from "react";

export default function Images() {
  const imageUserOwned = () => {
    return imageOwned.map((item) => {
      return (
        <div className="row">
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
  };

  return (
    <Tabs
      defaultActiveKey="posts"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="posts" title="Posts">
        <div className="App-grid">
          <div class="py-4 px-4">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <h5 class="mb-0">Recent photos</h5>
              <a href="#" class="btn btn-link text-muted">
                Show all
              </a>
            </div>
            <div class="App-grid">
              <ImageItem thumbnaiUrl="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              <ImageItem thumbnaiUrl="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              <ImageItem thumbnaiUrl="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              <ImageItem thumbnaiUrl="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </div>
          </div>
          <div class="py-4 px-4">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <h5 class="mb-0">Recent photos</h5>
              <a href="#" class="btn btn-link text-muted">
                Show all
              </a>
            </div>
            <div class="App-grid">
              <ImageItem thumbnaiUrl="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              <ImageItem thumbnaiUrl="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              <ImageItem thumbnaiUrl="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              <ImageItem thumbnaiUrl="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="history" title="History">
        <div>
          <section className="h-100 gradient-custom">
            <div className="container py-5">
              <div className="row d-flex justify-content-center my-4">
                <div className="col-md-8">
                  <div className="card mb-4">
                    <div className="card-header py-3">
                      <h5 className="mb-0">Order History</h5>
                    </div>
                    <div className="card-body">
                      {imageOwned != [] ? (
                        imageUserOwned()
                      ) : (
                        <p className="mt-3 mb-3">Have no your image</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Tab>
    </Tabs>
  );
}
