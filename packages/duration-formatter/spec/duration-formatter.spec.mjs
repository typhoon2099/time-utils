import { Duration } from '@time-utils/duration';
import DurationFormatter from '../src/duration-formatter.js';

describe('DurationFormatter', () => {
  describe('.clock', () => {
    it('returns formatted seconds', () => {
      const duration = new Duration(3_000);

      expect(DurationFormatter.clock(duration)).toEqual('03');
    });

    it('returns formatted minutes', () => {
      const duration = new Duration(120_000);

      expect(DurationFormatter.clock(duration)).toEqual('02:00');
    });

    it('returns formatted hours', () => {
      const duration = new Duration(36_000_000);

      expect(DurationFormatter.clock(duration)).toEqual('10:00:00');
    });

    it('returns formatted days', () => {
      const duration = new Duration(86_400_000);

      expect(DurationFormatter.clock(duration)).toEqual('01:00:00:00');
    });

    it('displays negative times', () => {
      const duration = new Duration(-63_000);

      expect(DurationFormatter.clock(duration)).toEqual('-01:03');
    });
  });
});
