import React from "react";
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import {Link} from "react-router-dom";
import "../style.css";

// stateless component
const CourseEditor = () => {
  return(
    <div>
      <Link to="/courses">
        Back
      </Link>
      <h2>Course Editor</h2>

      <div className="row">
        <div className="col-4">
          <ModuleList/>
        </div>
        <div className="col-8">
          <LessonTabs/>
        </div>
      </div>

      <div className="row">
         <div className="col-4">
            <topicPills/>
      </div>
      </div>
    </div>
  )
}

export default CourseEditor