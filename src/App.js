import React from 'react';
import {  Greeting, ReaderCount, Headlines } from './components';
import './App.css';

function App() {

  return (
    <div className="news-reader">
      <h1>A Real State of Events</h1>
      <aside>
        <Greeting />
        <ReaderCount/>

        <img
          src="https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          alt="newspapers"
        />
      </aside>

      <section>
        <Headlines/>
      </section>
    </div>
  );
}

export default App;
