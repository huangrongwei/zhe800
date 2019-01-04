require.config({
	paths:{
		'jq':'../lib/jquery-3.2.1',
		'common':'../lib/common',
		'reg':'reg'
	},
	shim:{
		'reg':['jq']
	}
});


requirejs(['common','reg'],function(){

});