// The "fake" API response containing the structured script data.
const scriptData = {
  title: "The Terrifying Reason They Shut Down the Large Hadron Collider",
  author: "Q for EnigmaSpace",
  videoUrl: "https://www.youtube.com/watch?v=gHzJCs9-fC4",
  views: 20297,
  publicationDate: "2025-08-12",
  sections: [
    {
      paragraph:
        "Before the most powerful machine ever built by human hands was allowed to fire its first shot, a question had to be answered. It was not a question of budget, or engineering, or politics. It was a question of existence itself. The question was simple, and its implications were absolute: when we turn this machine on, will it destroy the world? This is not an exaggeration for effect. This was a genuine, scientifically grounded concern that had to be addressed before the Large Hadron Collider could collide its first particles. And at the heart of that concern was a theoretical object so terrifying, it sounds like something torn from the pages of cosmic horror. A particle that could eat the Earth from the inside out. They called it the strangelet.",
    },
    {
      heading: "The Anatomy of a World-Eater",
      paragraph:
        "To understand the strangelet, we must first descend into the subatomic realm. The world we see is built from atoms. The hearts of those atoms, the nuclei, are built from protons and neutrons. For a long time, we thought that was the end of the story. But we now know that protons and neutrons are themselves composite objects. They are tiny bags, each containing three smaller, more fundamental particles called quarks.",
    },
    {
      heading: "The Crucible: Forging Strangelets at the LHC",
      paragraph:
        "This world-ending scenario remained a purely theoretical curiosity for years, a fascinating 'what if' confined to the dense core of neutron stars or the first moments of the universe. It was a problem for astrophysicists, not for people living on Earth. Then, humanity decided to build the Large Hadron Collider.",
    },
  ],
};

// Function to render the script on the page
function renderScript() {
  // Populate the metadata
  document.getElementById("script-title").textContent = scriptData.title;
  document.getElementById("script-author").textContent = scriptData.author;
  document.getElementById("script-views").textContent =
    scriptData.views.toLocaleString();
  document.getElementById("script-video-link").href = scriptData.videoUrl;

  // Get the container for the script body
  const scriptBody = document.getElementById("script-body");

  // Loop through each section in the data and create HTML elements
  scriptData.sections.forEach((section) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "script-section";

    const heading = document.createElement("h2");
    heading.textContent = section.heading;

    const paragraph = document.createElement("p");
    paragraph.textContent = section.paragraph;

    sectionDiv.appendChild(heading);
    sectionDiv.appendChild(paragraph);
    scriptBody.appendChild(sectionDiv);
  });
}

// Run the render function when the page loads
renderScript();
