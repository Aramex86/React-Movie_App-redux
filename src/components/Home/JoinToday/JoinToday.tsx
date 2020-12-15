import React from 'react';

const JoinToday = () => {
  return (
    <div className="joinwrapp">
      <div className="joinwrapp__header">
        <h2>Join Today</h2>
      </div>
      <div className="joinwrapp__body">
        <div className="joinwrapp__body__desc">
          <p>
            Get access to maintain your <i>own custom personal lists, track what
            you've seen</i> and search and filter for<i> what to watch</i> next—regardless
            if it's in theatres, on TV or available on popular streaming
            services like Netflix, Amazon Prime Video, hayu, and Now TV.
          </p>
          <button className="btn btn--join">Sign Up</button>
        </div>
        <ul className="joinwrapp__body__list">
          <li className="joinwrapp__body__list__item">
            Enjoy TMDb ad free Contribute to and improve our database
          </li>
          <li className="joinwrapp__body__list__item">Maintain a personal watchlist</li>
          <li className="joinwrapp__body__list__item">
            Filter by your subscribed streaming services and find something to
            watch
          </li>
          <li className="joinwrapp__body__list__item">Log the movies and TV shows you've seen</li>
          <li className="joinwrapp__body__list__item">Build custom lists</li>
        </ul>
      </div>
    </div>
  );
};

export default JoinToday;
