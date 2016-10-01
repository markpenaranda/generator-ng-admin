
'use strict';

const yeoman = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');



module.exports = yeoman.Base.extend({

	constructor: function() {
		yeoman.Base.apply(this, arguments);
		this.argument('entityName', {type: String, required: false});
	},

	prompting: function() {
		var done = this.async();

		this.config.save();
		 this.prompt({
		    type: 'input',
		    name: 'entityName',
		    message: 'Type entity name',
		    //Defaults to the project's folder name if the input is skipped
		    
		  }, function(answers) {
		    this.props = answers
		    this.log(answers.name);

		    done();
		  }.bind(this));
	},

	writing: {

		config : function() {

			const entity_name = this.props.entityName;

			this.fs.copyTpl(
	              this.templatePath('_config.js'),
	              this.destinationPath('scripts/' + this.props.entityName +'/config.js'),
	              { entityName: this.props.entityName }
	          );


			this.fs.copy(this.destinationPath('scripts/app.js'), this.destinationPath('scripts/app.js'), {
			    process: function(content) {

			        /* Any modification goes here. Note that contents is a Buffer object */

			        var regEx = new RegExp('/\/\ End Entities', 'g');
			        var regEx_Conf = new RegExp('/\/\ End of Configure Entities', 'g');

			        var declareEntityString = "	admin.addEntity(nga.entity('"+ entity_name + "'));   \n // End Entites";
			        var configEntityString = "	require('./"+ entity_name + "/config')(nga, admin);   \n // End of Configure Entities";

			        var newContent = content.toString().replace(regEx, declareEntityString);
			        var finalContent = newContent.toString().replace(regEx_Conf, configEntityString);
			        return finalContent;
			    }
			});
		}

	}

});