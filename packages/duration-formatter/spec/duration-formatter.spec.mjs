import { Duration } from '@time-utils/duration';
import DurationFormatter from '../src/duration-formatter.js';

describe('DurationFormatter', () => {
  describe('#template', () => {
    it('shows millisecond', () => {
      let duration = new Duration(30);
      let formatter = new DurationFormatter(duration);

      expect(formatter.template('%l')).toEqual('30');
    });
  });
});
