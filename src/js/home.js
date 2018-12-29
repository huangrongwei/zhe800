require.config({
	paths:{
		'jq':'../lib/jquery-1.10.1.min',
		'common':'../lib/common',
		'sliderimg':'../lib/myfocus-2.0.4.min',
		'index':'index'
	},
	shim:{
		'sliderimg':['jq'],
		'index':['jq'],
		'listpage':['jq']
	}
});


requirejs(['common','sliderimg','index'],function(){

});