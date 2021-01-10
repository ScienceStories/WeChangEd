import React from 'react';

import Footer from '../../Presentational/Footer';
import AppBarContainer from '../AppBar';

const AppLayout = ({ children, className }) => (
 <div>
   <AppBarContainer />
   <div className={className}>
     { children }
   </div>
   <Footer />
 </div>
);

export default AppLayout;
