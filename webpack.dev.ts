import * as webpack from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common';
import 'webpack-dev-server';

const development: webpack.Configuration = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    client: {
      logging: 'verbose',
      progress: true,
    },
  },
  stats: {
    errorDetails: true,
  },
});

export default development;
