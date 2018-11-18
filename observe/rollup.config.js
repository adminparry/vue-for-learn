import babel from 'rollup-plugin-babel';

export default {
	input:'src/main.js',
	output:{
		file:'build/bundle.js',
		format:'umd',
		name: 'observe',
		indent: '\t'
	},
	plugins:[
		 babel({
	      exclude: 'node_modules/**' // 只编译我们的源代码
	    }),
	]
}