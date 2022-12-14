import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getOneFetch, deleteMedia } from '../../api/fetch';
import { convertEndpoint } from '../../helperFunctions';
import ErrorMessage from '../errors/ErrorMessage';
import '../css/Show.css';

function DisplayIndividualInfo() {
  // Declare State for individual data on page
  const [data, setData] = useState([]);
  // Declare State for error boolean
  const [error, setError] = useState(false);

  // Define useParams variable
  const { id, endpoint } = useParams();

  // Define navigate variable
  const navigate = useNavigate();

  // function to handle delete button/fetch
  function handleDelete() {
    deleteMedia(id, endpoint)
      .then(() => navigate(`/screen/${endpoint}`))
      .catch((err) => setError(true));
  }

  // Object.keys to get an array of the object's key values. If the array's length is 0 (no keys), it is an empty object.
  // use the id value in dependency array to fire whenever the selected show id value changes. -> id is optional param value :id
  useEffect(() => {
    getOneFetch(id, endpoint)
      .then((respJson) => {
        setData(respJson);
        Object.keys(respJson).length === 0 ? setError(true) : setError(false);
      })
      .catch((err) => setError(true));
  }, [id]);

  const { title, duration, listedIn, country, rating, dateAdded, description } =
    data;
  return (
    <section className="shows-show-wrapper">
      <h2>{title}</h2>
      <section className="shows-show">
        {error ? (
          <ErrorMessage />
        ) : (
          <>
            <aside>
              <p>
                <span>Duration:</span> {duration}
              </p>
              <p>
                <span>Listed Categories:</span> {listedIn}
              </p>
              <p>
                <span>Country:</span> {country}
              </p>
              <p>
                <span>Rating:</span> {rating}
              </p>
              <p>
                <span>Date Added:</span> {dateAdded}
              </p>
            </aside>
            <article>
              <p>{description}</p>
            </article>
            <aside>
              <button
                className="delete"
                // on click trigger DELETE fetch call
                onClick={handleDelete}
              >
                Remove {convertEndpoint(endpoint, false, false, true)}
              </button>
              <Link to={`/screen/${endpoint}/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </aside>
          </>
        )}
      </section>
    </section>
  );
}

export default DisplayIndividualInfo;
