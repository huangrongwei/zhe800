require.config({
	paths:{
		'jq':'../lib/jquery-1.10.1.min',
		'common':'../lib/common',
		'reg':'register'
	},
	shim:{
		'reg':['jq']
	}
});


requirejs(['common','reg'],function(){

});