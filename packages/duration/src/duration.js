export default class Duration {
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
}
