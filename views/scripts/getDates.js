function getDates() {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Get the last modified date
    const lastModifiedDate = document.lastModified;

    // Update the footer's first paragraph with the current year
    const footerFirstParagraph = document.querySelector("footer p:first-child");
    footerFirstParagraph.textContent = `© ${currentYear} ✨Tafadzwa Chingore✨ Harare, Zimbabwe📍`;

    // Update the footer's second paragraph with the last modified date
    const footerSecondParagraph = document.querySelector("footer p:nth-child(2)");
    footerSecondParagraph.textContent = `Last modified: ${lastModifiedDate} `;
}

// Call the getDates function to dynamically update the dates in the document
getDates();
