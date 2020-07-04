import React from 'react';
import styles from './App.module.scss';
import ClockPage from './components/ClockPage';

function App() {
  return (
    <div className={styles.app}>
      <ClockPage />
    </div>
  );
}

export default App;
