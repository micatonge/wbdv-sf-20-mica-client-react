import React from 'react'
import CourseListContainer from "../containers/CourseListContainer";
import CourseEditor from "./CourseEditor";
import {BrowserRouter, Route} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import LoginComponent from "./LoginComponent";
import Register from "./Register";
import ProfileComponent from "./ProfileComponent";
import "../style.css";


class WhiteBoard extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
        <header>
        <link rel="stylesheet" href=
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
      <nav className="navbar navbar-light bg-light">
<span className="navbar-text">
  Northeastern University CS4550 Summer 1 2020
</span>
</nav></header>
          <h1>WhiteBoard !!!!</h1>

          <Route path="/register" exact={true} component={Register}/>
          <Route path="/login" exact={true} component={LoginComponent}/>
          <Route path="/profile" exact={true} component={ProfileComponent}/>

          {/*TODO: port over registraion, profile components*/}

          <Route
            path='/'
            exact={true}
            component={HomeComponent}
          />

          <Route
            path='/courses'
            exact={true}
            component={CourseListContainer}/>

          <Route
            path='/:layout/courses'
            exact={true}
            component={CourseListContainer}/>

          <Route
            path='/editor'
            exact={true}
            component={CourseEditor}/>

          <Route
            path={['/editor/:courseId', '/editor/:courseId/modules/:moduleId']}
            exact={true}
            component={CourseEditor}/>

          {/*<Route*/}
          {/*  path='/editor/:courseId/modules/:moduleId'*/}
          {/*  exact={true}*/}
          {/*  component={CourseEditor}/>*/}

        </div>
      </BrowserRouter>
    )
  }
}

export default WhiteBoard