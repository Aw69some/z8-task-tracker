Z8.define('org.zenframework.z8.template.controls.YouTubeText', {
	extend: 'Z8.form.field.Text',

	completeRender: function() {
		this.callParent(arguments);

		var input = this.input;

		this.player = document.createElement('iframe');
		this.player.width = '100%';
		this.player.height = '240';
		this.player.style.marginTop = '8px';
		this.player.style.border = '0';
		this.player.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
		this.player.allowFullscreen = true;

		var container = this.getDom ? this.getDom() : input.parentNode;
		container.parentNode.insertBefore(this.player, container.nextSibling);

		this.updatePlayer();

		input.addEventListener('input', this.updatePlayer.bind(this));
	},

	updatePlayer: function() {
		var url = this.input ? this.input.value : '';
		var videoId = this.getVideoId(url);

		if (videoId)
			this.player.src = 'https://www.youtube.com/embed/' + videoId;
		else
			this.player.removeAttribute('src');
	},

	getVideoId: function(url) {
		if (!url)
			return null;

		var match = url.match(/[?&]v=([^&]+)/);
		if (match)
			return match[1];

		match = url.match(/youtu\.be\/([^?&]+)/);
		if (match)
			return match[1];

		match = url.match(/youtube\.com\/embed\/([^?&]+)/);
		if (match)
			return match[1];

		return null;
	}
});