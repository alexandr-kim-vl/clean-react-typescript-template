import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common';

const production: webpack.Configuration = merge(common, {
  mode: 'production',
});

export default production;
