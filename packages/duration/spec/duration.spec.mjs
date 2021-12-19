import Duration from '../src/duration.js';

describe('Duration', () => {
  const testProperty = (property, milliseconds, expected) => {
    it(`returns ${expected} for ${milliseconds}`, () => {
      expect(new Duration(milliseconds)[property]).toEqual(expected);
    });
  };

  describe('new', () => {
    it('allows positive durations', () => {
      expect(() => { new Duration(1_000); }).not.toThrowError();
    });

    it('allows negative durations', () => {
      expect(() => { new Duration(-1_000); }).not.toThrowError();
    });

    it('allows zero millisecond durations', () => {
      expect(() => { new Duration(0); }).not.toThrowError();
    });

    it('does not allow non-integer numbers', () => {
      expect(() => { new Duration(1.1); })
        .toThrowError('milliseconds must be an Integer');
    });

    it('does not allow strings', () => {
      expect(() => { new Duration('number'); })
        .toThrowError('milliseconds must be an Integer');
    });
  });

  describe('#millisecond', () => {
    testProperty('milliseconds', 400, 400);
    testProperty('milliseconds', 1_500, 1_500);
    testProperty('milliseconds', -4_500, -4_500);
  });

  describe('#seconds', () => {
    testProperty('seconds', 5_000, 5);
    testProperty('seconds', 65_000, 65);
    testProperty('seconds', 4_500, 4);
    testProperty('seconds', -4_500, -4);
  });

  describe('#minutes', () => {
    testProperty('minutes', 60_000, 1);
    testProperty('minutes', 3_660_000, 61);
    testProperty('minutes', 70_000, 1);
    testProperty('minutes', -70_000, -1);
  });

  describe('#hours', () => {
    testProperty('hours', 3_600_000, 1);
    testProperty('hours', 90_000_000, 25);
    testProperty('hours', 3_660_000, 1);
    testProperty('hours', -90_000_000, -25);
  });

  describe('#days', () => {
    testProperty('days', 86_400_000, 1);
    testProperty('days', 86_400_001, 1);
    testProperty('days', -90_400_001, -1);
  });

  describe('#millisecond', () => {
    testProperty('millisecond', 400, 400);
    testProperty('millisecond', 1_500, 500);
    testProperty('millisecond', -4_500, -500);
  });

  describe('#second', () => {
    testProperty('second', 5_000, 5);
    testProperty('second', 65_000, 5);
    testProperty('second', 4_500, 4);
    testProperty('second', -4_500, -4);
  });

  describe('#minute', () => {
    testProperty('minute', 60_000, 1);
    testProperty('minute', 3_660_000, 1);
    testProperty('minute', 70_000, 1);
    testProperty('minute', -70_000, -1);
  });

  describe('#hour', () => {
    testProperty('hour', 3_600_000, 1);
    testProperty('hour', 90_000_000, 1);
    testProperty('hour', 3_660_000, 1);
    testProperty('hour', -90_000_000, -1);
  });

  describe('.between', () => {
    it('returns a Duration between two given dates', () => {
      const start = new Date('2021-01-01T00:00:00');
      const end = new Date('2021-01-01T00:01:00');

      expect(Duration.between(start, end)).toEqual(new Duration(60_000));
    });
  });

  describe('#minus', () => {
    it('returns a new Duration equal to the difference between the Durations', () => {
      const threeSeconds = new Duration(3_000);
      const oneSecond = new Duration(1_000);

      expect(threeSeconds.minus(oneSecond)).toEqual(new Duration(2_000));
    });

    it('returns a negative Duration', () => {
      const threeSeconds = new Duration(3_000);
      const oneSecond = new Duration(1_000);

      expect(oneSecond.minus(threeSeconds)).toEqual(new Duration(-2_000));
    });
  });

  describe('#valueOf', () => {
    it('returns the input milliseconds', () => {
      const duration = new Duration(1_000);

      expect(duration.valueOf()).toEqual(1_000);
    });
  });
});
