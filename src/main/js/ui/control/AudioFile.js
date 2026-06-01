Z8.define('org.zenframework.z8.template.controls.AudioFile', {
	extend: 'Z8.form.field.Text',

	trigger: true,

	initTriggers: function() {
		var triggers = this.triggers;

		triggers.push({
			icon: 'fa-refresh',
			tooltip: 'Обновить аудиоплеер',
			handler: this.createPlayer,
			scope: this
		});

		this.callParent(arguments);
	},

	completeRender: function() {
		this.callParent(arguments);

		this.input.placeholder = 'Нажмите refresh после загрузки файла';

		this.createPlayer();
	},

	findDocControl: function() {
		var controls = this.form.controls;

		for(var i = 0; i < controls.length; i++) {
			if(controls[i].name == 'doc')
				return controls[i];
		}

		return null;
	},

	createPlayer: function() {
		var docControl = this.findDocControl();

		if(docControl == null)
			return;

		var files = docControl.getValue();

		if(Z8.isEmpty(files) || !files[0].path)
			return;

		var file = files[0];

		if(!this.audio) {
			this.audio = document.createElement('audio');

			this.audio.controls = true;
			this.audio.style.width = '100%';
			this.audio.style.marginTop = '8px';
			this.audio.preload = 'metadata';

			var container = this.input.parentNode;
			container.parentNode.insertBefore(this.audio, container.nextSibling);
		}

		var src = window.location.origin + '/'
			+ file.path
			+ '?session=' + Application.session
			+ '&id=' + file.id;

		if(this.audio.src != src) {
			this.audio.src = src;
			this.audio.load();
		}
	}
});