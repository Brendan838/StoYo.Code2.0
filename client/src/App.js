import React from "react";
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
} from "react-router-dom";


import "./App.css";
//import S3 from 'react-aws-s3';
import {Box} from "@mui/material/";

import Auth from './utils/auth'

import Home from './pages/Home'
import NavBar from './components/NavBar'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
const App = () => {


const client = new ApolloClient({
  request: (operation) => {
  const token = localStorage.getItem('id_token');

    operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
});
  },
  uri: '/graphql',
});

  return (
<ApolloProvider client={client}>
 <Router>
    <Box 
      sx={{

        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        columnGap: 1,
        rowGap: 1,
        gridTemplateRows: 'repeat(24, 1fr)',
        height: '100vh',
      }}
    >
    <NavBar/>

    <Route exact path="/login">
    <LogIn/>
    </Route>

    <Route exact path="/signup">
    <SignUp/>
    </Route>
    
    <Route exact path="/">
    {Auth.loggedIn()? 
    (<Home/>) :
    (<LogIn/>)}
    </Route>

    </Box>
</Router>
</ApolloProvider>

  );



};

export default App;

// const config = {
//   bucketName: 'myBucket',
//   dirName: 'media', /* optional */
//   region: 'eu-west-1',
//   accessKeyId: 'JAJHAFJFHJDFJSDHFSDHFJKDSF',
//   secretAccessKey: 'jhsdf99845fd98qwed42ebdyeqwd-3r98f373f=qwrq3rfr3rf',
//   s3Url: 'https:/your-custom-s3-url.com/',
// }


// const ReactS3Client = new S3(config);
// /*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */

// /* This is optional */
// const newFileName = 'test-file';

// ReactS3Client
//   .uploadFile(file, newFileName)
//   .then(data => console.log(data))
//   .catch(err => console.error(err))


// {
//   Response: {
//     bucket: "myBucket",
//       key: "image/test-image.jpg",
//         location: "https://myBucket.s3.amazonaws.com/media/test-file.jpg"
//   }
// }

    // <Router>

    //   <div className="App">
    //     <Header />
    //     <Switch>

    //       {/* <Redirect exact path from="/" to="/Home" /> */}
    //       <Route exact path="/Home"><Home /></Route> 
    //       <Route exact path="/SignUp"><SignUp /></Route> 



    //     </Switch>
    //     <Footer />

    //   </div>

    // </Router>{/* 



