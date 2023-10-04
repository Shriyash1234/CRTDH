import React, { useState } from 'react';
import stringSimilarity from 'string-similarity';
import { MDBInput } from 'mdb-react-ui-kit';


const ScrollToSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

//   document.addEventListener("scroll", function () {
//     const stickyElement = document.getElementsByClassName('search-div')[0]
//     const scrollY = window.scrollY;

//     console.log(scrollY)
//     // Adjust this value to determine when the element becomes sticky
//     const scrollThreshold = 80;

//     if (scrollY > scrollThreshold) {
//         stickyElement.style.position = "fixed";
//         stickyElement.style.top = "95"; // You can adjust this value as needed
//     } else {
//         stickyElement.style.position = "relative";
//         stickyElement.style.top = "95"; // Restore the initial position
//     }
// }
//  );
window.addEventListener("scroll", function() {
  const headerHeight = 90;
  const stickyElement = document.querySelector(".search-div");

  // Calculate the threshold position where the element should become sticky
  const threshold = headerHeight;

  if (this.scrollY > threshold) {
      // Element becomes sticky
      stickyElement.style.position = "fixed";
      stickyElement.style.top = headerHeight + "px";
  } else {
      // Element returns to its normal position
      stickyElement.style.position = "static";
  }
});

const handleSearch = () => {
  const inputText = searchTerm.trim().toLowerCase();

  // Get all elements with IDs and their IDs as an array
  const elementsWithIds = document.querySelectorAll('[id]');
  const elementIds = Array.from(elementsWithIds, (element) => {
    // Clean up the ID to remove unwanted characters (e.g., td#phMeter => phMeter)
    return element.id.replace(/[^a-zA-Z0-9-_]/g, '').trim().toLowerCase();
  });

  // Find the closest matching ID
  const { bestMatchIndex } = stringSimilarity.findBestMatch(inputText, elementIds);

  // Define the offset (adjust this value as needed)
  const offset = 50; // You can change this value to control the scroll offset

  // Remove the "highlight" class from any previously highlighted elements
  const highlightedElements = document.querySelectorAll('.highlight');
  highlightedElements.forEach((el) => {
    el.classList.remove('highlight');
  });

  // Scroll to the closest matching element with the specified offset
  const closestMatchId = elementsWithIds[bestMatchIndex].id;
  const closestMatchElement = document.getElementById(closestMatchId);

  if (closestMatchElement) {
    closestMatchElement.classList.add('highlight');
    closestMatchElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
      offsetTop: -offset,
    });

    // Update the highlighted index
    setHighlightedIndex(bestMatchIndex);
  } else {
    alert(`No close match found for "${searchTerm}".`);
  }
};

const scrollToNextMatch = () => {
  // Check if there's a next match based on the current highlighted index
  if (highlightedIndex >= 0) {
    const elementsWithIds = document.querySelectorAll('[id]');
    const elementIds = Array.from(elementsWithIds, (element) => {
      return element.id.replace(/[^a-zA-Z0-9-_]/g, '').trim().toLowerCase();
    });

    const inputText = searchTerm.trim().toLowerCase();
    const remainingElementIds = elementIds.slice(highlightedIndex + 1);
    const { bestMatchIndex } = stringSimilarity.findBestMatch(inputText, remainingElementIds);

    // Update the highlighted index
    const newHighlightedIndex = bestMatchIndex + highlightedIndex + 1;
    const offset = 50

    if (newHighlightedIndex < elementsWithIds.length) {
      // Remove the "highlight" class from any previously highlighted elements
      const highlightedElements = document.querySelectorAll('.highlight');
      highlightedElements.forEach((el) => {
        el.classList.remove('highlight');
      });

      // Scroll to the next matching element with the specified offset
      const nextMatchId = elementsWithIds[newHighlightedIndex].id;
      const nextMatchElement = document.getElementById(nextMatchId);

      if (nextMatchElement) {
        nextMatchElement.classList.add('highlight');
        nextMatchElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
          offsetTop: -offset,
        });

        // Update the highlighted index
        setHighlightedIndex(newHighlightedIndex);
      }
    }
  }
};

  return (
    <div className='search-div'>
      <MDBInput
        className='search-input'
        type="text"
        placeholder="Enter the name of the instrument"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} className='search-btn'>Search</button>
      <button onClick={scrollToNextMatch} className='search-btn'>Next</button>
    </div>
  );
};

export default ScrollToSearch;
