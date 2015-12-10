Package.describe({
  git: 'https://github.com/hansoft/markdown-it.git',
  name: 'hansoft:markdown-it',
  summary: 'Markdown parser done right. Fast and easy to extend.',
  version: '5.0.2'
});

Package.onUse(function(api) {
  api.versionsFrom([ '1.0', '1.2' ]);

  api.use([
    'templating'
  ], { weak: true });

  api.export([
    'MarkdownIt',
    'markdownIt'
  ]);

  api.addFiles([
    'meteor/pre.js',
    'dist/markdown-it.js',
    'meteor/post.js'
  ]);

  api.addFiles('meteor/template-helper.js', 'client');
});
