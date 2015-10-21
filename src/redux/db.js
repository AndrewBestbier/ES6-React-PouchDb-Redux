'use strict';

import store from './store';
import PouchDB from 'pouchdb';
import { fetchAnswers } from './actions';

//let db = createDB();
const db = new PouchDB('app-db');

//used for testing, removes all docs in db;
export function resetDB () {
  return db.allDocs({
    include_docs: true
  }).then((resp) => {
    const docs = resp.rows.map(row => {
      let doc = row.doc
      doc._deleted = true;
      return doc;
    });

    return db.bulkDocs(docs);
  });
}

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
