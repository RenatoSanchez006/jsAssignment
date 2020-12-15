import React, { useState } from "react";
import ReactDOM from "react-dom";
import InputSearch from "./components/inputSearch";
import Map from "./components/map";
import { Typography, Container } from "@material-ui/core";

const PLACE_URL = "https://nominatim.openstreetmap.org/?format=json&limit=1";
const QUAKES_URL =
  "https://api.geonames.org/earthquakesJSON?username=rsanchez006&maxRows=10";

function App() {
  const [locationText, setLocationText] = useState("");
  const [quakes, setQuakes] = useState([]);
  const [country, setCountry] = useState({
    lat: 22,
    lon: -100,
  });

  const onInputChange = (event) => {
    setLocationText(event.target.value);
  };

  const onButtonClick = async () => {
    await fetch(`${PLACE_URL}&country="${locationText}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCountry(data[0]);
        getQuakes(data[0].boundingbox);
      })
      .catch((err) => {
        console.log(err);
        alert("Error");
      });
  };

  const getQuakes = async (bb) => {
    await fetch(
      `${QUAKES_URL}&south=${bb[0]}&north=${bb[1]}&west=${bb[2]}&east=${bb[3]}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setQuakes([...data.earthquakes]);
      })
      .catch((err) => {
        console.log(err);
        alert("Error quakes");
      });
  };

  function addMarkers(map, links) {
    links.forEach((link, index) => {
      new window.google.maps.Marker({
        map,
        position: { lat: link.lat, lng: link.lng },
        label: `${index + 1}`,
        title: link.datetime,
      });
    });
  }

  const mapProps = {
    options: {
      center: { lat: Number(country.lat), lng: Number(country.lon) },
      zoom: 4,
    },
    onMount: addMarkers,
    onMountProps: quakes,
  };

  return (
    <div>
      <Container fixed>
        <Typography variant="h3">Search earthquakes</Typography>
      </Container>
      <InputSearch
        onInputChange={onInputChange}
        onSearch={onButtonClick}
        locationText={locationText}
      />
      <div>
        <Map {...mapProps} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
