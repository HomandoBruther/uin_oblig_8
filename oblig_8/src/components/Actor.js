import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getBySlug } from "../lib/services/movieServ";

const Actor = ({ oneActor, setOneActor }) => {
  const { name } = useParams();
  /*  console.log(slug); */

  const getSlug = async () => {
    const slug = `${name}`;
    const data = await getBySlug(slug);
    setOneActor(data);
    console.log(oneActor);
  };

  useEffect(() => {
    getSlug();
  }, []);

  // const actor = actors.find((person) => person.slug === name);

  return (
    <>
      {oneActor?.length > 0
        ? oneActor.map((person) => {
            const { _id, name, story, img, relatedMovies } = person;
            return (
              <article key={_id}>
                <img src={img?.asset.url} alt="image not found" />
                <h2> Actor: {name}</h2>
                <h3>Appears in:</h3>
                <div className="appears">
                  {relatedMovies.map((data) => {
                    return <p key={data.title}>{data.title}</p>;
                  })}
                </div>
                <section>
                  <h3>Bio</h3>
                  <div>
                  <p>{story}</p>
                  </div>
                </section>
                <Link to="/actors">Back to actor page</Link>
              </article>
            );
          })
        : console.log(`not found`)}
    </>
  );
};

export default Actor;
