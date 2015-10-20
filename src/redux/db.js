'use strict';

import store from './store';
import PouchDB from 'pouchdb';
import { fetchAnswers } from './actions';

let db = new PouchDB('app');

db.changes({
  live: true,
  include_doc: true,
  since: 'now'
}).on('change', changeCallback.bind(this))
  .on('error', console.log.bind(console));

function changeCallback(change) {
  store.dispatch(fetchAnswers());
}

export default db;
