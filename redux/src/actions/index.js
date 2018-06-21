import { CLOSE_MODAL, OPEN_MODAL, SEARCH_ENTITIES, SEARCH_ASYNCH_ENTITIES, IS_LOADING } from '../action-types/index';

export function openModal(id) {
  return {
    type: OPEN_MODAL,
    payload: {
      mediaId: id
    }
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  }
}

export function searchEntities(query) {
  return {
    type: SEARCH_ENTITIES,
    payload: {
      query,
    }
  }
}

export function searchAsynchEntities(query) {
  return (dispatch) => {
    //fetch() .. httprequest...

    dispatch(isLoading(true))

    setTimeout(()=>{
      dispatch(isLoading(false))
      dispatch(searchEntities(query))
    }, 1000) 
    
  }
}

export function isLoading(value) {
  return {
    type: IS_LOADING,
    payload: {
      value
    }
  }
}
