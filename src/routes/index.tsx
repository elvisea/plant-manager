import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './stack.routes';
import TabRoutes from './tab.routes';

const Routes = () => (
  <NavigationContainer>
    <AppRoutes />
    {/* <TabRoutes /> */}
  </NavigationContainer>
)

export default Routes;