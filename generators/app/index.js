
'use strict';

const yeoman = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');



module.exports = yeoman.Base.extend({

	constructor: function() {
		yeoman.Base.apply(this, arguments);
		this.argument('appName', {type: String, required: false});
	},

	prompting: function() {
		var done = this.async();
		this.log( this.templatePath('_bower.json'));

		this.config.save();
		 this.prompt({
		    type: 'input',
		    name: 'name',
		    message: 'Your project name',
		    //Defaults to the project's folder name if the input is skipped
		    default: this.appname
		  }, function(answers) {
		    this.props = answers
		    this.log(answers.name);

		    done();
		  }.bind(this));
	},

	writing: {
		config : function() {
			this.fs.copyTpl(
	              this.templatePath('_bower.json'),
	              this.destinationPath('/bower.json'),
	              { name: this.props.name }
	          );

			this.fs.copyTpl(
	              this.templatePath('_index.html'),
	              this.destinationPath('/index.html'),
	              { name: this.props.name }
	          );

			this.fs.copyTpl(
	              this.templatePath('_app.js'),
	              this.destinationPath('/scripts/app.js'),
	              { name: this.props.name }
	          );

			this.fs.copyTpl(
	              this.templatePath('_.gitignore'),
	              this.destinationPath('/.gitignore'),
	              { name: this.props.name }
	          );

			this.fs.copyTpl(
	              this.templatePath('_gulpfile.js'),
	              this.destinationPath('/gulpfile.js'),
	              { name: this.props.name }
	          );

			this.fs.copyTpl(
	              this.templatePath('_package.json'),
	              this.destinationPath('/package.json'),
	              { name: this.props.name }
	          );

		},
		install: function () {
            this.installDependencies({
                skipInstall: this.options['skip-install']
            });
        }


			
	          
	
    }

});