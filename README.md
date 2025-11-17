# Science Content API - A Technical Communication Project

This project showcases a practical application of API documentation and technical writing, using a real-world science script from a YouTube video as the source content.

The goal of this project is to demonstrate the ability to take unstructured creative content (a video script) and transform it into structured, developer-friendly data delivered via a documented API. This repository includes both the complete API specification and a live front-end demo that consumes and renders the content.

## Project Highlights

*   **Real-World Content:** The data source is the script for the video "The Terrifying Reason They Shut Down the Large Hadron Collider," which has over 20,000 views.
*   **Blended Skills:** This project combines STEM scriptwriting with API documentation, a valuable skill set for companies creating developer-facing educational content.

## Project Components

### 1. The API Specification (`openapi.yaml`)

The formal documentation for the API, written in YAML using the OpenAPI 3.0 specification.

*   **Endpoint:** Defines a simple `GET /script` endpoint to retrieve the full script object.
*   **Data Model:** Includes a detailed schema for the `Script` resource, breaking the content into structured metadata (`title`, `author`, `views`) and a body composed of distinct sections (`heading`, `paragraph`).

### 2. The Interactive Live Demo

A live webpage that simulates a client application calling the API and rendering the script as a clean, readable article.

*   **Technologies:** Built with semantic HTML, modern CSS for styling, and JavaScript to dynamically load the content from a structured data object.
*   **Functionality:** On page load, the JavaScript parses the script data and populates the title, metadata, and section content, demonstrating a real-world use case for the API.

---

This project serves as a comprehensive example of the technical writer's role in the content lifecycle: from creating the initial subject matter, to structuring it for technical audiences, to building a functional example of its implementation.
