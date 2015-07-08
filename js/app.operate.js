app.operate = (function(){
	// ----------モジュールスコープ変数開始----------
	var
		configMap = {
			main_html : String()
				+ '<div class="app-operate-menu">'
					+ '<div class="app-operate-prev app-normalbutton">戻る</div>'
					+ '<div class="app-operate-next app-normalbutton">進む</div>'
					+ '<div class="app-operate-kifout app-normalbutton">kif出力</div>'
				+ '</div>'
				+ '<div class="app-operate-record">'
					+ '<ul class="app-operate-record-kif">'
						+ '<li>120、▲３八銀右不成</li>'
					+ '</ul>'
				+'</div>'
		},
		stateMap = {$container : null},
		jqueryMap = {},
		
		setJqueryMap, initModule;
	// ----------モジュールスコープ変数終了----------
	// ----------ユーティリティメソッド開始----------
	// /bindOperateButton/開始
	bindOperateButton = function(){
		
	}
	
	// ----------ユーティリティメソッド終了----------
	// ----------DOMメソッド開始---------------------
	// /setJqueryMap/開始
	setJqueryMap = function(){
		var
			$container = stateMap.$container,
			$operate_menu = $container.find('.app-operate-menu'),
			$menu_prev = $operate_menu.find('.app-operate-prev'),
			$menu_next = $operate_menu.find('.app-operate-next'),
			$menu_kifout = $operate_menu.find('.app-operate-kifout'),
			
			$operate_record = $container.find('.app-operate-record');
		
		
		jqueryMap = {
			$menu_prev   : $menu_prev,
			$menu_next   : $menu_next,
			$menu_kifout : $menu_kifout
		};
	};
	// /setJqueryMap/終了
	// ----------DOMメソッド終了---------------------
	// ----------イベントハンドラ開始----------------
	// /onClickPrevButton/開始
	onClickPrevButton = function(){
		var
			tesuu,
			recordMap;
		
		tesuu = app.data.getTesuu();
		recordMap = app.data.getPosition(tesuu - 1);
		app.board.reloadBoard(recordMap);
	}
	// /onClickPrevButton/終了
	
	// /onClickNextButton/開始
	onClickNextButton = function(){
		var
			tesuu,
			recordMap;
		
		tesuu = app.data.getTesuu();
		recordMap = app.data.getPosition(tesuu + 1);
		
		if (recordMap != null){
			app.board.reloadBoard(recordMap);
		}
		else {
			window.alert('最後の手です');
		}
	}
	// /onClickNextButton/終了
	
	// /onClickKifoutButton/開始
	
	
	// /onClickKifoutButton/終了
	
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
		
		jqueryMap.$menu_prev.click(onClickPrevButton);
		jqueryMap.$menu_next.click(onClickNextButton);
		
		return true;
	}
	// /initModule/終了
	
	
	return {initModule : initModule};
	// ----------パブリップメソッド終了--------------
}());