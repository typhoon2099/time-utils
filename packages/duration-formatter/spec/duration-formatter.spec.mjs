import { Duration } from '@time-utils/duration';
import DurationFormatter from '../src/duration-formatter.js';

describe('DurationFormatter', () => {
  describe('.clock', () => {
    it('returns formatted seconds', () => {
      const duration = new Duration(3_000);
      const formatter = new DurationFormatter(duration);

      expect(formatter.clock()).toEqual('03');
    });

    it('returns formatted minutes', () => {
      const duration = new Duration(120_000);
      const formatter = new DurationFormatter(duration);

      expect(formatter.clock()).toEqual('02:00');
    });

    it('returns formatted hours', () => {
      const duration = new Duration(36_000_000);
      const formatter = new DurationFormatter(duration);

      expect(formatter.clock()).toEqual('10:00:00');
    });

    it('displays negative times', () => {
      const duration = new Duration(-63_000);
      const formatter = new DurationFormatter(duration);

      expect(formatter.clock()).toEqual('-01:03');
    });


    // Milliseconds
    // Days
  });
});
