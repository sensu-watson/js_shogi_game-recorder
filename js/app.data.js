app.data = (function(){
	// ----------���W���[���X�R�[�v�ϐ��J�n----------
	var
		stateMap = {
			recordMapArray : null,
			tesuu          : null
		},
		
		getKifu, getTesuu, getPosition,
		setPosition, initModule;
	// ----------���W���[���X�R�[�v�ϐ��I��----------
	// ----------���[�e�B���e�B���\�b�h�J�n----------
	// ----------���[�e�B���e�B���\�b�h�I��----------
	// ----------�C�x���g�n���h���J�n----------------
	// ----------�C�x���g�n���h���I��----------------
	// ----------�p�u���b�v���\�b�h�J�n--------------
	// /getKifu/�J�n
	// �ړI�F�A�v�����`���ł̊����̎擾
	// �����F����
	// �߂�l kifuArray;
	// ��O���s�F�Ȃ�
	getKifu = function(){
		var i,
			kifuArray = Array();
			tesuu = stateMap.tesuu;
		
		for (i = 0; i <= tesuu; i++){
			kifuArray[i] = stateMap.recordMapArray[i].kifu;
		}
		
		return kifuArray;
	}
	
	// /getTesuu/�J�n
	// �ړI�F���݂̎萔
	// �����F����
	// �߂�l tesuu;
	// ��O���s�F�Ȃ�
	getTesuu = function(){
		var tesuu = stateMap.tesuu;
		
		return tesuu;
	}
	
	// /getPosition/�J�n
	// �ړI�F�ǖʂ̎擾
	// �����F�萔
	// �߂�l recordMap;
	// ��O���s�F�Ȃ�
	getPosition = function(tesuu) {
		if (stateMap.recordMapArray[tesuu] != null){
			return $.extend(true, {}, stateMap.recordMapArray[tesuu]);
		}
		else {
			return null;
		}
	}
	
	// /setPosition/�J�n
	// �ړI�F�ǖʂ̊i�[
	// �����FrecordMap
	// �߂�l recordMap;
	// ��O���s�F�Ȃ�
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
	
	// /initModule/�J�n
	// �ړI�F���W���[���̏�����
	// �����F�Ȃ�
	// �߂�l true;
	// ��O���s�F�Ȃ�
	initModule = function(){
		
		// stateMap������������B
		stateMap.recordMapArray = Array();
		stateMap.tesuu          = 0;
		
		// �����ǖʂ��쐬����
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
	// /initModule/�I��
	
	
	return {
		initModule  : initModule,
		getKifu     : getKifu,
		getTesuu    : getTesuu,
		getPosition : getPosition,
		setPosition : setPosition
	};
	// ----------�p�u���b�v���\�b�h�I��--------------
}());
