import React from 'react';
import './watchstore.css';

const WatchStoreComponent = () => {
    // define the initial state for the watches
    const [watches, setWatches] = React.useState([]);
  
    // fetch the data for the watches from the JSON file
    // and update the state with the fetched data
    React.useEffect(() => {
      // import the data from the JSON file
      const data = require('./data.json');
      setWatches(data);
    }, []);
  
    // render the WatchStore component
    return (
      <div className="watches">
        <h1>Vår Rolex kolleksjon</h1>
        {watches.map(watch => (
          // render a "Watch" component for each watch in the array
          <Watch key={watch.id} watch={watch} />
        ))}
      </div>
    );
  };
  
  // define the Watch component
  const Watch = ({ watch }) => (
    <div className="watches__row">
      <div class="watches__card">
        <img src={watch.imageUrl} alt={watch.name} />
        <h3>{watch.name}</h3>
        <p>{watch.price}</p>
      </div>
    </div>
  );
  
  export default WatchStoreComponent;