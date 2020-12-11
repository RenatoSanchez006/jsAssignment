import React, { useEffect, useRef, useState } from "react";
import { Container } from '@material-ui/core';

export default function Map({ options, onMount, className, onMountProps }) {
  const ref = useRef();
  const [map, setMap] = useState();
  useEffect(() => {
    const onLoad = () =>
      setMap(new window.google.maps.Map(ref.current, options));
    if (!window.google) {
      const script = document.createElement(`script`);
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC-WvSjRaa4wrDpHz7p2UH3yMp1F_n2K4Q`;
      document.head.append(script);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
  }, [options]);
  if (map && typeof onMount === `function`) onMount(map, onMountProps);
  return (
    <div>
      <Container fixed>
        <div
          style={{ height: `60vh`, margin: `1em 0`, borderRadius: `0.5em` }}
          {...{ ref, className }}
        />
      </Container>
    </div>
  );
}

Map.defaultProps = {
  options: {
    center: { lat: 22, lng: -100 },
    zoom: 4,
  },
};
