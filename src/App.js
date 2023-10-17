import { useState } from "react";
import "./index.css";

function App() {
  const [cards] = useState([
    {
      title: "Card-1",
      Text: "AAAAAAAAAAAAAAAAAAAAA"
    },

    {
      title: "Card-2",
      Text: "AAAAAAAAAAAAAAAAAAAAA"
    },
    {
      title: "Card-3",
      Text: "AAAAAAAAAAAAAAAAAAAAA"
    },
    {
      title: "Card-4",
      Text: "AAAAAAAAAAAAAAAAAAAAA"
    },
    {
      title: "Card-5",
      Text: "AAAAAAAAAAAAAAAAAAAAA"
    },
    {
      title: "Card-6",
      Text: "AAAAAAAAAAAAAAAAAAAAAA"
    }
  ]);
  return (
    <div>
      <section>
        <div className="container">
          <h1>cards responsivos?</h1>
          <div className="cards">
            {cards.map((card, i) => (
              <div key={i} className="card">
                <h3>{card.title}</h3>
                <p>{card.Text}</p>
                <button className="btn">inscreva-se</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
