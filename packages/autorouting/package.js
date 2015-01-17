Package.describe({
  summary: 'Automatically generate routes for prototyping',
  version: '0.1.0',
  name: 'sacha:autorouting'
});

Package.onUse(function (api) {

  api.use([
    'iron:router',
    'autopublish'
  ]);

  api.add_files([
    'autorouting.js',
  ], ['client', 'server']);

});