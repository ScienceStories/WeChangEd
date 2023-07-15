import React from 'react';

import Footer from '../../Presentational/Footer';
import AppBarContainer from '../AppBar';

const AppLayout = ({ children, className }) => (
 <div>
   <AppBarContainer />
   <div className={className}>
     { children }
   </div>
    <div style={{ height: 150, width: '100%' }} />
   <Footer />
 </div>
);

export default AppLayout;
