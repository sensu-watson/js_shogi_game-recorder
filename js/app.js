var app = (function(){
	var initModule = function($container){
		app.data.initModule();
		app.shell.initModule($container);
	};
	
	return {initModule : initModule};
}());