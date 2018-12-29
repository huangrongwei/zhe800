require.config({
	paths:{
		'jq':'../lib/jquery-3.2.1',
		'common':'../lib/common',
		'reg':'register'
	},
	shim:{
		'reg':['jq']
	}
});


requirejs(['common','reg'],function(){

});