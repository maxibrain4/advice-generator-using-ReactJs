import { useEffect, useState } from "react";
import image1 from "./images/pattern-divider-desktop.svg";
import image2 from "./images/pattern-divider-mobile.svg";
function App() {
  const [text, setText] = useState([]);
  const fetchAdvice = async () => {
    try {
      const res = await fetch(`https://api.adviceslip.com/advice`);
      const data = await res.json();
      setText(data.slip);
    } catch (err) {
      console.error(err);
    }
  };
  // function handleClick() {

  // }

  useEffect(function () {
    fetchAdvice();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card-inside">
          <div className="idbox">
            <p className="id-text">Advice #{text.id}</p>
          </div>
          <div className="advicebox">
            <p className="advice-text">{text.advice}</p>
          </div>
          <div className="divider">
            <picture>
              <source media="max-width: 600px" srcSet={image2} />
              <source media="min-width: 600px" srcSet={image1} />
              <img src={image1} className="pix" alt="" />
            </picture>
          </div>
          <button className="btn" onClick={fetchAdvice}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                fill="#202733"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
