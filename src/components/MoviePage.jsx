import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { auth } from "../config/firebase";

const MoviePage = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newMovieReleaseDate, setNewMovieReleaseDate] = useState(0);
  const [isReceivedOscar, setIsReceivedOscar] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState("");

  const movieCollectionRef = collection(db, "movies");

  const handleMovieSumbit = async () => {
    try {
      await addDoc(movieCollectionRef, {
        title: newMovieTitle,
        releaseDate: newMovieReleaseDate,
        gotOscar: isReceivedOscar,
        userId: auth?.currentUser?.uid,
      });
      alert("Added Movie Successfully");
    } catch (err) {
      console.error(err);
    }
    setNewMovieTitle("");
    setNewMovieReleaseDate(0);
    setIsReceivedOscar(false);
  };

  const deleteMovie = async (id) => {
    try {
      const movieDoc = doc(db, "movies", id);
      await deleteDoc(movieDoc);
    } catch (err) {
      console.error(err);
    }
  };

  const updateMovie = async (id) => {
    try {
      const movieDoc = doc(db, "movies", id);
      await updateDoc(movieDoc, { title: updatedTitle });
      alert("Updated Title");
      setUpdatedTitle("");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const data = await getDocs(movieCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMoviesList(filteredData);
      } catch (err) {
        console.log(err);
      }
    };
    getMovieList();
  }, [handleMovieSumbit]);

  return (
    <div>
      <h1>Movies List</h1>
      <div>
        {moviesList.map((movie) => (
          <div key={movie.id}>
            <h2 style={{ color: movie.gotOscar ? "green" : "red" }}>
              {movie.title}
            </h2>
            <p>Date: {movie.releaseDate}</p>
            <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
            <input
              type="text"
              placeholder="Update Title"
              onChange={(e) => setUpdatedTitle(e.target.value)}
              value={updatedTitle}
            />
            <button onClick={() => updateMovie(movie.id)}>Update Movie</button>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Movie Title"
          onChange={(e) => setNewMovieTitle(e.target.value)}
          value={newMovieTitle}
        />
        <input
          type="number"
          placeholder="Movie Release Year"
          onChange={(e) => setNewMovieReleaseDate(e.target.value)}
          value={newMovieReleaseDate}
        />
        <input
          type="checkbox"
          checked={isReceivedOscar}
          onChange={(e) => setIsReceivedOscar(e.target.checked)}
        />
        <label htmlFor="checkbox">Received an Oscar</label>
        <button onClick={handleMovieSumbit}>Submit Movie</button>
      </div>
    </div>
  );
};

export default MoviePage;
