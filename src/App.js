import React from 'react';
import './App.css'; // Import the CSS file

const NewsArticle = ({ article }) => {
  return (
    <div className="news-article">
      <a href={article.homeUrl} className="home-button">Home</a>
      <img src={article.logo} alt="Publication Logo" className="publication-logo" />
      <hr className="separator" />
      <h2>{article.title}</h2>
      <div className="overview"><b>Overview:</b> {article.overview}</div>
      <div className="article-meta">
        <span className="date-time">{article.date} | {article.time}</span>
        <span className="publication">{article.publication}</span>
      </div>
      <img src={article.image} alt={article.title} className="article-image" />
      <p>{article.content}</p>
    </div>
  );
};

// Define your main App component
const App = () => {
  // Sample article data
  const article = {
    title: "Recent Developments in the Israel-Palestine Conflict",
    date: '22 Nov 2023',
    time: '10:00 AM',
    publication: 'THE DAILY BUGLE',
    homeUrl: 'https://daily-bugle-ej94.vercel.app/', // replace with your home URL
    logo: '../logo.jpg', // replace with the path to your logo
    overview: `In October 2023, a significant escalation in the Israeli-Palestinian conflict occurred when Hamas attacked Israel, leading to a deadly retaliation from Israel. This resulted in a humanitarian crisis in Gaza with severe shortages of essentials and displacement of Palestinians. The situation has also raised concerns for neighboring countries like Egypt and Jordan due to potential influx of refugees and security risks.`,
    content: `In early October 2023, war broke out between Israel and Hamas, the
    militant Islamist group that has controlled Gaza since 2006, in the
    most significant escalation of the Israeli-Palestinian conflict in
    several decades. Hamas fighters fired rockets into Israel and stormed
    southern Israeli cities and towns across the border of the Gaza
    Strip, killing more than 1,300 Israelis, injuring 3,300,
    and taking hundreds of hostages. The attack took Israel by surprise,
    though the state quickly mounted adeadly retaliatory operation.
    One day after the October 7 attack, the Israeli cabinet
    formally declared war against Hamas, followed by a directive from
    the defense minister to the Israel Defense Forces (IDF) to carry out
    a "complete siege" of Gaza.
    Since then, the two sides have traded daily rocket fire, and
    Israel ordered more than one million Palestinian civilians in
    northern Gaza to evacuate ahead of a ground invasion that began
    on October 28. Israeli forces have encircled Gaza City, cutting it off
    from southern Gaza and squeezing Hamas. Hundreds of thousands
    of civilians remain in the city. Gazan health officials say the war
    has killed 10,000 Palestinians, including more than 4,000 children.
    The territory is also desperately low on water, fuel, and supplies as
    Israel has rejected humanitarian pauses and limited the amount of
    aid that can enter.
    The displacement of millions more Palestinians presents a dilemma
    for Egypt and Jordan, which have absorbed hundreds of thousands
    of Palestinians in the past but have resisted accepting anyone
    during the current war. They fear that Gazans, many of whom were
    already displaced from elsewhere in Israel, will not be allowed to
    return once they leave. Egypt also fears that Hamas fighters could
    enter Egypt and trigger a new war in the Sinai by launching attacks
    on Israel or destabilizing the authoritarian regime of Abdel Fattah
    el-Sisi by supporting the Muslim Brotherhood. So far, negotiations
    have resulted in only 1,100 people exiting Gaza through the Rafah
    border crossing to Egypt. The other 1.5 million displaced Gazans—
    70 percent of the territory's population—have nowhere to go and
    face increasingly dire living conditions and security risks.`,
    image: '../photo.avif' // replace with the path to your image
  };

  return (
    <div className="App">
      <NewsArticle article={article} />
    </div>
  );
};

export default App;
