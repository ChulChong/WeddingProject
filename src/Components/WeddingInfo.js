import { React } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import { useMediaQuery } from "react-responsive";
import "./WeddingInfo.css";

export const WeddingInfo = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  function Map() {
    return (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 34.52409, lng: -84.05213 }}
      >
        <Marker key={1} position={{ lat: 34.52409, lng: -84.05213 }}></Marker>
      </GoogleMap>
    );
  }

  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <div>
      {isDesktopOrLaptop && (
        <div className="weddinginfo">
          <div className="ceremony">
            <h1
              className="title"
              style={{ fontFamily: "JesofinSans", fontSize: "3rem" }}
            >
              Ceremony
            </h1>
            <div className="time">4:00 PM, Jan 21st, 2023</div>
            <div className="nameofaddress">Juliette Chapel</div>
            <div className="address">497 Hwy 52 West, Dahlonega, GA 30533</div>
            <div className="message">
              Please arrive 15 minutes before ceremony commences to allow time
              for greeting and seatings.
            </div>
            <div className="reception">
              <h1
                className="title"
                style={{ fontFamily: "JesofinSans", fontSize: "3rem" }}
              >
                Reception
              </h1>
              <div className="time">5:00 PM, Jan 21st, 2023</div>
              <div style={{ marginBottom: 50 }}>
                Reception location will be the same.
              </div>
            </div>
            <div className="map" style={{ marginBottom: 50 }}>
              <WrappedMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&
            libraries=geometry,drawing,places&key=AIzaSyCUb-mCFuZbZYh9CLr0xuJM-PLEhdzdQD4"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
            <div className="footer">
              <div>Copyright© 2022 Chul Chong</div>
              <div>Designed by Hannah Bae</div>
            </div>
          </div>
        </div>
      )}
      {isTabletOrMobile && (
        <div className="weddinginfoMobile">
          <div className="ceremonyMobile">
            <h1
              className="titleMobile"
              style={{ fontFamily: "JesofinSans", fontSize: "1.3rem" }}
            >
              Ceremony
            </h1>
            <div className="timeMobile">4:00 PM, Jan 21st, 2023</div>
            <div className="timeMobile">Juliette Chapel</div>
            <div className="timeMobile">
              497 Hwy 52 West, Dahlonega, GA 30533
            </div>
            <div className="messageMobile">
              Please arrive 15 minutes before ceremony commences to allow time
              for greeting and seatings.
            </div>
            <div className="receptionMobile">
              <h1
                className="titleMobile"
                style={{ fontFamily: "JesofinSans", fontSize: "1.3rem" }}
              >
                Reception
              </h1>
              <div className="timeMobile">5:00 PM, Jan 21st, 2023</div>
              <div style={{ marginBottom: 10 }} className="timeMobile">
                Reception location will be the same.
              </div>
            </div>
            <div className="mapMobile" style={{ marginBottom: 20 }}>
              <WrappedMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&
            libraries=geometry,drawing,places&key=AIzaSyCUb-mCFuZbZYh9CLr0xuJM-PLEhdzdQD4"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
            <div className="footermobile">
              <div>Copyright© 2022 Chul Chong</div>
              <div>Designed by Hannah Bae</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default WeddingInfo;
