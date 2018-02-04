// Understand JSX
import buble from 'rollup-plugin-buble';

// compress output
// import uglify from 'rollup-plugin-uglify';

// Import code packaged in node modules
// import commonjs from 'rollup-plugin-commonjs';
// import resolve from 'rollup-plugin-node-resolve';

// rollup.config.js
export default [{
  input: 'src/main.jsx',
  output: {
    file: 'public/build/bundle.js',
    format: 'iife'
  },
  plugins: [ 
//  	resolve(),
//  	commonjs(),
  	buble({jsx: 'Inferno.createElement'})
  	// uglify() 
  ]
}];