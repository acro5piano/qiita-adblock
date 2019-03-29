function main() {
  Array.from(document.querySelectorAll('div[id*=dfp-slot-]')).forEach(e => e.remove())
}

setTimeout(main, 100)
