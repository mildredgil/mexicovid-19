import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MapContext } from '../contexts/MapContext';
import CustomizedSlider from './Slider';

const Map = ({classes}) => {
    const {stateMap, mapRef} = React.useContext(MapContext);
    const {lat, lng, zoom} = stateMap;
    
    return (
        <div>
          <div className={classes.sidebarStyle}>
            <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
            <CustomizedSlider/>
          </div>
          <div ref={mapRef} className={classes.mapContainer} />
        </div>
      );
}

const styles = () => ({
    map: {
      height: '85vh !important'
    },

    sidebarStyle: {
        display: 'inline-block',
        position: 'absolute',
        top: '0',
        left: '0',
        margin: '12px',
        backgroundColor: '#404040',
        color: '#ffffff',
        zIndex: '1 !important',
        padding: '6px',
        fontWeight: 'bold',
    },
        
    mapContainer: {
        position: 'absolute',
        top: '0',
        right: '0',
        left: '0',
        bottom: '0',
    }
  });
   
  export default withStyles(styles)(Map);