import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    //console.log(this.props.project)
    return (
      <li className="Project">
      	<strong>{this.props.project.title}</strong> - {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

//Validate the property type is correct
ProjectItem.propTypes = {
  projects: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default ProjectItem;
