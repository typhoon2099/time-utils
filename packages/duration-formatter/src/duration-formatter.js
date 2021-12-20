import { Duration } from '@time-utils/duration';

export default class DurationFormatter {
  /**
   * @param {Duration} duration
   */
  constructor(duration) {
    this.duration = duration;
  }

  template(string) {
    return string.replace('%l', this.duration.milliseconds);
  }
}
