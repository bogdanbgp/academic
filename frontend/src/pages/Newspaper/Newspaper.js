import React from 'react';
import './Newspaper.css';
// Corrected import paths for the images
import image1 from '../../resources/images/image1.jpg';
import image2 from '../../resources/images/image2.jpg';
import image3 from '../../resources/images/image3.jpg';
import image4 from '../../resources/images/image4.jpg';
import image5 from '../../resources/images/image5.jpg';

// Array containing news articles with details such as headline, content, image, and a flag for first-page display
const newsItems = [
  {
    headline: "Valuable Relics Stolen from Academy Archives",
    content: "In a shocking turn of events, highly valuable and confidential relics " +
      "have been stolen from the academy's archives. The theft, discovered during a " +
      "routine security check, involves items of significant historical and magical " +
      "importance. Authorities are investigating the breach and intensifying security " +
      "measures to prevent further incidents.",
    image: image1, // Use the imported image
    firstPage: true,
  },
  {
    headline: "Unidentified Creature Attacks Academy; Fatalities Prompt Increased Security Measures",
    content: "The academy was struck by a grave incident last night when an unidentified " +
      "creature attacked the campus grounds, resulting in a fatality. The creature " +
      "managed to escape before it could be fully identified or contained. In response " +
      "to this tragic event, the administration is urgently enhancing security measures " +
      "across the campus. Students and staff are advised to remain vigilant and report " +
      "any suspicious activity immediately. The academy is collaborating with local " +
      "magical experts to address the situation and ensure the safety of the campus community.",
    image: image2, // Use the imported image
    firstPage: true,
  },
  {
    headline: "Lacrosse Team Prepares for Championship Match",
    content: "The Crescent Moon Lycans are gearing up for the upcoming championship match " +
      "against the Celestial Hawks from Starhaven Academy. With intense training and " +
      "strategic preparations, the Crescent Moon Lycans are determined to bring home the " +
      "trophy. Come out and support our players as they strive for victory!",
    image: image3, // Use the imported image
    firstPage: false,
  },
  {
    headline: "Enchanted Forest Reopens with New Mystical Pathways",
    content: "After months of magical enhancements and maintenance, the Enchanted Forest " +
      "on campus is set to reopen with newly created pathways and mystical features. " +
      "Known for its whimsical flora and hidden mythical beings, the forest now includes " +
      "guided trails offering interactive experiences with various enchantments. Explore " +
      "areas like the Whispering Glade and the Glimmering Grove, each providing unique " +
      "magical encounters and educational opportunities. Join us for the grand reopening " +
      "event where you can embark on a magical tour and discover the newly unveiled " +
      "marvels of the Enchanted Forest.",
    image: image4, // Use the imported image
    firstPage: false,
  },
  {
    headline: "New Pet Care Course Offered This Semester",
    content: "This semester, we are excited to introduce a new course dedicated to the care " +
      "and training of pets. The course will cover various aspects of pet care, from basic " +
      "training to health and nutrition. Whether you have a magical pet or a more " +
      "conventional companion, this course is designed to provide valuable knowledge and " +
      "skills.",
    image: image5, // Use the imported image
    firstPage: false,
  },
];

// Main component for rendering the newspaper
function Newspaper() {
  return (
    <div className="newspaper-container">
      {/* Newspaper header */}
      <header className="newspaper-header">
        <h1>The Eldergrove Echo</h1>
        <p>
          Get the inside scoop on the latest events, stories, and happenings from
          Crescent Moon Academy, alongside significant updates from the town of Eldergrove.
        </p>
      </header>

      {/* Render each news item dynamically */}
      {newsItems.map((item, index) => (
        <article key={index} className="news-article">
          <h3 className="news-headline">{item.headline}</h3>
          {item.image && (
            <img
              src={item.image}
              alt={item.headline}
              className="news-image"
            />
          )}
          <p className="news-content">{item.content}</p>
        </article>
      ))}
    </div>
  );
}

// Export the component and the news items array
export default Newspaper;
export { newsItems };
