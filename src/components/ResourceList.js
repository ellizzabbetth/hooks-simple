import React, { useState, useEffect } from 'react';
import useResources from './useResources';



const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <ul>{resources.map(record => (
      <li key={record.id}>
        {record.title}
      </li>
    ))}
    </ul>
  );

};

export default ResourceList;



// CLASS BASED VERSION
// class ResourceList extends React.Component {
//   state = { resources: [] };
//   // we want to make a request when the component is first
//   // rendered on the screen. CompnoentDidMount is only rendered once.
//   // ResouceList has been mounted or rendered one time. Anytime
//   // a class based component is rendered the componentDidMount function is
//   // NOT called a second time.
//   // componentDidMount lifecyclye method is only invoked ONE time.
//   async componentDidMount() {
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
//
//     this.setState({ resources:  response.data });
//   }
//
//   // lifecycle method gets called anytime our component gets updated - this is
//   // anytime our component is rendered
//   async componentDidUpdate(prevProps){
//      if(prevProps.resource !== this.props.resource){
//        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
//
//        this.setState({ resources:  response.data });
//      }
//   }
//
//   render(){
//     return <div>{this.state.resources.length}</div>;
//   }
// }
//
// export default ResourceList;
