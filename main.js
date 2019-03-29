function sleep() {
  return new Promise(resolve => {
    setTimeout(resolve, 500)
  })
}

async function main() {
  const elements = Array.from(document.querySelectorAll('div[id*=dfp-slot-]'))
  if (elements.length > 0) {
    Array.from(document.querySelectorAll('div[id*=dfp-slot-]')).forEach(e => e.remove())
    return
  }
  await sleep()
  main()
}

main()
