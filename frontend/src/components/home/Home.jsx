import React from 'react';
import {Link} from "react-router-dom"
// import SimpleBottomNavigation from './Footer'
import CenteredGrid from './Grid';


export default function App() {
  return (
    <Link to="/">
    <CenteredGrid/>
    {/* <SimpleBottomNavigation/> */}
    </Link>
  
  );
}