import Link from 'next/link'
import Layout from "../components/layout"
import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const RegularMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 35.437573, lng: 136.802758 }}
      defaultOptions={{
        scrollwheel: false
      }}
    >
      <Marker position={{ lat: 35.437573, lng: 136.802758  }} />
    </GoogleMap>
  ))
);



export default  function Access ({props}){
  console.log(props,"about")
  return (
    <Layout>
      <div>
        <h2>Accessコンポーネントですマジで</h2>
        <RegularMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCEZx_fNdrxgkE-uyTJi4JPvGoK_3G32Tc"
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
         
        
        <Link href="/">
              <a>← ホームへ戻る</a>
        </Link>
      </div>
    </Layout>
   
  )
}

