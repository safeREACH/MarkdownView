import MarkdownIt from 'markdown-it'
import emoji from 'markdown-it-emoji'
import './../css/bootstrap.css'
import './../css/index.css'

window.showMarkdown = (percentEncodedMarkdown, enableImage = true) => {

  if (!percentEncodedMarkdown) {
    return
  }

  const markdownText = decodeURIComponent(percentEncodedMarkdown)

  let markdown = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true
  })

  if (!enableImage) {
    markdown = markdown.disable('image')
  }

  markdown.use(emoji)

  let html = markdown.render(markdownText)

  document.getElementById('contents').innerHTML = html

  let tables = document.querySelectorAll('table')

  tables.forEach((table) => {
    table.classList.add('table')
  })
}
