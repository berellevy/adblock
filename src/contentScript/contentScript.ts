const rules: {
  [url: string]: () => void
} = {
  'https://www.nytimes.com/': filterNYTTechnology2,
}

function filterNYTTechnology() {
  const wrapper = document.querySelector('[data-testid="StandardAd"')
  wrapper.parentElement.removeChild(wrapper)
  console.log(wrapper)
}

function filterNYTTechnology2() {
  const divs = document.getElementsByTagName('div')
  for (const div of divs) {
    if (div.className.indexOf('ad') != -1) {
      div.style.display = 'none'
    }
  }
}


if (document.URL in rules) {
  console.log(document.URL)
  rules[document.URL]()
}