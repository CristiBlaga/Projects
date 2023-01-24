import React from "react";
import "./portofolio.css";
import rockpaper from "../../assets/rock-paper.jpg";
import rickmorty from "../../assets/rick-morty.jpg";
import cooking from "../../assets/cooking.jpg";

const data = [
  {
    id: 1,
    image: rockpaper,
    title: "Rock Paper Scissors Game",
    github:
      "https://github.com/CristiBlaga/IT-school-homeworks/tree/main/week%205",
  },
  {
    id: 2,
    image: rickmorty,
    title: "Rick And Morty App",
    github:
      "https://github.com/CristiBlaga/React04---Scoala-Informala/tree/main/homeworks/week%203/rickandmortyapp",
  },
  {
    id: 3,
    image: cooking,
    title: "Recipe App",
    github: "https://github.com",
  },
];

const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>
      <div className="container portofolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portofolio__item">
              <div className="portofolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portofolio-item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portofolio;
