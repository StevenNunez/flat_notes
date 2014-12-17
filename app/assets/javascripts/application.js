// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require_tree .

var FlatNotes = Ember.Application.create();
FlatNotes.ApplicationAdapter = DS.ActiveModelAdapter.extend();

FlatNotes.Router.map(function(){
  this.resource('notes', function(){
    this.resource('note', {path: '/:note_id'})
    this.route('new');
  });
});

FlatNotes.NotesRoute = Ember.Route.extend({
  model: function(){
    return this.store.findAll('note')
  }
})
//
// FlatNotes.NoteRoute = Ember.Route.extend({
//   model: function(params){
//     return this.store.find('note', params.note_id)
//   }
// })

FlatNotes.NotesController = Ember.ArrayController.extend({
  noteCount: function(){
    return this.get('model.length')
  }.property('model.length')
})

FlatNotes.NotesNewController = Ember.Controller.extend({
  title: '',
  body: '',
  actions: {
    createNote: function(){
      var note = this.store.createRecord('note', {
        title: this.get('title'),
        body: this.get('body')
      });
      var controller = this;
      note.save().then(function(){
        controller.set('title','')
        controller.set('body','')
      })
    }
  }
})
