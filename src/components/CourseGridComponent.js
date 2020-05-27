import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import "../style.css";

export default class CourseGridComponent
  extends React.Component
{
  render() {
    return(
      <div>
        <h3>Course Table {this.props.courses.length}</h3>
        <table className="col-sm">
          <thead>
            <tr>
              <th>Title</th>
              <th>Owner</th>
              <th>Last Modified</th>
              <th>
                <button>Sort</button>
                <button>Grid</button>
              </th>
            </tr>
          </thead>
          <tbody className="card-deck">
          {
            this.props.courses.map(course =>
              <CourseRowComponent
                deleteCourse={this.props.deleteCourse}
                key={course._id}
                course={course}
                className= "card loop"
                />
          )}
          </tbody>
        </table>
      </div>
    )
  }
}