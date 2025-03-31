import React, { useState } from 'react';

const AddMovieForm = () => {
  const [title, setTitle] = useState('');
  const [openingText, setOpeningText] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();

    console.log('Submitted:', { title, openingText, releaseDate });

    let obj ={
        id:Date.now(),
        title:title,
        desc:openingText,
        date:releaseDate
    }

    try {
        const response = await fetch('https://e-comm-13a6a-default-rtdb.firebaseio.com/movies.json',{
            method:"POST",
            body : JSON.stringify(obj)
        })

        if(response.ok){
            alert("Data added successfully");
        }

    } catch (error) {
        console.log(error)
    }

  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="openingText" className="block text-sm font-medium text-gray-700">
          Opening Text
        </label>
        <textarea
          id="openingText"
          value={openingText}
          onChange={(e) => setOpeningText(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
          rows="3"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="releaseDate" className="block text-sm font-medium text-gray-700">
          Release Date
        </label>
        <input
          type="date"
          id="releaseDate"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          className="mt-1 p-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
      >
        Submit
      </button>
    </form>
  );
};

export default AddMovieForm;

