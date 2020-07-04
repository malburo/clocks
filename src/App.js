import React from 'react';
import styles from './App.module.scss';
import ClockPage from './components/ClockPage';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className={styles.app}>
      <ClockPage />
    </div>
  );
}

export default App;
