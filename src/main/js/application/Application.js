// Имя JS-класса, описывающего пользователя приложения
Application.userCls = 'org.zenframework.z8.template.User';
// Имя JS-класса, описывающего Viewport приложения
// Viewport - это окно приложения, в котором открываются формы
Application.viewportCls = 'org.zenframework.z8.template.Viewport';

// Перечень JS-классов, описывающих визуальные компоненты, встречающиеся в BL-коде
// в атрибутах [ui]. Заполнение не обязательно, но ускоряет агрузку приложения
Z8.apply(Application.subclasses, {
	'org.zenframework.z8.template.controls.EMail': 'org.zenframework.z8.template.controls.EMail',
	'org.zenframework.z8.template.controls.XmlTextArea': 'org.zenframework.z8.template.controls.XmlTextArea',
	'org.zenframework.z8.template.controls.YouTubeText': 'org.zenframework.z8.template.controls.YouTubeText',
	'org.zenframework.z8.template.controls.AudioFile': 'org.zenframework.z8.template.controls.AudioFile'
});

// Поведение списков-деревьев по умолчанию
Application.listbox.collapsed = false;
// Отображать/скрывать в списках и таблицах специальный столбец, указывающий на блокировку записи
//Application.listbox.locks = false;
// Отображать/скрывать в списках и таблицах специальный столбец, позволяющий выбирать несколько записей
// для удаления, или запуска процедур
//Application.listbox.checks = false;

// Имя приложения
Application.name = 'Task Tracker';
// Заголовок приложения
Application.title = 'Task Tracker';

// Начальная форма - в качестве значения может принимать строку с именем BL-класса формы стартовой страницы,
// либо функцию, возвращающую строку с именем BL-класса формы стартовой страницы
//Application.startupForm = function() {
//	return User.parameters.systemInstalled ? 'org.zenframework.z8.template.StartPage' : null;
//};
