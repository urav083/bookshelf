import firebase from './firebase';

import './App.css';
import { useEffect, useState } from 'react';

// need to import firebase modules
import { getDatabase, onValue, push, ref, remove } from 'firebase/database';

function App() {
  const [books, setBooks] = useState([{ key: "abc", name: "frog" }]);
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInput);
    // push (whereto push, what to push)
    const database = getDatabase(firebase);
    const dbRef = ref(database);
    push(dbRef, userInput);
    // reset the input after submitting : input changes the state, state changes the imput
    setUserInput('');
  }

  const handleRemoveBook = (bookID) => {
    console.log('removing book');
    const database = getDatabase(firebase);
    const dbRef = ref(database, `${bookID}`);
    remove(dbRef);
  }

  // because we're running this of mounting of app component, we give it empty array
  useEffect(() => {
    const database = getDatabase(firebase);
    const dbRef = ref(database);
    onValue(dbRef, (response) => {
      const data = response.val();
      const newState = [];

      for (let key in data) {
        // newState.push(data[key]);
        newState.push({ key: key, name: data[key] })
      };
      setBooks(newState);

    })
  }, []);

  return (
    <div>
      <h1>Bookshelf</h1>

      <form action="submit">
        <label htmlFor="newBook">Add a book to your shelf </label>
        <input type="text" id='newBook' onChange={handleInputChange} value={userInput} />
        <button onClick={handleSubmit}>Add Book</button>
      </form>

      <ul>
        {books.map((book) => {
          return (
            <li key={book.key}>
              <p>{book.name} {book.key}</p>
              <button onClick={() => { handleRemoveBook(book.key) }}>Remove</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
