import parse from "html-react-parser"
import DOMPurify from "dompurify"

const useRenderHtml = (content) => {
  const sanitizedHTML = DOMPurify.sanitize(content)
  const transform = (node) => {
    switch (node.tagName) {
      case "img":
        delete node.attribs.style
        node.attribs.class = "m-auto"
        break
      case "p":
        delete node.attribs.style
        node.attribs.class = "text-ternary-700"
        break
      case "strong":
        delete node.attribs.style
        node.attribs.class = "text-ternary-700"
        break
      case "div":
        delete node.attribs.style
        node.attribs.class = "text-ternary-700"
        break
      case "span":
        delete node.attribs.style
        node.attribs.class = "text-ternary-700"
        break
      case "a":
        delete node.attribs.style
        node.attribs.class =
          "text-secondary-900 underline decoration-solid hover:text-2xl"
        node.attribs.target = "_blank"
        break
      case "ul":
        delete node.attribs.style
        node.attribs.class =
          "flex flex-col text-ternary-700 list-disc leading-none ml-6"
        break
      default:
        break
    }
  }
  const parsedHTML = parse(sanitizedHTML, { replace: transform })
  return parsedHTML
}

export { useRenderHtml }
