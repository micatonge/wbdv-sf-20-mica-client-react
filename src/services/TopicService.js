export const findTopicsForLesson = (lessonId) =>
  fetch(`https://wbdv-generic-server.herokuapp.com/api/001416517/lessons/${lessonId}/topics`)
    .then(response => response.json())

export const createTopic = (lessonId, newTopic) =>
  fetch(`https://wbdv-generic-server.herokuapp.com/api/001416517/lessons/${lessonId}/topics`, {
    method: 'POST',
    body: JSON.stringify(newTopic),
    headers: {
      'content-type': 'application/json'
    }
  })

    export const deleteTopic = (topicId) => {
      const response = await fetch("https://wbdv-generic-server.herokuapp.com/api/001416517/topics/" + topicId, {
        method: 'DELETE'
      })
      return await response.json()
    }
    
     export const updateTopic = (topicId, newTopic) =>
      fetch(`https://wbdv-generic-server.herokuapp.com/api/001416517/topics/` + topicId, {
        method: 'PUT',
        body: JSON.stringify(newTopic),
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => response.json())