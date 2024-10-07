import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component for navigation
import './Home.css'; // Import the CSS file
import { newsItems } from '../Newspaper/Newspaper'; // Import newsItems from Newspaper.js

// Function to filter news items flagged for the first page
const getFirstPageNews = () => {
  // Filter the newsItems array to include only those flagged as 'firstPage'
  return newsItems.filter(news => news.firstPage);
}

// Function to truncate content to a specified length
const truncateContent = (content, length) => {
  return content.length > length ? content.substring(0, length) + '...' : content;
}

function Home() {
  // Get the filtered list of first-page news items
  const firstPageNews = getFirstPageNews();

  return (
    <div className="home-container">
      {/* Header section with the main welcome message */}
      <header className="home-header">
        <h1>Welcome to Crescent Moon Academy</h1>
        <p>Explore our mystical and enchanted world where learning meets the extraordinary.</p>
      </header>

      {/* Section for displaying breaking news */}
      <section className="home-news">
        <h2>Breaking News</h2>
        {/* Map through the firstPageNews array to render each news article */}
        {firstPageNews.map((item, index) => (
          <article key={index} className="news-article">
            {/* Display the headline of the news article */}
            <h3 className="news-headline">{item.headline}</h3>
            {/* Conditionally render the image if it exists */}
            {item.image && <img src={item.image} alt={item.headline} className="news-image" />}
            {/* Display the truncated content of the news article */}
            <p className="news-content">{truncateContent(item.content, 200)}</p>
            {/* Button to navigate to the full newspaper */}
            <Link to="/newspaper">
              <button className="read-more-button">Read More...</button>
            </Link>
          </article>
        ))}
      </section>

      {/* Section for notable updates */}
      <section className="home-notable">
        <h2>Weekly Updates</h2>
        <div className="notables-container">
          {/* Student of the Week */}
          <div className="notable-item">
            <h3>Student of the Week</h3>
            <p>We proudly acknowledge Emily Bright for her outstanding accomplishments in magical studies. Her dedication and brilliance set a new standard for excellence!</p>
          </div>

          {/* Student Council Election */}
          <div className="notable-item">
            <h3>Student Council Election</h3>
            <p>This week, Crescent Moon Academy is electing a new Student Council President. Voting will be open from Monday to Wednesday. Be sure to participate and help choose our next leader!</p>
          </div>

          {/* Principal’s Announcement */}
          <div className="notable-item">
            <h3>Principal’s Announcement</h3>
            <p>Dear Students and Faculty,</p>
            <p>I am delighted to announce our upcoming "Eclipse Ball" to celebrate Crescent Moon Academy's 60th anniversary. This enchanting evening will feature live music, a grand banquet in the Great Hall, and a special ceremony honoring our distinguished alumni. I warmly invite all of you to join us for this memorable event. Further details and invitations will be shared later this week. Let's make this a night to cherish!</p>
            <p>Warm regards,</p>
            <p>Principal Alaric Nightshade</p>
          </div>

          {/* Staff Recognition */}
          <div className="notable-item">
            <h3>Staff Recognition</h3>
            <p>We extend our heartfelt gratitude to all our dedicated staff members who work tirelessly behind the scenes. A special mention goes to Mr. Sylvester Finn, our exceptional groundskeeper, for his unwavering commitment to maintaining the beauty and magic of our campus. His efforts, along with those of many others, contribute significantly to the vibrant and enchanting environment we all enjoy. Thank you for your hard work and dedication!</p>
          </div>

        </div>
      </section>

      {/* Section for the "Try-Your-Luck" game */}
      <section className="home-colors">
        <h2>Today's Try-Your-Luck</h2>
        <p>
          Choose a color and test your luck! Only one color hides the prize—pick wisely. The others? Well, there's always next time!
        </p>
        <div className="color-options">
          {/* Buttons for color choices with respective alert messages */}
          <button onClick={() => alert('Congratulations! The color Purple is your lucky choice today! You’ve won a magical charm!')}>
            Purple
          </button>
          <button onClick={() => alert('Sorry, Red wasn’t the lucky color today. Better luck next week!')}>
            Red
          </button>
          <button onClick={() => alert('Sorry, Blue wasn’t the lucky color today. Better luck next week!')}>
            Blue
          </button>
          <button onClick={() => alert('Sorry, Green wasn’t the lucky color today. Better luck next week!')}>
            Green
          </button>
        </div>
        <p>Check back next week to try your luck again!</p>
      </section>


    </div>
  );
}

export default Home;
