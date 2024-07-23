import './App.css';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { useState } from 'react';

const GET_ALL_DOGS = gql`
  query GetAllDogs {
    getAllDogs {
      name
      age
    }
  }
`;

const GET_DOG_BY_NAME = gql`
  query GetDog($name: String) {
    getDog(name: $name) {
      name
      age
    }
  }
`;

function App() {
  /*  const { loading, error, data } = useQuery(GET_ALL_DOGS, {
    onCompleted: (queryData) => {
      console.log(queryData);
      console.log(queryData.getAllDogs);

      const dogArray = queryData.getAllDogs;
      dogArray.forEach((dog) => {
        console.log(dog.name + ' is ' + dog.age + ' years old');
      });
    },
  });

  if (loading) return null;
  if (error) return 'Error: ' + error;
  console.log(data);*/

  /*  const { loading, error, data } = useQuery(GET_DOG_BY_NAME, {
    variables: {
      // name: 'Bert',
      name: 'Cooper',
    },
    onCompleted: (queryData) => {
      // Only run when you successfully complete a request, you can tried it with `name: 'Cooper'` upstairs.
      console.log(queryData);
    },
    onError: (errorData) => {
      console.log(errorData);
    },
  });
  // console.log(error);*/

  const [dogInput, setDogInput] = useState('');
  /*
  const [getDogData, { loading, error, data }] = useLazyQuery(GET_DOG_BY_NAME, {
    variables: {
      name: dogInput,
    },

  Note: You cannot do it like above, because it will run whenever the state value changes after the run the query once.
  * */
  const [getDogData, { loading, error, data }] = useLazyQuery(GET_DOG_BY_NAME, {
    onCompleted: (queryData) => {
      // Only run when you successfully complete a request, you can tried it with `name: 'Cooper'` upstairs.
      console.log(queryData);
    },
    onError: (errorData) => {
      console.log(errorData);
    },
  });

  // console.log(dogInput);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Dog API query app</h1>
        <input type='text' onChange={(e) => setDogInput(e.target.value)} />
        <button
          type='button'
          onClick={() =>
            getDogData({
              variables: {
                name: dogInput,
              },
            })
          }
        >
          Get Dog Data By Name
        </button>
      </header>
    </div>
  );
}

export default App;
