app.shell = (function(){
	// ----------モジュールスコープ変数開始----------
	var
		configMap = {
			main_html : String()
				+ '<div class="app-shell-board"></div>'
				+ '<div class="app-shell-operate"></div>'
		},
		stateMap = {$container : null},
		jqueryMap = {},
		
		setJqueryMap, initModule;
	// ----------モジュールスコープ変数終了----------
	// ----------ユーティリティメソッド開始----------
	// ----------ユーティリティメソッド終了----------
	// ----------DOMメソッド開始---------------------
	// /setJqueryMap/開始
	setJqueryMap = function(){
		var $container = stateMap.$container;
		jqueryMap = {
			$container : $container,
			$board     : $container.find('.app-shell-board'),
			$operate   : $container.find('.app-shell-operate')
		};
	};
	// /setJqueryMap/終了
	// ----------DOMメソッド終了---------------------
	// ----------イベントハンドラ開始----------------
	// ----------イベントハンドラ終了----------------
	// ----------パブリップメソッド開始--------------
	// /initModule/開始
	// 目的：モジュールの初期化
	// 引数：
	//   $container この機能が使うjQuery要素
	// 戻り値 true;
	// 例外発行：なし
	initModule = function($container){
		// HTMLをロードし、jQueryコレクションをマッピング
		stateMap.$container = $container;
		$container.html(configMap.main_html);
		setJqueryMap();
		
		// 下層の機能モジュールを初期化
		app.board.initModule(jqueryMap.$board);
		app.operate.initModule(jqueryMap.$operate);
		
		return true;
	}
	// /initModule/終了
	
	
	return {initModule : initModule};
	// ----------パブリップメソッド終了--------------
}());