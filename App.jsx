import React from 'react';

class App extends React.Component {
   render() {
      var myStyle={
        color: "red",
        fontSize: 100,
        backgroundColor: "yellow"
      }
      return (
         <div>
            <h1>Hello World Watcha! </h1>
            <h2>Body</h2>
            <h3 style={myStyle}>{1==2 ? "OK" : "No"}</h3>
         </div>
      );
   }
}

export default App;
