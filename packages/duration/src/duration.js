export default class Duration {
  static #MILLISECONDS_PER_SECOND = 1_000;
  static #SECONDS_PER_MINUTE = 60;
  static #MINUTES_PER_HOUR = 60;
  static #HOURS_PER_DAY = 24;

  static #SECOND = 1_000;
  static #MINUTE = 60_000;
  static #HOUR = 3_600_000;
  static #DAY = 86_400_000;

  /**
   * @param {Number} milliseconds
   */
  constructor(milliseconds) {
    if (!Number.isInteger(milliseconds)) {
      throw new Error('milliseconds must be an Integer');
    }

    this.milliseconds = milliseconds;
  }

  get seconds() {
    return Math.trunc(this.milliseconds / Duration.#SECOND);
  }

  get minutes() {
    return Math.trunc(this.milliseconds / Duration.#MINUTE);
  }

  get hours() {
    return Math.trunc(this.milliseconds / Duration.#HOUR);
  }

  get days() {
    return Math.trunc(this.milliseconds / Duration.#DAY);
  }

  get second() {
    return this.seconds % Duration.#SECONDS_PER_MINUTE;
  }

  get millisecond() {
    return this.milliseconds % Duration.#MILLISECONDS_PER_SECOND;
  }

  get minute() {
    return this.minutes % Duration.#MINUTES_PER_HOUR;
  }

  get hour() {
    return this.hours % Duration.#HOURS_PER_DAY;
  }

  /**
   * @param {Duration} duration
   */
  minus(duration) {
    return new Duration(this - duration);
  }

  valueOf() {
    return this.milliseconds;
  }

  /**
   * @param {Date} start
   * @param {Date} end
   */
  static between(start, end) {
    return new Duration(end - start);
  }
};
