import React from 'react';
import styles from './App.module.scss';
import ClockPage from './components/ClockPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
function App() {
  return (
    <div className={styles.app}>
      <ClockPage />
      <Footer />
    </div>
  );
}

export default App;
