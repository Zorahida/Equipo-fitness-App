import "./About.css";
import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: require("../../assets/images/imagen6.webp"),
    altText: "Slide 1",
    caption: "Entrenamientos personalizados",
    key: 1,
  },
  {
    src: require("../../assets/images/imagen2.jpeg"),
    altText: "Slide 2",
    caption: "Variedad de máquinas y espacios",
    key: 2,
  },
  {
    src: require("../../assets/images/imagen3.jpg"),
    altText: "Slide 3",
    caption: "Ambiente óptimo y entrenadores profesionales",
    key: 3,
  },
];

function About(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="carousel"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="carousel_img" src={item.src} alt={item.altText} />
        <CarouselCaption className="caption" captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <>
      <div className="about_container">
        <h1 className="about_title">Nuestra filosofía</h1>
        <p>
          Bienvenido a UpgradeFit Gym, tu centro de acondicionamiento físico y
          bienestar integral. Nuestra misión es inspirar a la comunidad a
          alcanzar sus objetivos de salud y acondicionamiento físico, brindando
          un ambiente motivador y de apoyo para personas de todas las edades y
          niveles de condición física.
        </p>
        <p>
          Nuestro gimnasio cuenta con instalaciones de vanguardia diseñadas para
          ofrecer una experiencia única. Desde el momento en que ingreses, te
          encontrarás con un equipo de profesionales apasionados y certificados,
          dedicados a ayudarte a alcanzar tus metas y mejorar tu calidad de
          vida.
        </p>
        <p>
          <strong>Variedad de opciones:</strong> Ofrecemos una amplia variedad
          de programas y clases para adaptarse a diferentes intereses y
          necesidades. Desde entrenamiento de fuerza y ​​acondicionamiento
          cardiovascular hasta clases de yoga, pilates y spinning, siempre
          encontrarás algo que te motive y desafíe.
        </p>
        <p>
          <strong>Entrenadores expertos:</strong> Nuestro equipo de entrenadores
          está altamente capacitado y experimentado en diferentes disciplinas de
          acondicionamiento físico. Te proporcionarán la orientación
          personalizada que necesitas para alcanzar tus objetivos de manera
          segura y efectiva.
        </p>
        <p>
          <strong>Tecnología avanzada:</strong> Utilizamos tecnología de última
          generación para seguir tu progreso y optimizar tu entrenamiento.
          Nuestros equipos y aplicaciones te ayudarán a monitorear tus avances y
          a mantenerte motivado durante todo el camino.
        </p>
        <p>
          <strong>Comunidad acogedora:</strong> En UpgradeFit Gym, valoramos la
          importancia de la comunidad. Aquí te rodearás de personas con ideas
          afines que te apoyarán y te animarán a alcanzar tus metas juntos.
          Además, organizamos eventos y actividades para fomentar la interacción
          y la amistad entre nuestros miembros.
        </p>
        <p>
          <strong>Enfoque en el bienestar integral: </strong>Creemos que el
          bienestar va más allá del ejercicio físico. Por eso, ofrecemos
          servicios complementarios como asesoramiento nutricional, clases de
          meditación y talleres de bienestar emocional para ayudarte a encontrar
          el equilibrio entre cuerpo y mente.
        </p>
        <p>
          No importa si eres un principiante o un atleta experimentado,
          UpgradeFit Gym tiene todo lo que necesitas para llevar tu
          acondicionamiento físico al siguiente nivel y convertirlo en un estilo
          de vida. Únete a nosotros y comienza tu viaje hacia una versión más
          fuerte, saludable y feliz de ti mismo.
        </p>
        <p>Recuerda, en UpgradeFit Gym, ¡tu bienestar es nuestra prioridad!</p>
      </div>
      <div>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          {...args}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>
    </>
  );
}

export default About;
