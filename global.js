// Function to replace an anchor element based on its text content
function replaceMintlifyLink() {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    if (
      link.href &&
      link.href.includes("mintlify.com") &&
      link.href.includes("poweredBy")
    ) {
      const newLink = document.createElement("a");
      newLink.href = "https://zite.com";
      newLink.textContent = "® 2026 Restly, Inc. DBA Zite";
      newLink.target = "_blank"; // Opens the link in a new tab
      newLink.rel = "noopener noreferrer"; // Security best practices for external links
      link.replaceWith(newLink);
    }
  });
}
replaceMintlifyLink();

/**
 * Below is to make "Forms" and "Zite" tags blue and red respectively.
 */

// Function to add classes to tags based on their text content
function addTagClasses() {
  const tagSpans = document.querySelectorAll(
    "div.px-1.flex.flex-wrap.gap-2.text-secondary span.inline-block.rounded-lg.text-sm.font-medium"
  );
  tagSpans.forEach((span) => {
    const text = span.textContent.trim();
    if (text === "Forms") {
      span.classList.add("forms-tag");
    } else if (text === "Zite") {
      span.classList.add("zite-tag");
    }
  });
}

// Call the functions
addTagClasses();

// Also run addTagClasses when DOM changes (for dynamic content)
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
      addTagClasses();
    }
  });
});

// Start observing
observer.observe(document.body, {
  childList: true,
  subtree: true,
});
