const initialState = {
    topics: [
      {_id: '123', title: 'topic 123'},
      {_id: '234', title: 'topic 234'},
      {_id: '345', title: 'topic 345'}
    ]
  }
  
  const topicReducer = (state=initialState, action) => {
    switch(action.type) {
      case "DELETE_LESSON":
        return {
          ...state,
          topics: state.topics.filter(lesson => topic._id !== action.topicId)
        }
      case "FIND_TOPICS_FOR_LESSON":
        return {
          ...state,
          topics: action.actualTopics
        }
      case "CREATE_TOPIC":
        return {
          ...state,
          topics: [...state.topics, action.newTopic]
        }
        case "UPDATE_TOPIC":
        return {
          ...state,
          topics: state.topics.map(
            topic => topic._id === event.updatedTopic._id ?
              event.updatedTopic: topic )
        }
      default:
        return state
    }
  }
  
  export default topicReducer