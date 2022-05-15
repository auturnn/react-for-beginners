import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const getMovie = async () => {
    const res = await fetch(
      `https://yts.mx/api/v2/movie_detauls.json?movie_id=${id}`
    );

    const json = res.json();
    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return <h1>{id}</h1>;
}

export default Detail;
