app.data = (function(){
	// ----------モジュールスコープ変数開始----------
	var
		stateMap = {
			recordMapArray : null,
			tesuu          : null
		},
		
		getKifu, getTesuu, getPosition,
		setPosition, initModule;
	// ----------モジュールスコープ変数終了----------
	// ----------ユーティリティメソッド開始----------
	// ----------ユーティリティメソッド終了----------
	// ----------イベントハンドラ開始----------------
	// ----------イベントハンドラ終了----------------
	// ----------パブリップメソッド開始--------------
	// /getKifu/開始
	// 目的：アプリ内形式での棋譜の取得
	// 引数：無し
	// 戻り値 kifuArray;
	// 例外発行：なし
	getKifu = function(){
		var i,
			kifuArray = Array();
			tesuu = stateMap.tesuu;
		
		for (i = 0; i <= tesuu; i++){
			kifuArray[i] = stateMap.recordMapArray[i].kifu;
		}
		
		return kifuArray;
	}
	
	// /getTesuu/開始
	// 目的：現在の手数
	// 引数：無し
	// 戻り値 tesuu;
	// 例外発行：なし
	getTesuu = function(){
		var tesuu = stateMap.tesuu;
		
		return tesuu;
	}
	
	// /getPosition/開始
	// 目的：局面の取得
	// 引数：手数
	// 戻り値 recordMap;
	// 例外発行：なし
	getPosition = function(tesuu) {
		if (stateMap.recordMapArray[tesuu] != null){
			return $.extend(true, {}, stateMap.recordMapArray[tesuu]);
		}
		else {
			return null;
		}
	}
	
	// /setPosition/開始
	// 目的：局面の格納
	// 引数：recordMap
	// 戻り値 recordMap;
	// 例外発行：なし
	setPosition = function(recordMap){
		var tesuu = recordMap.tesuu;
		
		if (stateMap.tesuu + 1 >= tesuu){
			stateMap.tesuu = tesuu;
			stateMap.recordMapArray[tesuu] = recordMap;
			
			return $.extend(true, {}, recordMap);
		}
		else {
			alert('Invalid Input at app.data.setPosition');
			return $.extend(true, {}, recordMap);
		}
	}
	
	// /initModule/開始
	// 目的：モジュールの初期化
	// 引数：なし
	// 戻り値 true;
	// 例外発行：なし
	initModule = function(){
		
		// stateMapを初期化する。
		stateMap.recordMapArray = Array();
		stateMap.tesuu          = 0;
		
		// 初期局面を作成する
		stateMap.recordMapArray[stateMap.tesuu] = {
			board : [
				[0,0,0,0,0,0,0,0,0,0],
				[0,22,23,24,25,28,25,24,23,22],
				[0,0,26,0,0,0,0,0,27,0],
				[0,21,21,21,21,21,21,21,21,21],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,1,1,1,1,1,1,1,1,1],
				[0,0,7,0,0,0,0,0,6,0],
				[0,2,3,4,5,8,5,4,3,2],
			],
			ns_stand : [0,0,0,0,0,0,0],
			op_stand : [0,0,0,0,0,0,0],
			kifu  : 'START',
			tesuu : 0,
			teban : 1
		}
		
		return true;
	}
	// /initModule/終了
	
	
	return {
		initModule  : initModule,
		getKifu     : getKifu,
		getTesuu    : getTesuu,
		getPosition : getPosition,
		setPosition : setPosition
	};
	// ----------パブリップメソッド終了--------------
}());
