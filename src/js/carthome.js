require.config({
	paths:{
		'jq':'../lib/jquery-1.10.1.min',
		'common':'../lib/common',
		'cart':'cart'
	},
	shim:{
		'cart':['jq']
	}
});


requirejs(['common','cart'],function(){

});