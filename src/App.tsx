import "./styles.scss";

function App() {
  const team = [
    {
      name: "Lars Teichmann",
      portrait: "./portrait-01.jpg",
    },
    {
      name: "Eva Pfannes",
      portrait: "./portrait-02.jpg",
    },
    {
      name: "Kenneth Bostock",
      portrait: "./portrait-03.jpg",
    },
    {
      name: "Stephane Hof",
      portrait: "./portrait-01.jpg",
    },
    {
      name: "Djordje Stojanovic",
      portrait: "./portrait-02.jpg",
    },
    {
      name: "Leyre Villoria",
      portrait: "./portrait-03.jpg",
    },
    {
      name: "Liam Young",
      portrait: "./portrait-01.jpg",
    },
    {
      name: "Christiane Fashek",
      portrait: "./portrait-02.jpg",
    },
    {
      name: "Manuela Gatto",
      portrait: "./portrait-03.jpg",
    },
    {
      name: "Tina Gregoric",
      portrait: "./portrait-01.jpg",
    },
    {
      name: "Cesare Griffa",
      portrait: "./portrait-02.jpg",
    },
    {
      name: "Yasha Jacob Grobman",
      portrait: "./portrait-03.jpg",
    },
    {
      name: "Filippo Innocenti",
      portrait: "./portrait-01.jpg",
    },
    {
      name: "Zetta Kotsioni",
      portrait: "./portrait-02.jpg",
    },
    {
      name: "Debora Laub",
      portrait: "./portrait-03.jpg",
    },
    {
      name: "Sarah Manning",
      portrait: "./portrait-01.jpg",
    },
    {
      name: "Maurizio Meossi",
      portrait: "./portrait-02.jpg",
    },
    {
      name: "Robert Sedlak",
      portrait: "./portrait-03.jpg",
    },
    {
      name: "Niki Neerpasch",
      portrait: "./portrait-01.jpg",
    },
    {
      name: "Eric Tong",
      portrait: "./portrait-02.jpg",
    },
    {
      name: "Tiago Correia",
      portrait: "./portrait-03.jpg",
    },
  ];

  return (
    <main>
      <div className="content-container">
        <div className="text-container">
          <h2>Design team</h2>
          <ul>
            {team.map((member) => (
              <li data-name={member.name} data-portrait={member.portrait}>
                {member.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-container">
          <h2>Design team</h2>
          <ul>
            {team.map((member) => (
              <li data-name={member.name} data-portrait={member.portrait}>
                {member.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
