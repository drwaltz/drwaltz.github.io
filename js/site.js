window.addEvent('domready', function() {
var stretchers = $$('div.atStart');
var togglers = $$('h2.atStart');
var accordion = new Accordion(togglers, stretchers, {
display:0,
opacity: false,
onActive: function(togglers, stretchers){
togglers.setStyle('background', '#F2CD72'),
togglers.setStyle('color', '#222');
},
onBackground: function(togglers, stretchers){
// togglers.setStyle('background-color', '#F2BD39');
togglers.setStyle('color', '#222');
}
}, $('sidebar'));
});