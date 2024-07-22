import './App.css';
import { gql, useQuery } from '@apollo/client';

const GET_ALL_DOGS = gql`
  query GetAllDogs {
    getAllDogs {
      name
      age
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_ALL_DOGS);

  if (loading) return null;
  if (error) return 'Error: ' + error;
  console.log(data);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Dog API query app</h1>
      </header>
    </div>
  );
}

export default App;
