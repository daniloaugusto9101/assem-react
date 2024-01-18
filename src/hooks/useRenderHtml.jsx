import parse from "html-react-parser"
import DOMPurify from "dompurify"

const useRenderHtml = (content) => {
  const sanitizedHTML = DOMPurify.sanitize(content)
  const transform = (node) => {
    switch (node.tagName) {
      case "p":
        delete node.attribs.style
        node.attribs.class = "text-ternary-700"
        break
      case "span":
        delete node.attribs.style
        node.attribs.class = "text-secondary-600"
        break
      case "a":
        delete node.attribs.style
        node.attribs.class = "text-secondary-900 underline decoration-solid"
        node.attribs.target = "_blank"
        break
      default:
        break
    }
  }
  const parsedHTML = parse(sanitizedHTML, { replace: transform })
  return parsedHTML
}

export { useRenderHtml }
