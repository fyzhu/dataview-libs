export function debounce(delay, callback) {
  let task
  const test = async () => {}
  return function() {
    clearTimeout(task)
    task = setTimeout(() => {
      callback.apply(this, arguments)
    }, delay)
  }
}
