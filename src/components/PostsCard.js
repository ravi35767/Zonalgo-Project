import { FaBeer } from "react-icons/fa";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/middleWears/dataMiddleware";
import { useEffect } from "react";

function PostsCard() {
  const dispatch = useDispatch();
  // const items = useSelector(({ data }) => data.items);

  // console.log(items);

  useEffect(() => {
    console.log("app use effect");
    dispatch(getData());
  });
  return (
    <>
      <div className="cardContainer mt-3">
        <div className="container">
          <div className="row border p-3" style={{ borderRadius: 15 }}>
            {/* First */}
            <div className="col-md-2">
              <img
                src="https://d2573qu6qrjt8c.cloudfront.net/10FD4FE0A4EC487DA05C644BF421ACCA/10FD4FE0A4EC487DA05C644BF421ACCA.JPEG"
                alt="hotel image"
                height="190"
                width="160"
              />
            </div>
            {/* Second */}
            <div className="col-md-10">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <h3 style={{ marginRight: "350px" }}>
                  Sofitel Sydeny Darling Harbour
                </h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    textAlign: "end",
                  }}
                >
                  <Button
                    variant="contained"
                    style={{ marginRight: 5, borderRadius: 50 }}
                  >
                    5 STAR
                  </Button>
                  <Button variant="contained" style={{ borderRadius: 50 }}>
                    HOTELS
                  </Button>
                </div>
              </div>
              <hr />
              <p style={{ display: "flex" }}>
                24-hour front desk, 24-hour room service, Car rental desk,
                Coffee shop &nbsp;
                <a href="#">Show on Map</a>
              </p>
              <p style={{ display: "flex" }}>
                <span>
                  {" "}
                  <FaBeer color="blue" /> Airpot
                </span>
                <span>
                  {" "}
                  <FaBeer color="blue" /> Subways
                </span>
                <span>
                  {" "}
                  <FaBeer color="blue" /> Cruises
                </span>
                <span>
                  {" "}
                  <FaBeer color="blue" /> Rails
                </span>
              </p>
              <div className="row">
                <div
                  className="col-md-6"
                  style={{ display: "flex", textAlign: "initial" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                  provident nihil molestias doloremque esse assumenda.{" "}
                </div>
                <div
                  className="col-md-4"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <p>
                    CHECK-IN <br /> 10/08/2021
                  </p>
                  |
                  <p>
                    CHECK-OUT <br /> 10/08/2021
                  </p>
                  |
                  <p>
                    TIME
                    <br /> 10/08/2021
                  </p>
                </div>
                <div className="col-md-2 " style={{ marginTop: -80 }}>
                  <p>PRICE START FR:</p>
                  <h5>RS: 256000</h5>
                  <p>Taxes and fees included</p>
                  <button className="btn btn-primary">RESERVE</button>
                </div>
              </div>
            </div>
            {/* Third */}
          </div>
        </div>
      </div>
    </>
  );
}

export default PostsCard;
