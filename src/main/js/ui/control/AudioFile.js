Z8.define('org.zenframework.z8.template.controls.AudioFile', {
	extend: 'Z8.form.field.Text',

	completeRender: function() {
		this.callParent(arguments);

		this.createPlayer();

		var me = this;
			var attempts = 0;

			var timer = setInterval(function() {
				me.createPlayer();

				attempts = attempts + 1;

				if (me.audio || attempts >= 10)
					clearInterval(timer);
			}, 500);

	
	},

	createPlayer: function() {
		var files = this.record && this.record.data
			? this.record.data.doc
			: null;

		if (!files || files.length === 0 || !files[0].path)
			return;

		var file = files[0];

		if (!this.audio) {
			this.audio = document.createElement('audio');

			this.audio.controls = true;
			this.audio.style.width = '100%';
			this.audio.style.marginTop = '8px';
			this.audio.preload = 'metadata';

			var container = this.input.parentNode;

			container.parentNode.insertBefore(
				this.audio,
				container.nextSibling
			);
		}

		var src = window.location.origin + '/'
			+ file.path
			+ '?session=' + Application.session
			+ '&id=' + file.id;

		if (this.audio.src !== src) {
			this.audio.src = src;
			this.audio.load();
		}
	}
});