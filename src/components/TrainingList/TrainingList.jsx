const TrainingList = ({trainings}) => {
    const renderTrainings = () => {
        return trainings.map((training) => <article className="training_card" key={training.id}>
            <img className="training_img" src={training.image}></img>
            <h4>{training.name}</h4>
            <h5>{training.muscles}</h5>
            <p>{training.description}</p>
            <p>Dificultad: {training.level}</p>
            <p>Series: {training.series}</p>
            <p>Repeticiones: {training.reps}</p>
            <iframe>{training.video}</iframe>

        </article>)
    }

    return(
        <section className="section">
        {renderTrainings()}
        </section>
    )
}

export default TrainingList;