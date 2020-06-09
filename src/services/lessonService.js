export const findLessonsForModule = (moduleId) =>
  fetch(`https://wbdv-generic-server.herokuapp.com/api/001416517/modules/${moduleId}/lessons/`)
    .then(response => response.json())

export const createLesson = (moduleId, newLesson) =>
  fetch(`https://wbdv-generic-server.herokuapp.com/api/001416517/modules/${moduleId}/lessons/`, {
    method: 'POST',
    body: JSON.stringify(newLesson),
    headers: {
      'content-type': 'application/json'
    }
  })

  const deleteLesson = (lessonId) => {
    return fetch("https://wbdv-generic-server.herokuapp.com/api/001416517/lessons/" + lessonId, {
      method: 'DELETE'
    })
      .then(response => response.json())
  }
    
    const updateLesson = (lessonId, newLesson) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001416517/lessons/` + lessonId, {
      method: 'PUT',
      body: JSON.stringify(newLesson),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())

        export default {
          deleteLesson,
          updateLesson
        }
    
    


