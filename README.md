# Science Content API

A REST-style API that delivers structured scientific scripts for educational content platforms. This API separates content (headings, paragraphs) from metadata (views, author), allowing developers to build custom frontend displays for long-form articles.

**[View Live Demo](https://quniversum.github.io/youtube-science-script-api/)** | **[View OpenAPI Spec](openapi.yaml)**

## 🚀 Quick Start

You can fetch the script data directly using JavaScript or cURL.

### Fetch with JavaScript
```javascript
fetch('https://quniversum.github.io/youtube-science-script-api/script.json')
  .then(response => response.json())
  .then(data => console.log(data));
