const findAllModules = () => {
    return fetch("https://wbdv-generic-server.herokuapp.com/api/mica/modules")
      .then(response => response.json())
  }
  
  const findModuleForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/mica/courses/${courseId}/modules`)
      .then(response => response.json())
  
  
  const deleteModule = (moduleId) => {
    return fetch("https://wbdv-generic-server.herokuapp.com/api/mica/modules/" + moduleId, {
      method: 'DELETE'
    })
      .then(response => response.json())
  }
  
  const updateModule = (moduleId, newModule) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/mica/modules/${moduleId}`, {
      method: 'PUT',
      body: JSON.stringify(newModule),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
  
  const createModule = (courseId, module) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/mica/courses/${courseId}/modules`, {
      method: 'POST',
      body: JSON.stringify(module),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
  
  
  export default {
    findAllModules,
    deleteModule,
    createModule,
    updateModule,
    findModuleForCourse
  }