/**
 * @format
 */

import {AppRegistry} from 'react-native';
import appMeta from './app.json';

AppRegistry.registerComponent(appMeta.name, () => {
  // We require the app's entrypoint here, so that the app's code is
  // evaluated after the call to AppRegistry.registerComponent() above.
  // This is because some libraries we load rely on some react native globals to
  // be present, and those globals are only available after the call to
  // AppRegistry.registerComponent() above.
  return require('./App.tsx').App;
});
