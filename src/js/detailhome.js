require.config({
	paths:{
		'jq':'../lib/jquery-1.10.1.min',
		'common':'../lib/common',
		'sliderimg':'../js/magnifier',
		'detail':'detail'
	},
	shim:{
		'sliderimg':['jq'],
		'detail':['jq'],
		'listpage':['jq']
	}
});


requirejs(['common','sliderimg','detail'],function(){

});