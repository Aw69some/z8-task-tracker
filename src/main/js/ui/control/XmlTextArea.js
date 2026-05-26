Z8.define('org.zenframework.z8.template.controls.XmlTextArea', {
	extend: 'Z8.form.field.TextArea',

	completeRender: function() {
		this.callParent(arguments);

		var input = this.input;

		this.editor = CodeMirror.fromTextArea(input, {
			mode: 'xml',
			lineNumbers: true,
			lineWrapping: true
		});

		this.editor.on('change', function(editor) {
			this.value = editor.getValue();

			if (this.input)
				this.input.value = this.value;
		}, this);
	}
});