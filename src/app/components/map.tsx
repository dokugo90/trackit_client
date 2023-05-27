import { GoogleMap, LoadScript, useLoadScript, Marker, InfoWindow, Autocomplete } from '@react-google-maps/api';
//import GoogleAutoComplete from 'react-google-autocomplete';
import { CSSProperties, SetStateAction, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useAppContext } from '../utils/context';

type MapOptions = google.maps.MapOptions;
type LatLngLiteral = google.maps.LatLngLiteral;

//const { Point } = google.maps;

export default function Map() {
 
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ['places']
  });
  const center = useMemo<LatLngLiteral>(() => ({
    lat: -25.363,
    lng: 131.044
  }), []);
  const options = useMemo<MapOptions>(() => ({
    mapId: "3816453d6cadea35",
    disableDefaultUI: true,
    clickableIcons: false
  }), []);

  const onLoad = useCallback((map: any) => {
   
  }, []);

  const containerStyle: CSSProperties | undefined = {
    width: '100%',
    height: '100vh',
    borderRadius: '25px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
  };



  if (!isLoaded) return <></>;

  return (
    <>
      <GoogleMap
        onLoad={onLoad}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={options}
        
      >

      </GoogleMap>
    </>
  );
}
