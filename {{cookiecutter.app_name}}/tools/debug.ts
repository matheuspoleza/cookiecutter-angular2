import {argv} from 'yargs';
import * as gulp from 'gulp';

require('../gulpfile');

const TASK = argv['task'];

if (!TASK) {
  throw new Error('You must specify a task name.');
}

console.log('**********************');
console.log('* {{cookiecutter.project_name}} tools ');
console.log('* debugging task:', TASK);
console.log('**********************');

gulp.start(TASK);
