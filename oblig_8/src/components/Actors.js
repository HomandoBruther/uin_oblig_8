import { useState, useEffect } from "react";
import { getActor, getBySlug } from "../lib/services/movieServ";
import { Link } from "react-router-dom";

const Actors = ({ actors, setActors }) => {
    
    const actorsFunction = async()=>{
        const data = await getActor();
        setActors(data);
}

useEffect(()=>{
    actorsFunction();
},[])
return (
    <>
    {actors?.length > 0? actors.map((person)=>{
        const {fullname, slug} = person;
        return <article key={fullname}>
            <h2>{fullname}</h2>
            <Link to={slug}>Read More</Link>
        </article>
    }):null}
    </>
    )
}

export default Actors;