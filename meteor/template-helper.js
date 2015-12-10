if (!Package.templating) {
  return;
}

var Blaze = Package.blaze.Blaze;
var HTML = Package.htmljs.HTML;
var Template = Package.templating.Template;

Template.registerHelper('markdown', new Template('markdown', function() {
  var view = this;
  var content = '';
  if (view.templateContentBlock) {
    content = Blaze._toText(view.templateContentBlock, HTML.TEXTMODE.STRING);
  }
  return HTML.Raw(markdownIt.render(content));
}));
