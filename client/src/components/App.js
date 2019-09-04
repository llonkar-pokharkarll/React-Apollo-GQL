import React from 'react';
import { Query } from 'react-apollo';



function App() {
  return (
    <div >
      Home
      <Query>
        {({ data, loading, error }) => {
          if (error) {
            return <h1>{error.message}</h1>
          }
          if (loading) {
            return <h1>loading..</h1>
          }
          if (data) {
            return <h1>Recipe</h1>
          }
        }}
      </Query>
    </div>
  );
}

export default App;
