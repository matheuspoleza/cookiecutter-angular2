import {join} from 'path';
import {AppConfig} from './{{cookiecutter.app_name}}.config';
import {InjectableDependency} from './{{cookiecutter.app_name}}.config.interfaces';

export class ProjectConfig extends AppConfig {
  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    let additional_deps: InjectableDependency[] = [
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    const appDependencies = this.NPM_DEPENDENCIES;

    this.NPM_DEPENDENCIES = appDependencies.concat(additional_deps);
  }
}
