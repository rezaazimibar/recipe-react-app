import { useEffect, useState } from "react";
import { url } from "./URL";

import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${url}&number=10`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };
  console.log("sdfsdf", popular);
  return (
    <>
      <Wrapped>
        <h3>popular picks</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {popular.map((recipes) => {
            return (
              <SplideSlide>
                <Card>
                  <div>{recipes.title}</div>
                  <img src={recipes.image} alt={recipes.title} />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapped>
    </>
  );
};

const Wrapped = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position:relative
  img {
    border-radius: 2rem;
    position:absolute
  }
`;

export default Popular;
