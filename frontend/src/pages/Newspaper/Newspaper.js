import React from 'react';
import './Newspaper.css';

// Array of news items, each with properties like headline, content, image, and firstPage flag
const newsItems = [
  {
    headline: "Valuable Relics Stolen from Academy Archives",
    content: "In a shocking turn of events, highly valuable and confidential relics " +
    "have been stolen from the academy's archives. The theft, discovered during a " +
    "routine security check, involves items of significant historical and magical " +
    "importance. Authorities are investigating the breach and intensifying security " +
    "measures to prevent further incidents.",
    image: "/path/to/image1.jpg",
    firstPage: true // Flag indicating this news item should be shown on the first page
  },
  {
    headline: "Unidentified Creature Attacks Academy; Fatalities Prompt Increased Security Measures",
    content: "The academy was struck by a grave incident last night when an unidentified creature attacked the campus grounds, resulting in a fatality. The creature managed to escape before it could be fully identified or contained. In response to this tragic event, the administration is urgently enhancing security measures across the campus. Students and staff are advised to remain vigilant and report any suspicious activity immediately. The academy is collaborating with local magical experts to address the situation and ensure the safety of the campus community.",
    image: "/path/to/image2.jpg",
    firstPage: true // Flag indicating this news item should be shown on the first page
  },
  {
    headline: "Lacrosse Team Prepares for Championship Match",
    content: "The Crescent Moon Lycans are gearing up for the upcoming championship match against the Celestial Hawks from Starhaven Academy. With intense training and strategic preparations, the Crescent Moon Lycans are determined to bring home the trophy. Come out and support our players as they strive for victory!",
    image: "/path/to/image3.jpg",
    firstPage: false // Flag indicating this news item should not be shown on the first page
  },
  {
    headline: "Enchanted Forest Reopens with New Mystical Pathways",
    content: "After months of magical enhancements and maintenance, the Enchanted Forest on campus is set to reopen with newly created pathways and mystical features. Known for its whimsical flora and hidden mythical beings, the forest now includes guided trails offering interactive experiences with various enchantments. Explore areas like the Whispering Glade and the Glimmering Grove, each providing unique magical encounters and educational opportunities. Join us for the grand reopening event where you can embark on a magical tour and discover the newly unveiled marvels of the Enchanted Forest.",
    image: "/path/to/image4.jpg",
    firstPage: false // Flag indicating this news item should not be shown on the first page
  },
  {
    headline: "New Pet Care Course Offered This Semester",
    content: "This semester, we are excited to introduce a new course dedicated to the care and training of pets. The course will cover various aspects of pet care, from basic training to health and nutrition. Whether you have a magical pet or a more conventional companion, this course is designed to provide valuable knowledge and skills.",
    image: "/path/to/image5.jpg",
    firstPage: false // Flag indicating this news item should not be shown on the first page
  },
];

// Component to display news articles
function Newspaper() {
  return (
    <div className="newspaper-container">
      {/* Header for the newspaper page */}
      <header className="newspaper-header">
        <h1>The Eldergrove Echo</h1>
        <p>Get the inside scoop on the latest events, stories, and happenings from Crescent Moon Academy, alongside significant updates from the town of Eldergrove.</p>
      </header>

      {/* Iterate over the newsItems array and render each news article */}
      {newsItems.map((item, index) => (
        <article key={index} className="news-article">
          {/* Display the headline of the news article */}
          <h3 className="news-headline">{item.headline}</h3>
          {/* Conditionally render the image if it exists */}
          {item.image &&
            <img
              src={item.image}
              alt={item.headline}
              className="news-image"
            />
          }
          {/* Display the content of the news article */}
          <p className="news-content">{item.content}</p>
        </article>
      ))}
    </div>
  );
}

// Export both the component and the newsItems array
export default Newspaper;
export { newsItems };
