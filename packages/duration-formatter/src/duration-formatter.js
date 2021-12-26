export default class DurationFormatter {
  static #SECONDS_PER_MINUTE = 60;
  static #MINUTES_PER_HOUR = 60;
  static #HOURS_PER_DAY = 24;

  /**
   * @param {Duration} duration
   */
  constructor(duration) {
    this.duration = duration;
  }

  static #second(seconds) {
    return seconds % DurationFormatter.#SECONDS_PER_MINUTE;
  }

  static #minute(minute) {
    return minute % DurationFormatter.#MINUTES_PER_HOUR;
  }

  static #hour(hours) {
    return hours % DurationFormatter.#HOURS_PER_DAY;
  }

  static clock(duration) {
    let negative = false;
    const { days, hours, minutes, seconds } = duration;

    if (duration.milliseconds < 0) {
      negative = true;
    }

    let parts = [
      Math.abs(days),
      DurationFormatter.#hour(Math.abs(hours)),
      DurationFormatter.#minute(Math.abs(minutes)),
      DurationFormatter.#second(Math.abs(seconds)),
    ];

    while (parts[0] === 0) {
      parts.shift();
    }

    return `${negative ? '-' : ''}${parts.map(part => part.toString().padStart(2, '0')).join(':')}`;
  }
}
