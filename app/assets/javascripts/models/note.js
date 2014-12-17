// for more details see: http://emberjs.com/guides/models/defining-models/

FlatNotes.Note = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  priorityLevel: DS.attr('string')
});
