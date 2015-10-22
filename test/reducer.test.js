import reducer from '../src/redux/reducer';
import assert from 'assert';


describe('reducers', () => {
  it('should return the initial state', () => {
    assert.deepEqual(reducer(undefined, {}), {answers: {}});
  })

});
