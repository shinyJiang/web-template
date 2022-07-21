const getDefaultState = () => {
  return {
    paramsQuery: {
      name: '22'
    }
  }
}

const state = getDefaultState()

const mutations = {
  SET_PARAMS_QUERY: (state, params) => {
    state.paramsQuery = {
      ...state.paramsQuery,
      ...params
    }
  }
}

const actions = {
  setParamsQuery({ commit }, params) {
    commit('SET_PARAMS_QUERY', params)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

