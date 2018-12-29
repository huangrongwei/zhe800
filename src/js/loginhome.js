require.config({
	paths:{
		'jq':'../lib/jquery-3.2.1',
		'common':'../lib/common',
		'lg':'login'
	},
	shim:{
		'lg':['jq']
	}
});


requirejs(['common','lg'],function(){

});