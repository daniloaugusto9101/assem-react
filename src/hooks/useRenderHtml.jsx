import parse from "html-react-parser"
import DOMPurify from "dompurify"

// const useRenderHtml = (content) => {
//   const sanitizedHTML = DOMPurify.sanitize(content)
//   const parsedHTML = parse(sanitizedHTML)
//   return parsedHTML
// }

const useRenderHtml = (content) => {
  const sanitizedHTML = DOMPurify.sanitize(content)
  const transform = (node) => {
    switch (node.tagName) {
      case "h1":
        node.attribs.class = "h1-formatting"
        break
      case "p":
        node.attribs.class = "p-formatting"
        break
      default:
        break
    }
  }
  const parsedHTML = parse(sanitizedHTML, { replace: transform })
  return parsedHTML
}

export { useRenderHtml }
