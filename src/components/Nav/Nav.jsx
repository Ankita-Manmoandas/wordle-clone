import React from "react";
import "./Nav.scss";

import { Menu,Help, BarChart, Settings} from '@material-ui/icons';

const Nav = () => {
  return <nav className="nav"> 
 <div className="nav_icons">
 <Menu /> 
 <Help />
 </div>
 <h2> Wordle</h2>
 <div className="nav_icons">
 <BarChart />
 <Settings />
 </div>







  </nav>
}

export default Nav;