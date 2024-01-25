import { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = 'https://wizard-world-api.herokuapp.com';

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseURL}/Houses`)
      .then((res) => setData(res.data))
      .catch((error) => {
        console.log(`Error: ${error}`);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>{`Error: ${error}`}</div>;
  }

  if (!data && !error) {
    return <div>Loading</div>;
  }

  return (
    <main
      className='container'
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
      }}
    >
      {data.map((item) => {
        console.log(item, 'item');
        const {
          id,
          name,
          animal,
          element,
          founder,
          ghost,
          houseColours,
          commonRoom,
          heads,
          traits,
        } = item;
        return (
          <div key={id} style={{ padding: '1rem' }}>
            <div>
              <strong>name: </strong> {name}
            </div>
            <div>
              <strong>animal: </strong> {animal}
            </div>
            <div>
              <strong>element: </strong> {element}
            </div>
            <div>
              <strong>founder: </strong> {founder}
            </div>
            <div>
              <strong>ghost: </strong> {ghost}
            </div>
            <div>
              <strong>houseColours: </strong> {houseColours}
            </div>
            <div>
              <strong>commonRoom: </strong> {commonRoom}
            </div>
            <div style={{ padding: '1rem' }}>
              <strong>heads: </strong>
              {heads.map((item) => {
                const { id, firstName, lastName } = item;
                return (
                  <div key={item.id}>
                    <div>firstName: {firstName}</div>
                    <div>lastName: {lastName}</div>
                  </div>
                );
              })}
            </div>
            <div style={{ padding: '1rem' }}>
              <strong>traits: </strong>
              {traits.map((item) => {
                const { id, name } = item;
                return (
                  <div key={item.id}>
                    <div>name: {name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Home;
