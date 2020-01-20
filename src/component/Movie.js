import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "./Movie.css";
function Movie({id,year,title,summary,poster,genres})
{
    return (
    <div className="movie">
        <Link to={{
            pathname:`/detail/${id}`,
            state:{
                summary:summary,
                year,
                poster,
                genres,
                title
            }
        }}><img src={poster} alt={title} title={title}></img>
        <div className="movie__data">
         <h3 className ="movie__title">{title}</h3>
         <h5 className ="movie__year">{year}</h5>
         <ul className="genres__name">{genres.map((genre,index) => (
            <li key={index} className="movie__genre">{genre} </li>
         ))
         }</ul>
            <br></br>        
         <p className="movie__summary">{summary.slice(0,140)}...</p>
        </div>
        </Link>
    </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Movie;