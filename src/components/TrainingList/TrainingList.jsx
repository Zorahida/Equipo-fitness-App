import "./TrainingList.css";

const tick = require("../../assets/images/checked.png");

const TrainingList = ({ trainings }) => {
  const renderTrainings = () => {
    return trainings.map((training) => (
      <article className="section_training_card" key={training._id}>
        <h2>{training.nombre}</h2>
        <iframe
          className="video"
          height="315"
          src={training.video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        {training.musculos.map((musculo, id) => {
          return (
            <span className="span" key={id}>
              <img className="tick" src={tick} alt="tick"></img>
              {musculo}
            </span>
          );
        })}
        <p className="description">{training.descripcion}</p>
        <p className="element">
          <strong>Dificultad:</strong> {training.dificultad}
        </p>
        <p className="element">
          <strong>Series:</strong> {training.series}
        </p>
        <p className="element">
          <strong>Repeticiones:</strong> {training.repeticiones}
        </p>
      </article>
    ));
  };

  return <section className="section">{renderTrainings()}</section>;
};

export default TrainingList;
