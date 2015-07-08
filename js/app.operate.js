app.operate = (function(){
	// ----------���W���[���X�R�[�v�ϐ��J�n----------
	var
		configMap = {
			main_html : String()
				+ '<div class="app-operate-menu">'
					+ '<div class="app-operate-prev app-normalbutton">�߂�</div>'
					+ '<div class="app-operate-next app-normalbutton">�i��</div>'
					+ '<div class="app-operate-kifout app-normalbutton">kif�o��</div>'
				+ '</div>'
				+ '<div class="app-operate-record">'
					+ '<ul class="app-operate-record-kif">'
						+ '<li>120�A���R����E�s��</li>'
					+ '</ul>'
				+'</div>'
		},
		stateMap = {$container : null},
		jqueryMap = {},
		
		setJqueryMap, initModule;
	// ----------���W���[���X�R�[�v�ϐ��I��----------
	// ----------���[�e�B���e�B���\�b�h�J�n----------
	// /bindOperateButton/�J�n
	bindOperateButton = function(){
		
	}
	
	// ----------���[�e�B���e�B���\�b�h�I��----------
	// ----------DOM���\�b�h�J�n---------------------
	// /setJqueryMap/�J�n
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
	// /setJqueryMap/�I��
	// ----------DOM���\�b�h�I��---------------------
	// ----------�C�x���g�n���h���J�n----------------
	// /onClickPrevButton/�J�n
	onClickPrevButton = function(){
		var
			tesuu,
			recordMap;
		
		tesuu = app.data.getTesuu();
		recordMap = app.data.getPosition(tesuu - 1);
		app.board.reloadBoard(recordMap);
	}
	// /onClickPrevButton/�I��
	
	// /onClickNextButton/�J�n
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
			window.alert('�Ō�̎�ł�');
		}
	}
	// /onClickNextButton/�I��
	
	// /onClickKifoutButton/�J�n
	
	
	// /onClickKifoutButton/�I��
	
	// ----------�C�x���g�n���h���I��----------------
	// ----------�p�u���b�v���\�b�h�J�n--------------
	// /initModule/�J�n
	// �ړI�F���W���[���̏�����
	// �����F
	//   $container ���̋@�\���g��jQuery�v�f
	// �߂�l true;
	// ��O���s�F�Ȃ�
	initModule = function($container){
		// HTML�����[�h���AjQuery�R���N�V�������}�b�s���O
		stateMap.$container = $container;
		$container.html(configMap.main_html);
		setJqueryMap();
		
		jqueryMap.$menu_prev.click(onClickPrevButton);
		jqueryMap.$menu_next.click(onClickNextButton);
		
		return true;
	}
	// /initModule/�I��
	
	
	return {initModule : initModule};
	// ----------�p�u���b�v���\�b�h�I��--------------
}());