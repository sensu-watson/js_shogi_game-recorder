app.board = (function(){
	// ----------モジュールスコープ変数開始----------
	var
		configMap = {
			main_html : String()
				+ '<div class="app-board">'
					+ '<div class="app-board-opposite_move">後手</div>'
					+ '<div class="app-board-opposite_stand">'
						+ '<div class="app-stand-piece app-piece-pawn app-stand-reverse app-x-reverse"></div>'
							+ '<div class="space-stand"></div>'
						+ '<div class="app-stand-piece app-piece-lance app-stand-reverse app-x-reverse"></div>'
							+ '<div class="space-stand"></div>'
						+ '<div class="app-stand-piece app-piece-knight app-stand-reverse app-x-reverse"></div>'
							+ '<div class="space-stand"></div>'
						+ '<div class="app-stand-piece app-piece-silver app-stand-reverse app-x-reverse"></div>'
							+ '<div class="space-stand"></div>'
						+ '<div class="app-stand-piece app-piece-gold app-stand-reverse app-x-reverse"></div>'
							+ '<div class="space-stand"></div>'
						+ '<div class="app-stand-piece app-piece-bishop app-stand-reverse app-x-reverse"></div>'
							+ '<div class="space-stand"></div>'
						+ '<div class="app-stand-piece app-piece-rook app-stand-reverse app-x-reverse"></div>'
					+ '</div>'
					+ '<div class="app-board-feel">'
						+ '<div class="app-pieces">'
							+ '<div class="app-piece app-piece-pawn app-x-reverse"></div>'
							+ '<div class="app-piece app-piece-lance app-x-reverse"></div>'
							+ '<div class="app-piece app-piece-knight app-x-reverse"></div>'
							+ '<div class="app-piece app-piece-silver app-x-reverse"></div>'
							+ '<div class="app-piece app-piece-gold app-x-reverse"></div>'
							+ '<div class="app-piece app-piece-bishop app-x-reverse"></div>'
							+ '<div class="app-piece app-piece-rook app-x-reverse"></div>'
							+ '<div class="app-piece app-piece-king app-x-reverse"></div>'
							+ '<div class="app-piece app-piece-p_pawn app-x-reverse"></div>'
							+ '<div class="app-piece app-piece-p_lance app-x-reverse"></div>'
							+ '<div class="app-piece app-piece-p_knight app-x-reverse"></div>'
							+ '<div class="app-piece app-piece-p_silver app-x-reverse"></div>'
							+ '<div class="app-piece app-piece-p_bishop app-x-reverse"></div>'
							+ '<div class="app-piece app-piece-p_rook app-x-reverse"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece app-piece-pawn"></div>'
							+ '<div class="app-piece app-piece-lance"></div>'
							+ '<div class="app-piece app-piece-knight"></div>'
							+ '<div class="app-piece app-piece-silver"></div>'
							+ '<div class="app-piece app-piece-gold"></div>'
							+ '<div class="app-piece app-piece-bishop"></div>'
							+ '<div class="app-piece app-piece-rook"></div>'
							+ '<div class="app-piece app-piece-king"></div>'
							+ '<div class="app-piece app-piece-p_pawn"></div>'
							+ '<div class="app-piece app-piece-p_lance"></div>'
							+ '<div class="app-piece app-piece-p_knight"></div>'
							+ '<div class="app-piece app-piece-p_silver"></div>'
							+ '<div class="app-piece app-piece-p_bishop"></div>'
							+ '<div class="app-piece app-piece-p_rook"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
							+ '<div class="app-piece"></div>'
						+ '</div>'
					+ '</div>'
					+ '<div class="app-board-near_stand">'
						+ '<div class="app-stand-piece app-piece-pawn"></div>'
							+ '<div class="space-stand"></div>'
						+ '<div class="app-stand-piece app-piece-lance"></div>'
							+ '<div class="space-stand"></div>'
						+ '<div class="app-stand-piece app-piece-knight"></div>'
							+ '<div class="space-stand"></div>'
						+ '<div class="app-stand-piece app-piece-silver"></div>'
							+ '<div class="space-stand"></div>'
						+ '<div class="app-stand-piece app-piece-gold"></div>'
							+ '<div class="space-stand"></div>'
						+ '<div class="app-stand-piece app-piece-bishop"></div>'
							+ '<div class="space-stand"></div>'
						+ '<div class="app-stand-piece app-piece-rook"></div>'
							+ '<div class="space-stand"></div>'
					+ '</div>'
					+ '<div class="app-board-near_move">先手</div>'
				+ '</div>',
			piece_number : {
					NONE        : 0,
					NE_PAWN     : 1,
					NE_LANCE    : 2,
					NE_KNIGHT   : 3,
					NE_SILVER   : 4,
					NE_GOLD     : 5,
					NE_BISHOP   : 6,
					NE_ROOK     : 7,
					NE_KING     : 8,
					NE_P_PAWN   : 9,
					NE_P_LANCE  : 10,
					NE_P_KNIGHT : 11,
					NE_P_SILVER : 12,
					NE_P_BISHOP : 14,
					NE_P_ROOK   : 15,
					OP_PAWN     : 21,
					OP_LANCE    : 22,
					OP_KNIGHT   : 23,
					OP_SILVER   : 24,
					OP_GOLD     : 25,
					OP_BISHOP   : 26,
					OP_ROOK     : 27,
					OP_KING     : 28,
					OP_P_PAWN   : 29,
					OP_P_LANCE  : 30,
					OP_P_KNIGHT : 31,
					OP_P_SILVER : 32,
					OP_P_BISHOP : 34,
					OP_P_ROOK   : 35
				}
		},
		stateMap = {
			$container      : null,
			$selected_piece : null,
			select_number   : -1,
			select_stand    : false,
			recordMap       : null
		},
		jqueryMap = {},
		
		setJqueryMap, initModule;
	// ----------モジュールスコープ変数終了----------
	// ----------ユーティリティメソッド開始----------
	// /bindClickPiece/開始
	bindClickPiece = function(){
		for (var i = 0; i < 9; i++){
			for (var j = 0; j < 9; j++){
				jqueryMap.$piece[i][j].click(onClickPiece);
			}
		}
		
		jqueryMap.$opposite_pawn.click(onClickStandPiece);
		jqueryMap.$opposite_lance.click(onClickStandPiece);
		jqueryMap.$opposite_knight.click(onClickStandPiece);
		jqueryMap.$opposite_silver.click(onClickStandPiece);
		jqueryMap.$opposite_gold.click(onClickStandPiece);
		jqueryMap.$opposite_bishop.click(onClickStandPiece);
		jqueryMap.$opposite_rook.click(onClickStandPiece);
		
		jqueryMap.$near_pawn.click(onClickStandPiece);
		jqueryMap.$near_lance.click(onClickStandPiece);
		jqueryMap.$near_knight.click(onClickStandPiece);
		jqueryMap.$near_silver.click(onClickStandPiece);
		jqueryMap.$near_gold.click(onClickStandPiece);
		jqueryMap.$near_bishop.click(onClickStandPiece);
		jqueryMap.$near_rook.click(onClickStandPiece);
	}
	// /bindClickPiece/終了
	
	// /unbindClickPiece/開始
	unbindClickPiece = function(){
		for (var i = 0; i < 9; i++){
			for (var j = 0; j < 9; j++){
				jqueryMap.$piece[i][j].unbind();
			}
		}
		
		jqueryMap.$opposite_pawn.unbind();
		jqueryMap.$opposite_lance.unbind();
		jqueryMap.$opposite_knight.unbind();
		jqueryMap.$opposite_silver.unbind();
		jqueryMap.$opposite_gold.unbind();
		jqueryMap.$opposite_bishop.unbind();
		jqueryMap.$opposite_rook.unbind();
		
		jqueryMap.$near_pawn.unbind();
		jqueryMap.$near_lance.unbind();
		jqueryMap.$near_knight.unbind();
		jqueryMap.$near_silver.unbind();
		jqueryMap.$near_gold.unbind();
		jqueryMap.$near_bishop.unbind();
		jqueryMap.$near_rook.unbind();
	}
	// /unbindClickPiece/終了
	
	// /makeBoard/開始
	makeBoard = function(){
		var
			recordMap    = stateMap.recordMap,
			$opposite_pawn   = jqueryMap.$opposite_pawn,
			$opposite_lance  = jqueryMap.$opposite_lance,
			$opposite_knight = jqueryMap.$opposite_knight,
			$opposite_silver = jqueryMap.$opposite_silver,
			$opposite_gold   = jqueryMap.$opposite_gold,
			$opposite_bishop = jqueryMap.$opposite_bishop,
			$opposite_rook   = jqueryMap.$opposite_rook,
			$near_pawn       = jqueryMap.$near_pawn,
			$near_lance      = jqueryMap.$near_lance,
			$near_knight     = jqueryMap.$near_knight,
			$near_silver     = jqueryMap.$near_silver,
			$near_gold       = jqueryMap.$near_gold,
			$near_bishop     = jqueryMap.$near_bishop,
			$near_rook       = jqueryMap.$near_rook,
			$piece = jqueryMap.$piece,
			piece_number = configMap.piece_number;
		
		for (var i = 1; i <= 9; i++){
			for (var j = 1; j <= 9; j++){
				switch (recordMap.board[i][j]) {
					case piece_number.NONE :
						$piece[i - 1][j - 1].attr('class', 'app-piece');
						break;
					case piece_number.NE_PAWN :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-pawn');
						break;
					
					case piece_number.NE_LANCE :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-lance');
						break;
					
					case piece_number.NE_KNIGHT :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-knight');
						break;
					
					case piece_number.NE_SILVER :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-silver');
						break;
					
					case piece_number.NE_GOLD :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-gold');
						break;
					
					case piece_number.NE_BISHOP :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-bishop');
						break;
					
					case piece_number.NE_ROOK :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-rook');
						break;
					
					case piece_number.NE_KING :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-king');
						break;
					
					case piece_number.NE_P_PAWN :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-p_pawn');
						break;
					
					case piece_number.NE_P_LANCE :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-p_lance');
						break;
					
					case piece_number.NE_P_KNIGHT :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-p_knight');
						break;
					
					case piece_number.NE_P_SILVER :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-p_silver');
						break;
					
					case piece_number.NE_P_BISHOP :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-p_bishop');
						break;
					
					case piece_number.NE_P_ROOK :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-p_rook');
						break;
					
					case piece_number.OP_PAWN :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-pawn app-x-reverse');
						break;
					
					case piece_number.OP_LANCE :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-lance app-x-reverse');
						break;
					
					case piece_number.OP_KNIGHT :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-knight app-x-reverse');
						break;
					
					case piece_number.OP_SILVER :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-silver app-x-reverse');
						break;
					
					case piece_number.OP_GOLD :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-gold app-x-reverse');
						break;
					
					case piece_number.OP_BISHOP :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-bishop app-x-reverse');
						break;
					
					case piece_number.OP_ROOK :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-rook app-x-reverse');
						break;
					
					case piece_number.OP_KING :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-king app-x-reverse');
						break;
					
					case piece_number.OP_P_PAWN :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-p_pawn app-x-reverse');
						break;
					
					case piece_number.OP_P_LANCE :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-p_lance app-x-reverse');
						break;
					
					case piece_number.OP_P_KNIGHT :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-p_knight app-x-reverse');
						break;
					
					case piece_number.OP_P_SILVER :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-p_silver app-x-reverse');
						break;
					
					case piece_number.OP_P_BISHOP :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-p_bishop app-x-reverse');
						break;
					
					case piece_number.OP_P_ROOK :
						$piece[i - 1][j - 1].attr('class', 'app-piece app-piece-p_rook app-x-reverse');
						break;
				}
			}
		}
		
		
		if (recordMap.ns_stand[0] === 0) {
			$near_pawn.attr('class', 'app-stand-piece');
			$near_pawn.html('');
		}
		else {
			$near_pawn.attr('class', 'app-stand-piece app-piece-pawn');
			$near_pawn.html(recordMap.ns_stand[0]);
		}
		
		if (recordMap.ns_stand[1] === 0) {
			$near_lance.attr('class', 'app-stand-piece');
			$near_lance.html('');
		}
		else {
			$near_lance.attr('class', 'app-stand-piece app-piece-lance');
			$near_lance.html(recordMap.ns_stand[1]);
		}
		
		if (recordMap.ns_stand[2] === 0) {
			$near_knight.attr('class', 'app-stand-piece');
			$near_knight.html('');
		}
		else {
			$near_knight.attr('class', 'app-stand-piece app-piece-knight');
			$near_knight.html(recordMap.ns_stand[2]);
		}
		
		if (recordMap.ns_stand[3] === 0) {
			$near_silver.attr('class', 'app-stand-piece');
			$near_silver.html('');
		}
		else {
			$near_silver.attr('class', 'app-stand-piece app-piece-silver');
			$near_silver.html(recordMap.ns_stand[3]);
		}
		
		if (recordMap.ns_stand[4] === 0) {
			$near_gold.attr('class', 'app-stand-piece');
			$near_gold.html('');
		}
		else {
			$near_gold.attr('class', 'app-stand-piece app-piece-gold');
			$near_gold.html(recordMap.ns_stand[4]);
		}
		
		if (recordMap.ns_stand[5] === 0) {
			$near_bishop.attr('class', 'app-stand-piece');
			$near_bishop.html('');
		}
		else {
			$near_bishop.attr('class', 'app-stand-piece app-piece-bishop');
			$near_bishop.html(recordMap.ns_stand[5]);
		}
		
		if (recordMap.ns_stand[6] === 0) {
			$near_rook.attr('class', 'app-stand-piece');
			$near_rook.html('');
		}
		else {
			$near_rook.attr('class', 'app-stand-piece app-piece-rook');
			$near_rook.html(recordMap.ns_stand[6]);
		}
		
		
		if (recordMap.op_stand[0] === 0) {
			$opposite_pawn.attr('class', 'app-stand-piece app-stand-reverse');
			$opposite_pawn.html('');
		}
		else {
			$opposite_pawn.attr('class', 'app-stand-piece app-piece-pawn app-stand-reverse app-x-reverse');
			$opposite_pawn.html(recordMap.op_stand[0]);
		}
		
		if (recordMap.op_stand[1] === 0) {
			$opposite_lance.attr('class', 'app-stand-piece app-stand-reverse');
			$opposite_lance.html('');
		}
		else {
			$opposite_lance.attr('class', 'app-stand-piece app-piece-lance app-stand-reverse app-x-reverse');
			$opposite_lance.html(recordMap.op_stand[1]);
		}
		
		if (recordMap.op_stand[2] === 0) {
			$opposite_knight.attr('class', 'app-stand-piece app-stand-reverse');
			$opposite_knight.html('');
		}
		else {
			$opposite_knight.attr('class', 'app-stand-piece app-piece-knight app-stand-reverse app-x-reverse');
			$opposite_knight.html(recordMap.op_stand[2]);
		}
		
		if (recordMap.op_stand[3] === 0) {
			$opposite_silver.attr('class', 'app-stand-piece app-stand-reverse');
			$opposite_silver.html('');
		}
		else {
			$opposite_silver.attr('class', 'app-stand-piece app-piece-silver app-stand-reverse app-x-reverse');
			$opposite_silver.html(recordMap.op_stand[3]);
		}
		
		if (recordMap.op_stand[4] === 0) {
			$opposite_gold.attr('class', 'app-stand-piece app-stand-reverse');
			$opposite_gold.html('');
		}
		else {
			$opposite_gold.attr('class', 'app-stand-piece app-piece-gold app-stand-reverse app-x-reverse');
			$opposite_gold.html(recordMap.op_stand[4]);
		}
		if (recordMap.op_stand[5] === 0) {
			$opposite_bishop.attr('class', 'app-stand-piece app-stand-reverse');
			$opposite_bishop.html('');
		}
		else {
			$opposite_bishop.attr('class', 'app-stand-piece app-piece-bishop app-stand-reverse app-x-reverse');
			$opposite_bishop.html(recordMap.op_stand[5]);
		}
		
		if (recordMap.op_stand[6] === 0) {
			$opposite_rook.attr('class', 'app-stand-piece app-stand-reverse');
			$opposite_rook.html('');
		}
		else {
			$opposite_rook.attr('class', 'app-stand-piece app-piece-rook app-stand-reverse app-x-reverse');
			$opposite_rook.html(recordMap.op_stand[6]);
		}
	}
	// /makeBoard/終了
	
	// /canPickPiece/開始
	canPickPiece = function($pickPiece){
		if (
			$pickPiece.attr('class') === 'app-piece' ||
			$pickPiece.attr('class') === 'app-stand-piece' ||
			$pickPiece.attr('class') === 'app-stand-piece app-stand-reverse'
		){
			return false;
		}
		else if (
			(stateMap.recordMap.teban === 1 && $pickPiece.hasClass('app-x-reverse')) ||
			(stateMap.recordMap.teban === 2 && (! ($pickPiece.hasClass('app-x-reverse'))))
		){
			return false;
		}
		else {
			return true;
		}
	}
	// /canPickPiece/終了
	
	// /canMovePiece/開始
	canMovePiece = function(pickX, pickY, moveX, moveY){
		var
			piece_number = configMap.piece_number,
			board = stateMap.recordMap.board,
			pick_piece_ID;
		
		
		pick_piece_ID = board[pickY][pickX];
		
		switch (pick_piece_ID){
			case piece_number.NE_PAWN :
				if (pickX === moveX && pickY === moveY + 1 && ! isNearPiece(board[moveY][moveX])){
					return true;
				}
				break;
			case piece_number.NE_LANCE :
				if (pickX === moveX && pickY > moveY && ! isNearPiece(board[moveY][moveX])){
					var _y = moveY + 1;
					while (pickY !== _y){
						if (board[_y][moveX] !== piece_number.NONE){
							return false;
						}
						_y++;
					}
					return true;
				}
				break;
			case piece_number.NE_KNIGHT :
				if ((pickX === moveX + 1 || pickX === moveX - 1) && pickY === moveY + 2 && ! isNearPiece(board[moveY][moveX])){
					return true;
				}
				break;
			case piece_number.NE_SILVER :
				if (! isNearPiece(board[moveY][moveX])){
					if ((moveX - pickX <= 1 && -1 <= moveX - pickX) && pickY === moveY + 1){
						return true;
					}
					if ((moveX - pickX === 1 || -1 === moveX - pickX) && pickY === moveY - 1){
						return true;
					}
				}
				break;
			case piece_number.NE_GOLD :
			case piece_number.NE_P_PAWN :
			case piece_number.NE_P_LANCE :
			case piece_number.NE_P_KNIGHT :
			case piece_number.NE_P_SILVER :
				if (! isNearPiece(board[moveY][moveX])){
					if ((moveX - pickX <= 1 && -1 <= moveX - pickX) && pickY === moveY + 1){
						return true;
					}
					if ((moveX - pickX === 1 || -1 === moveX - pickX) && pickY === moveY){
						return true;
					}
					if (moveX === pickX && pickY === moveY - 1){
						return true;
					}
				}
				break;
			case piece_number.NE_BISHOP :
				if (! isNearPiece(board[moveY][moveX])){
					var
						ry = 10 - moveY,
						RY = 10 - pickY,
						line_a = moveY - moveX,
						line_b = ry - moveX,
						LINE_A = pickY - pickX,
						LINE_B = RY - pickX;
					
					if (line_a === LINE_A){
						if (pickY < moveY){
							var _y = moveY - 1;
							var _x = moveX - 1;
							while (pickY !== _y){
								if (board[_y][_x] !== 0){
									return false;
								}
								_y--;
								_x--;
							}
							return true;
						}
						else if (pickY > moveY){
							var _y = moveY + 1;
							var _x = moveX + 1;
							while (pickY !== _y){
								if (board[_y][_x] !== 0){
									return false;
								}
								_y++;
								_x++;
							}
							return true;
						}
					}
					else if (line_b === LINE_B){
						if (pickY < moveY){
							var _y = moveY - 1;
							var _x = moveX + 1;
							while (pickY !== _y){
								if (board[_y][_x] !== 0){
									return false;
								}
								_y--;
								_x++;
							}
							return true;
						}
						else if (pickY > moveY){
							var _y = moveY + 1;
							var _x = moveX - 1;
							while (pickY !== _y){
								if (board[_y][_x] !== 0){
									return false;
								}
								_y++;
								_x--;
							}
							return true;
						}
					}
				}
				break;
			case piece_number.NE_ROOK :
				if (! isNearPiece(board[moveY][moveX])){
					if (moveX === pickX && moveY !== pickY){
						if (pickY < moveY){
							var _y = moveY - 1;
							while (pickY !== _y){
								if (board[_y][moveX] !== 0){
									return false;
								}
								_y--;
							}
							return true;
						}
						else if (pickY > moveY){
							var _y = moveY + 1;
							while (pickY !== _y){
								if (board[_y][moveX] !== 0){
									return false;
								}
								_y++;
							}
							return true;
						}
					}
					else if (moveY === pickY && moveX !== pickX){
						if (pickX < moveX){
							var _x = moveX - 1;
							while (pickX !== _x){
								if (board[moveY][_x] !== 0){
									return false;
								}
								_x--;
							}
							return true;
						}
						else if (pickX > moveX){
							var _x = moveX + 1;
							while (pickX !== _x){
								if (board[moveY][_x] !== 0){
									return false;
								}
								_x++;
							}
							return true;
						}
					}
				}
				break;
			case piece_number.NE_KING :
				if (! isNearPiece(board[moveY][moveX])){
					if ((moveX - pickX <= 1 && -1 <= moveX - pickX) && pickY === moveY + 1){
						return true;
					}
					if ((moveX - pickX === 1 || -1 === moveX - pickX) && pickY === moveY){
						return true;
					}
					if ((moveX - pickX <= 1 && -1 <= moveX - pickX) && pickY === moveY - 1){
						return true;
					}
				}
				break;
			case piece_number.NE_P_BISHOP :
				if (! isNearPiece(board[moveY][moveX])){
					if ((moveX - pickX <= 1 && -1 <= moveX - pickX) && pickY === moveY + 1){
						return true;
					}
					if ((moveX - pickX === 1 || -1 === moveX - pickX) && pickY === moveY){
						return true;
					}
					if ((moveX - pickX <= 1 && -1 <= moveX - pickX) && pickY === moveY - 1){
						return true;
					}
					var
						ry = 10 - moveY,
						RY = 10 - pickY,
						line_a = moveY - moveX,
						line_b = ry - moveX,
						LINE_A = pickY - pickX,
						LINE_B = RY - pickX;
					
					if (line_a === LINE_A){
						if (pickY < moveY){
							var _y = moveY - 1;
							var _x = moveX - 1;
							while (pickY !== _y){
								if (board[_y][_x] !== 0){
									return false;
								}
								_y--;
								_x--;
							}
							return true;
						}
						else if (pickY > moveY){
							var _y = moveY + 1;
							var _x = moveX + 1;
							while (pickY !== _y){
								if (board[_y][_x] !== 0){
									return false;
								}
								_y++;
								_x++;
							}
							return true;
						}
					}
					else if (line_b === LINE_B){
						if (pickY < moveY){
							var _y = moveY - 1;
							var _x = moveX + 1;
							while (pickY !== _y){
								if (board[_y][_x] !== 0){
									return false;
								}
								_y--;
								_x++;
							}
							return true;
						}
						else if (pickY > moveY){
							var _y = moveY + 1;
							var _x = moveX - 1;
							while (pickY !== _y){
								if (board[_y][_x] !== 0){
									return false;
								}
								_y++;
								_x--;
							}
							return true;
						}
					}
				}
				break;
			case piece_number.NE_P_ROOK :
				if (! isNearPiece(board[moveY][moveX])){
					if ((moveX - pickX <= 1 && -1 <= moveX - pickX) && pickY === moveY + 1){
						return true;
					}
					if ((moveX - pickX === 1 || -1 === moveX - pickX) && pickY === moveY){
						return true;
					}
					if ((moveX - pickX <= 1 && -1 <= moveX - pickX) && pickY === moveY - 1){
						return true;
					}
					if (moveX === pickX && moveY !== pickY){
						if (pickY < moveY){
							var _y = moveY - 1;
							while (pickY !== _y){
								if (board[_y][moveX] !== 0){
									return false;
								}
								_y--;
							}
							return true;
						}
						else if (pickY > moveY){
							var _y = moveY + 1;
							while (pickY !== _y){
								if (board[_y][moveX] !== 0){
									return false;
								}
								_y++;
							}
							return true;
						}
					}
					else if (moveY === pickY && moveX !== pickX){
						if (pickX < moveX){
							var _x = moveX - 1;
							while (pickX !== _x){
								if (board[moveY][_x] !== 0){
									return false;
								}
								_x--;
							}
							return true;
						}
						else if (pickX > moveX){
							var _x = moveX + 1;
							while (pickX !== _x){
								if (board[moveY][_x] !== 0){
									return false;
								}
								_x++;
							}
							return true;
						}
					}
				}
				break;
			case piece_number.OP_PAWN :
				if (pickX === moveX && pickY === moveY - 1 && ! isOppositePiece(board[moveY][moveX])){
					return true;
				}
				break;
			case piece_number.OP_LANCE :
				if (pickX === moveX && pickY < moveY && ! isOppositePiece(board[moveY][moveX])){
					var _y = moveY - 1;
					while (pickY !== _y){
						if (board[_y][moveX] !== piece_number.NONE){
							return false;
						}
						_y--;
					}
					return true;
				}
				break;
			case piece_number.OP_KNIGHT :
				if ((pickX === moveX + 1 || pickX === moveX - 1) && pickY === moveY - 2 && ! isOppositePiece(board[moveY][moveX])){
					return true;
				}
				break;
			case piece_number.OP_SILVER :
				if (! isOppositePiece(board[moveY][moveX])){
					if ((moveX - pickX <= 1 && -1 <= moveX - pickX) && pickY === moveY - 1){
						return true;
					}
					if ((moveX - pickX === 1 || -1 === moveX - pickX) && pickY === moveY + 1){
						return true;
					}
				}
				break;
			case piece_number.OP_GOLD :
			case piece_number.OP_P_PAWN :
			case piece_number.OP_P_LANCE :
			case piece_number.OP_P_KNIGHT :
			case piece_number.OP_P_SILVER :
				if (! isOppositePiece(board[moveY][moveX])){
					if ((moveX - pickX <= 1 && -1 <= moveX - pickX) && pickY === moveY - 1){
						return true;
					}
					if ((moveX - pickX === 1 || -1 === moveX - pickX) && pickY === moveY){
						return true;
					}
					if (moveX === pickX && pickY === moveY + 1){
						return true;
					}
				}
				break;
			case piece_number.OP_BISHOP :
				if (! isOppositePiece(board[moveY][moveX])){
					var
						ry = 10 - moveY,
						RY = 10 - pickY,
						line_a = moveY - moveX,
						line_b = ry - moveX,
						LINE_A = pickY - pickX,
						LINE_B = RY - pickX;
					
					if (line_a === LINE_A){
						if (pickY < moveY){
							var _y = moveY - 1;
							var _x = moveX - 1;
							while (pickY !== _y){
								if (board[_y][_x] !== 0){
									return false;
								}
								_y--;
								_x--;
							}
							return true;
						}
						else if (pickY > moveY){
							var _y = moveY + 1;
							var _x = moveX + 1;
							while (pickY !== _y){
								if (board[_y][_x] !== 0){
									return false;
								}
								_y++;
								_x++;
							}
							return true;
						}
					}
					else if (line_b === LINE_B){
						if (pickY < moveY){
							var _y = moveY - 1;
							var _x = moveX - 1;
							while (pickY !== _y){
								if (board[_y][_x] !== 0){
									return false;
								}
								_y--;
								_x++;
							}
							return true;
						}
						else if (pickY > moveY){
							var _y = moveY + 1;
							var _x = moveX + 1;
							while (pickY !== _y){
								if (board[_y][_x] !== 0){
									return false;
								}
								_y++;
								_x--;
							}
							return true;
						}
					}
				}
				break;
			case piece_number.OP_ROOK :
				if (! isOppositePiece(board[moveY][moveX])){
					if (moveX === pickX && moveY !== pickY){
						if (pickY < moveY){
							var _y = moveY - 1;
							while (pickY !== _y){
								if (board[_y][moveX] !== 0){
									return false;
								}
								_y--;
							}
							return true;
						}
						else if (pickY > moveY){
							var _y = moveY + 1;
							while (pickY !== _y){
								if (board[_y][moveX] !== 0){
									return false;
								}
								_y++;
							}
							return true;
						}
					}
					else if (moveY === pickY && moveX !== pickX){
						if (pickX < moveX){
							var _x = moveX - 1;
							while (pickX !== _x){
								if (board[moveY][_x] !== 0){
									return false;
								}
								_x--;
							}
							return true;
						}
						else if (pickX > moveX){
							var _x = moveX + 1;
							while (pickX !== _x){
								if (board[moveY][_x] !== 0){
									return false;
								}
								_x++;
							}
							return true;
						}
					}
				}
				break;
			case piece_number.OP_KING :
				if (! isOppositePiece(board[moveY][moveX])){
					if ((moveX - pickX <= 1 && -1 <= moveX - pickX) && pickY === moveY + 1){
						return true;
					}
					if ((moveX - pickX === 1 || -1 === moveX - pickX) && pickY === moveY){
						return true;
					}
					if ((moveX - pickX <= 1 && -1 <= moveX - pickX) && pickY === moveY - 1){
						return true;
					}
				}
				break;
			case piece_number.OP_P_BISHOP :
				if (! isOppositePiece(board[moveY][moveX])){
					if ((moveX - pickX <= 1 && -1 <= moveX - pickX) && pickY === moveY + 1){
						return true;
					}
					if ((moveX - pickX === 1 || -1 === moveX - pickX) && pickY === moveY){
						return true;
					}
					if ((moveX - pickX <= 1 && -1 <= moveX - pickX) && pickY === moveY - 1){
						return true;
					}
					var
						ry = 10 - moveY,
						RY = 10 - pickY,
						line_a = moveY - moveX,
						line_b = ry - moveX,
						LINE_A = pickY - pickX,
						LINE_B = RY - pickX;
					
					if (line_a === LINE_A){
						if (pickY < moveY){
							var _y = moveY - 1;
							var _x = moveX - 1;
							while (pickY !== _y){
								if (board[_y][_x] !== 0){
									return false;
								}
								_y--;
								_x--;
							}
							return true;
						}
						else if (pickY > moveY){
							var _y = moveY + 1;
							var _x = moveX + 1;
							while (pickY !== _y){
								if (board[_y][_x] !== 0){
									return false;
								}
								_y++;
								_x++;
							}
							return true;
						}
					}
					else if (line_b === LINE_B){
						if (pickY < moveY){
							var _y = moveY - 1;
							var _x = moveX - 1;
							while (pickY !== _y){
								if (board[_y][_x] !== 0){
									return false;
								}
								_y--;
								_x++;
							}
							return true;
						}
						else if (pickY > moveY){
							var _y = moveY + 1;
							var _x = moveX + 1;
							while (pickY !== _y){
								if (board[_y][_x] !== 0){
									return false;
								}
								_y++;
								_x--;
							}
							return true;
						}
					}
				}
				break;
			case piece_number.OP_P_ROOK :
				if (! isOppositePiece(board[moveY][moveX])){
					if ((moveX - pickX <= 1 && -1 <= moveX - pickX) && pickY === moveY + 1){
						return true;
					}
					if ((moveX - pickX === 1 || -1 === moveX - pickX) && pickY === moveY){
						return true;
					}
					if ((moveX - pickX <= 1 && -1 <= moveX - pickX) && pickY === moveY - 1){
						return true;
					}
					if (moveX === pickX && moveY !== pickY){
						if (pickY < moveY){
							var _y = moveY - 1;
							while (pickY !== _y){
								if (board[_y][moveX] !== 0){
									return false;
								}
								_y--;
							}
							return true;
						}
						else if (pickY > moveY){
							var _y = moveY + 1;
							while (pickY !== _y){
								if (board[_y][moveX] !== 0){
									return false;
								}
								_y++;
							}
							return true;
						}
					}
					else if (moveY === pickY && moveX !== pickX){
						if (pickX < moveX){
							var _x = moveX - 1;
							while (pickX !== _x){
								if (board[moveY][_x] !== 0){
									return false;
								}
								_x--;
							}
							return true;
						}
						else if (pickX > moveX){
							var _x = moveX + 1;
							while (pickX !== _x){
								if (board[moveY][_x] !== 0){
									return false;
								}
								_x++;
							}
							return true;
						}
					}
				}
				break;
		}
		return false;
	}
	// /canMovePiece/終了
	
	// /whatKindPiece/開始
	whatKindPiece = function(moveX, moveY){
		var
			piece_number = configMap.piece_number,
			board = stateMap.recordMap.board,
			move_piece_ID;
		
		move_piece_ID = board[moveY][moveX];
		
		switch (move_piece_ID){
			case piece_number.NE_PAWN     :
			case piece_number.OP_PAWN     :
				return 'FU'
				break;
			case piece_number.NE_LANCE    :
			case piece_number.OP_LANCE    :
				return 'KY'
				break;
			case piece_number.NE_KNIGHT   :
			case piece_number.OP_KNIGHT   :
				return 'KE'
				break;
			case piece_number.NE_SILVER   :
			case piece_number.OP_SILVER   :
				return 'GI'
				break;
			case piece_number.NE_GOLD     :
			case piece_number.OP_GOLD     :
				return 'KI'
				break;
			case piece_number.NE_BISHOP   :
			case piece_number.OP_BISHOP   :
				return 'KA'
				break;
			case piece_number.NE_ROOK     :
			case piece_number.OP_ROOK     :
				return 'HI'
				break;
			case piece_number.NE_KING     :
			case piece_number.OP_KING     :
				return 'OU'
				break;
			case piece_number.NE_P_PAWN   :
			case piece_number.OP_P_PAWN   :
				return 'TO'
				break;
			case piece_number.NE_P_LANCE  :
			case piece_number.OP_P_LANCE  :
				return 'NY'
				break;
			case piece_number.NE_P_KNIGHT :
			case piece_number.OP_P_KNIGHT :
				return 'NK'
				break;
			case piece_number.NE_P_SILVER :
			case piece_number.OP_P_SILVER :
				return 'NG'
				break;
			case piece_number.NE_P_BISHOP :
			case piece_number.OP_P_BISHOP :
				return 'UM'
				break;
			case piece_number.NE_P_ROOK   :
			case piece_number.OP_P_ROOK   :
				return 'RY'
				break;
		}
	}
	// /whatKinePiece/終了
	
	// /isNearPiece/開始
	isNearPiece = function(ID){
		if (0 < ID && ID < 20){
			return true;
		}
		else{
			return false;
		}
	}
	// /isNearPiece/終了
	
	// /isOppositePiece/開始
	isOppositePiece = function(ID){
		if (20 < ID){
			return true;
		}
		else{
			return false;
		}
	}
	// /isOppositePiece/終了
	
	// /isPromotePiece/開始
	isPromotePiece = function(pickY, moveY, pieceID){
		var
			piece_number = configMap.piece_number;
		
		if (piece_number.NE_P_PAWN <= pieceID && pieceID < 20){
			return false;
		}
		else if (piece_number.OP_P_PAWN <= pieceID){
			return false;
		}
		else if (pieceID === piece_number.NE_GOLD || pieceID === piece_number.NE_KING || pieceID === piece_number.OP_GOLD || pieceID === piece_number.OP_KING){
			return false;
		}
		else if ((pieceID === piece_number.NE_PAWN || pieceID === piece_number.NE_LANCE) && moveY === 1){
			return true;
		}
		else if (pieceID === piece_number.NE_KNIGHT && moveY < 3){
			return true;
		}
		else if((pieceID === piece_number.OP_PAWN || pieceID === piece_number.OP_LANCE) && moveY === 9){
			return true;
		}
		else if(pieceID === piece_number.OP_KNIGHT && moveY > 7){
			return true;
		}
		else if(isNearPiece(pieceID) && moveY < 4){
			if (confirm('成りますか?')){
				return true;
			}
			else {
				return false;
			}
		}
		else if(isOppositePiece(pieceID) && moveY > 6){
			if (confirm('成りますか?')){
				return true;
			}
			else {
				return false;
			}
		}
		else {
			return false;
		}
	}
	// /isPromotePiece/終了
	
	// /checkNifu/開始
	checkNifu = function(moveX){
		var recordMap = stateMap.recordMap;
		
		if (! stateMap.$selected_piece.hasClass('app-piece-pawn')){
			return true;
		}
		else{
			for(var i = 1; i <= 9; i++){
				if ((recordMap.board[i][moveX] === 1 && recordMap.teban === 1) || (recordMap.board[i][moveX] === 21 && recordMap.teban === 2)){
					return false;
				}
			}
			return true;
		}
	}
	// /checkNifu/終了
	
	// ----------ユーティリティメソッド終了----------
	// ----------DOMメソッド開始---------------------
	// /setJqueryMap/開始
	setJqueryMap = function(){
		var
			$container       = stateMap.$container,
			$board           = $container.find('.app-board'),
			$opposite_stand  = $board.find('.app-board-opposite_stand'),
			$near_stand      = $board.find('.app-board-near_stand'),
			
			$opposite_pawn   = $opposite_stand.find('.app-piece-pawn'),
			$opposite_lance  = $opposite_stand.find('.app-piece-lance'),
			$opposite_knight = $opposite_stand.find('.app-piece-knight'),
			$opposite_silver = $opposite_stand.find('.app-piece-silver'),
			$opposite_gold   = $opposite_stand.find('.app-piece-gold'),
			$opposite_bishop = $opposite_stand.find('.app-piece-bishop'),
			$opposite_rook   = $opposite_stand.find('.app-piece-rook'),
			$near_pawn       = $near_stand.find('.app-piece-pawn'),
			$near_lance      = $near_stand.find('.app-piece-lance'),
			$near_knight     = $near_stand.find('.app-piece-knight'),
			$near_silver     = $near_stand.find('.app-piece-silver'),
			$near_gold       = $near_stand.find('.app-piece-gold'),
			$near_bishop     = $near_stand.find('.app-piece-bishop'),
			$near_rook       = $near_stand.find('.app-piece-rook'),
			
			$feel            = $board.find('.app-board-feel'),
			$inner           = $feel.find('.app-pieces'),
			
			
			$piece           = new Array();
		
		for (var i = 0; i < 9; i++){
			$piece[i] = new Array();
			for (var j = 0; j < 9; j++){
				$piece[i][j] = $inner.children('.app-piece').eq(i * 9 + j);
			}
		}
		
		jqueryMap = {
			$board               : $board,
			$opposite_move       : $board.find('.app-board-opposite_move'),
			$opposite_stand      : $opposite_stand,
			$feel                : $feel,
			$near_stand          : $near_stand,
			$near_move           : $board.find('.app-board-near_move'),
			
			$opposite_pawn       : $opposite_pawn,
			$opposite_lance      : $opposite_lance,
			$opposite_knight     : $opposite_knight,
			$opposite_silver     : $opposite_silver,
			$opposite_gold       : $opposite_gold,
			$opposite_bishop     : $opposite_bishop,
			$opposite_rook       : $opposite_rook,
			$near_pawn           : $near_pawn,
			$near_lance          : $near_lance,
			$near_knight         : $near_knight,
			$near_silver         : $near_silver,
			$near_gold           : $near_gold,
			$near_bishop         : $near_bishop,
			$near_rook           : $near_rook,
			
			$inner               : $inner,
			$piece               : $piece
		};
	};
	// /setJqueryMap/終了
	// ----------DOMメソッド終了---------------------
	// ----------イベントハンドラ開始----------------
	// /onClickPiece/開始
	onClickPiece = function(){
		var 
			classes,
			number,
			moveX, moveY,
			pickpiece_number,
			recordMap = stateMap.recordMap,
			select_number = stateMap.select_number,
			piece_number = configMap.piece_number,
			$clickPiece = $(this);
		
		if (stateMap.$selected_piece === null){		// 駒を掴む
			if (! canPickPiece($clickPiece)){
				return;
			}
			$clickPiece.css('background-color', 'red');
			stateMap.$selected_piece = $clickPiece;
			
			stateMap.select_number = $('.app-pieces > .app-piece').index(this);
			stateMap.select_stand = false;
		}
		else {										// 着手
			number = $('.app-pieces > .app-piece').index(this);
			moveY = Math.floor(number / 9) + 1;
			moveX = number % 9 + 1;
			pickY = Math.floor(select_number / 9) + 1;
			pickX = select_number % 9 + 1;
			pickpiece_number = stateMap.recordMap.board[pickY][pickX]
			
			if ((stateMap.select_stand && checkNifu(moveX)) || canMovePiece(pickX, pickY, moveX, moveY)){		// 駒台から駒を打ち、かつそれが二歩ではない。もしくは指定先に駒が動かせる場合。
				stateMap.$selected_piece.css('background-color', '');
				
				if (recordMap.board[moveY][moveX] !== 0){	// 移動先に駒があった場合
					if (recordMap.board[moveY][moveX] === piece_number.NE_KING || recordMap.board[moveY][moveX] === piece_number.OP_KING){	// 王将を取った場合
						unbindClickPiece();
					}
					else if (recordMap.teban === 1){		// 後手の駒を取った場合
						recordMap.ns_stand[(recordMap.board[moveY][moveX] - 20) % 8 - 1]++;
					}
					else {									// 先手の駒を取った場合
						recordMap.op_stand[recordMap.board[moveY][moveX] % 8 - 1]++;
					}
				}
				
				if (stateMap.select_stand){					// 駒台から駒を打った場合
					if (recordMap.teban === 1){					// 先手番
						recordMap.board[moveY][moveX] = stateMap.select_number + 1;
						recordMap.ns_stand[stateMap.select_number]--;
					}
					else {										// 後手番
						recordMap.board[moveY][moveX] = stateMap.select_number + 21;
						recordMap.op_stand[stateMap.select_number]--;
					}
				}
				else {										// 盤上の駒を動かした場合
					if (isPromotePiece(pickY, moveY, stateMap.recordMap.board[pickY][pickX])){		// 成り
						recordMap.board[moveY][moveX] = stateMap.recordMap.board[pickY][pickX] + 8;
					}
					else {																			// 不成
						recordMap.board[moveY][moveX] = stateMap.recordMap.board[pickY][pickX];
					}
					recordMap.board[pickY][pickX] = 0;
				}
				
				if (recordMap.teban == 1){
					recordMap.kifu = '+';
				}
				else {
					recordMap.kifu = '-';
				}
				
				if (stateMap.select_stand){
					recordMap.kifu += '00' + moveX + moveY + whatKindPiece(moveX, moveY);
				}
				else {
					recordMap.kifu += '' + pickX + pickY + moveX + moveY + whatKindPiece(moveX, moveY);
				}
				
				recordMap.tesuu++;
				recordMap.teban = 3 - recordMap.teban;
				stateMap.recordMap = app.data.setPosition(recordMap);
				
				makeBoard();
				
				
				stateMap.$selected_piece = null;
				stateMap.select_number = null;
				stateMap.select_stand = false;
			}
			else {
				stateMap.$selected_piece.css('background-color', '');
				stateMap.$selected_piece = null;
				stateMap.select_number = null;
				stateMap.select_stand = false;
			}
		}
	}
	// /onClickPiece/終了
	
	// /onClickStandPiece/開始
	onClickStandPiece = function(){
		var 
			classes,
			$pickPiece = $(this);
		
		if (stateMap.$selected_piece === null){
			if (! canPickPiece($pickPiece)){
				return;
			}
			
			$pickPiece.css('background-color', 'red');
			stateMap.$selected_piece = $pickPiece;
			stateMap.select_stand = true;
			
			if (stateMap.recordMap.teban === 1){
				stateMap.select_number = $('.app-board-near_stand > .app-stand-piece').index(this);
			}
			else {
				stateMap.select_number = $('.app-board-opposite_stand > .app-stand-piece').index(this);
			}
		}
		else {
			$pickPiece.css('background-color', '');
			stateMap.$selected_piece = null;
		}
	}
	// /onClickStandPiece/終了
	// ----------イベントハンドラ終了----------------
	// ----------パブリップメソッド開始--------------
	// /reloadBoard/開始
	// 目的：盤面の再配置
	// 引数：
	//   recordMap 盤面状態を表すマップ
	// 戻り値 true;
	// 例外発行：なし
	reloadBoard = function(recordMap){
		if (stateMap.$selected_piece){
			stateMap.$selected_piece.css('background-color', '');
		}
		stateMap.$selected_piece = null;
		stateMap.select_number = null;
		stateMap.select_stand = false;
		
		stateMap.recordMap = recordMap;
		
		stateMap.recordMap = app.data.setPosition(recordMap);
		makeBoard();
		
		return true;
	};
	// /initModule/終了
	
	// /initModule/開始
	// 目的：モジュールの初期化
	// 引数：
	//   $container この機能が使うjQuery要素
	// 戻り値 true;
	// 例外発行：なし
	initModule = function($container){
		stateMap.$container = $container;
		$container.html(configMap.main_html);
		setJqueryMap();
		
		stateMap.recordMap = app.data.getPosition(0);
		makeBoard();
		bindClickPiece();
		
		return true;
	};
	// /initModule/終了
	
	
	return {
		initModule : initModule,
		reloadBoard : reloadBoard
	};
	// ----------パブリップメソッド終了--------------
}());