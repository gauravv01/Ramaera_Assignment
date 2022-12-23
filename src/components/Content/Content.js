import React from 'react';
import Group from './Group/Group';
import Service from './Service/Service';
import BoxImage from './BoxImage/BoxImage';
import Polygon_2 from '../../Data/img/Polygon_2.png';
import './Content.css';


function Content() {
  return (
    <div className='common-content'>
      <Group/>
      <Service/>
      <BoxImage src={Polygon_2} styles={{right:'0'}} parentstyle={{position:'relative'}}/>
    </div>
  )
}

export default Content
