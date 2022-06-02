/**
 * Limits how often a function can be called.
 * @param {Function} cb A function to throttle.
 * @param {Int} wait The time, in milliseconds, to throttle by.
 * @returns {Function} The wrapper function responsible for the waits.
 */
function throttle(cb, wait = 100) {
  let time = Date.now()

  return function (...args) {
    if (time + wait - Date.now() < 0) {
      cb(...args)
      time = Date.now()
    }
  }
}

export default throttle
