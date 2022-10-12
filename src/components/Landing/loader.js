import './loader.css';

const Loader = () => {
  return (
    <div className="logo-container">
      <svg width="155" height="155" viewBox="0 0 155 155" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M105.7 95.7C81.5 95.7 61.8 76 61.8 51.8C61.8 27.6 81.5 7.89999 105.7 7.89999C129.9 7.89999 149.6 27.6 149.6 51.8C149.6 76 129.9 95.7 105.7 95.7ZM105.7 11.9C83.7 11.9 65.8 29.8 65.8 51.8C65.8 73.8 83.7 91.7 105.7 91.7C127.7 91.7 145.6 73.8 145.6 51.8C145.6 29.8 127.7 11.9 105.7 11.9Z" fill="#00FFCC"/>
        <path d="M56.8 102.6C56.3 102.6 55.8 102.4 55.4 102L6.60001 53.2C6.20001 52.8 6 52.3 6 51.8C6 51.3 6.20001 50.8 6.60001 50.4L55.4 1.6C56.2 0.8 57.4 0.8 58.2 1.6L107 50.4C107.8 51.2 107.8 52.4 107 53.2L58.3 102C57.9 102.4 57.4 102.6 56.8 102.6ZM10.9 51.8L56.9 97.8L102.9 51.8L56.9 5.8L10.9 51.8Z" fill="#FF0066"/>
        <path d="M78.4 154.6C78.1 154.6 77.7 154.5 77.4 154.3L35.7 130.2C35.1 129.8 34.7 129.2 34.7 128.5V80.4C34.7 79.7 35.1 79 35.7 78.7L77.4 54.7C78 54.3 78.8 54.3 79.4 54.7L121.1 78.7C121.7 79.1 122.1 79.7 122.1 80.4V128.5C122.1 129.2 121.7 129.9 121.1 130.2L79.4 154.2C79 154.5 78.7 154.6 78.4 154.6ZM38.7 127.4L78.4 150.3L118.1 127.4V81.6L78.4 58.7L38.7 81.6V127.4V127.4Z" fill="#4BAFFF" className="loading"/>
        <path d="M105.7 95.7C104.6 95.7 103.7 94.8 103.7 93.7C103.7 92.6 104.6 91.7 105.7 91.7C127.7 91.7 145.6 73.8 145.6 51.8C145.6 50.7 146.5 49.8 147.6 49.8C148.7 49.8 149.6 50.7 149.6 51.8C149.6 76 129.9 95.7 105.7 95.7Z" fill="#00FFCC"/>
        <path d="M83.1 76.4C82.6 76.4 82.1 76.2 81.7 75.8C80.9 75 80.9 73.8 81.7 73L104.2 50.5C105 49.7 106.2 49.7 107 50.5C107.8 51.3 107.8 52.5 107 53.3L84.5 75.8C84.1 76.2 83.6 76.4 83.1 76.4Z" fill="#FF0066"/>
      </svg>
      <p className="loader-message">Loading…</p>
    </div>
  );
};

export default Loader;
