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

### cURL Request
curl -X GET https://quniversum.github.io/youtube-science-script-api/script.json

📡 API Reference
Get Script
Retrieves the full scientific article including metadata and sectioned content.[1]
Endpoint:
GET /script.json (Simulated)
Response Example:

{
  "title": "The Terrifying Reason They Shut Down the Large Hadron Collider",
  "author": "Kaona P.",
  "metadata": {
    "views": 24000,
    "category": "Physics",
    "publishDate": "2025-06-15"
  },
  "content": [
    {
      "type": "heading",
      "text": "The Proton Beam Energy"
    },
    {
      "type": "paragraph",
      "text": "Inside the 27-kilometer ring, protons accelerate to 99.99% the speed of light..."
    }
  ]
}

[1]
💾 Data Model
Field	Type	Description
title	String	The headline of the video/article.
author	String	The content creator or scriptwriter.[1]
metadata	Object	Statistics and categorization tags.[1]
content	Array	An ordered list of content blocks (Headings, Paragraphs).[1]

🛠 Local Installation[1]
To run this documentation portal and demo locally:
1. Clone the repository

git clone https://github.com/quniversum/youtube-science-script-api.git
```[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fgithub.com%2Fquniversum%2Fyoutube-science-script-api)]

2. Open index.html
You can open the file directly in your browser, or use a local server:
# If you have Python installed
python3 -m http.server
```[[1](https://www.google.com/url?sa=E&q=https%3A%2F%2Fgithub.com%2Fquniversum%2Fyoutube-science-script-api)]

📝 Project Context
Source Material: Script based on real-world physics content regarding the LHC (Large Hadron Collider).
Tech Stack: HTML5, CSS3, Vanilla JavaScript, OpenAPI 3.0.
Purpose: Demonstrates Docs-as-Code workflow by treating script content as structured API data rather than static text.
