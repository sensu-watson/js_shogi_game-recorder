app.shell = (function(){
	// ----------���W���[���X�R�[�v�ϐ��J�n----------
	var
		configMap = {
			main_html : String()
				+ '<div class="app-shell-board"></div>'
				+ '<div class="app-shell-operate"></div>'
		},
		stateMap = {$container : null},
		jqueryMap = {},
		
		setJqueryMap, initModule;
	// ----------���W���[���X�R�[�v�ϐ��I��----------
	// ----------���[�e�B���e�B���\�b�h�J�n----------
	// ----------���[�e�B���e�B���\�b�h�I��----------
	// ----------DOM���\�b�h�J�n---------------------
	// /setJqueryMap/�J�n
	setJqueryMap = function(){
		var $container = stateMap.$container;
		jqueryMap = {
			$container : $container,
			$board     : $container.find('.app-shell-board'),
			$operate   : $container.find('.app-shell-operate')
		};
	};
	// /setJqueryMap/�I��
	// ----------DOM���\�b�h�I��---------------------
	// ----------�C�x���g�n���h���J�n----------------
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
		
		// ���w�̋@�\���W���[����������
		app.board.initModule(jqueryMap.$board);
		app.operate.initModule(jqueryMap.$operate);
		
		return true;
	}
	// /initModule/�I��
	
	
	return {initModule : initModule};
	// ----------�p�u���b�v���\�b�h�I��--------------
}());