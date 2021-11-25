import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import "./App.css";
import S3 from 'react-aws-s3';

const App = () => {

  return (

    <Router>

      <div className="App">
        <Header />
        <Switch>

          <Redirect exact from="/" to="/Home" />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/SignUp" component={SignUp} />



        </Switch>
        <Footer />

      </div>

    </Router>
  );
};
export default App;

const config = {
  bucketName: 'myBucket',
  dirName: 'media', /* optional */
  region: 'eu-west-1',
  accessKeyId: 'JAJHAFJFHJDFJSDHFSDHFJKDSF',
  secretAccessKey: 'jhsdf99845fd98qwed42ebdyeqwd-3r98f373f=qwrq3rfr3rf',
  s3Url: 'https:/your-custom-s3-url.com/',
}


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

