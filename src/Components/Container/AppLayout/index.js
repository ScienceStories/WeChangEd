import React from 'react';

import Footer from '../../Presentational/Footer';
import Resources from '../../Presentational/Resources';
import AppBarContainer from '../AppBar';

const AppLayout = ({ children, className }) => (
 <div>
   <AppBarContainer />
   <div className={className}>
     { children }
   </div>
   <Resources />
   <Footer />
 </div>
);

export default AppLayout;
