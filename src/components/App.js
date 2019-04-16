import React, { useState } from 'react';

// A functional component can NOT make use of component level
// states

 const App = () => {
      const [resource, setResource] = useState('posts');

      return (
        <div>
          <div>
            <button onClick={() => setResource('posts')}>Posts</button>
            <button onClick={() => setResource('todos')}>Todos</button>
          </div>
          {resource}
        </div>
      );
  }

// class-based component
// class App extends React.Component {
//   state = { resource: 'posts' };
//   render() {
//     return (
//       <div>
//         <div>
//           <button onClick={() => this.setState({resource: 'posts'})}>Posts</button>
//           <button onClick={() => this.setState({resource: 'todos'})}>Todos</button>
//         </div>
//         {this.state.resource}
//       </div>
//     );
//   }
// }

export default App;
