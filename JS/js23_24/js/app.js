requirejs.config({
   paths: {
   	'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery'
   },
   shim: {
   	'jquery': {
   		exports: 'jquery'
   	}
   }
});

require (
    ['jquery',
    'template',
    'model',
     'view',
     'records'],

function ($, template, model, view, records) {
	
	var firstToDoList = ['Phrase 1', 'Phrase 2', 'Phrase 3'];
	var model = new model.model(firstToDoList);
	var view = new view.view(model);
	var records = new records.records(model, view);

}

	);