import Application from '--emberjs19251/app';
import config from '--emberjs19251/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
