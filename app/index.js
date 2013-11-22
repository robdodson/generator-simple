'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var SimpleGenerator = module.exports = function SimpleGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(SimpleGenerator, yeoman.generators.Base);

// SimpleGenerator.prototype.askFor = function askFor() {
//   var cb = this.async();

//   // have Yeoman greet the user.
//   console.log(this.yeoman);

//   var prompts = [{
//     type: 'confirm',
//     name: 'someOption',
//     message: 'Would you like to enable this option?',
//     default: true
//   }];

//   this.prompt(prompts, function (props) {
//     this.someOption = props.someOption;

//     cb();
//   }.bind(this));
// };

SimpleGenerator.prototype.app = function app() {
  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  this.template('_index.html', 'index.html');
  this.copy('main.css', 'styles/main.css');
  this.copy('main.js', 'scripts/main.js');
};

SimpleGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};

SimpleGenerator.prototype.gitfiles = function gitfiles() {
  this.copy('gitattributes', '.gitattributes');
  this.copy('gitignore', '.gitignore');
};
