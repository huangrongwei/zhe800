require.config({
	paths:{
		'jq':'../lib/jquery-3.2.1',
		'common':'../lib/common',
		'list':'list'
	},
	shim:{
		'list':['jq']
	}
});


requirejs(['common','list'],function(){

});