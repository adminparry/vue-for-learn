const state = { 
    sidebar: {
        opened: localStorage.getItem('sidebarStatus') ? localStorage.getItem('sidebarStatus')  : true,

    },
    device: 'desktop',
    pos: localStorage.getItem('pos') ||  'left',
    size: localStorage.getItem('size') || 'Medium'
}
const mutations = {
    TOGGLE_SIDEBAR: state => {
        state.sidebar.opened = !JSON.parse(state.sidebar.opened);

    },
    SET_SIZE: (state, size) => {
        state.size = size;
        localStorage.setItem('size', size);
    },
    SET_POS: (state, pos) =>{
        state.pos = pos;
        localStorage.setItem('pos', pos);
    }
}
const actions = {
    toggleSideBar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },
    setSize({ commit }, size){
        commit('SET_SIZE', size)
    },
    setPos({ commit }, pos){
        commit('SET_POS', pos);
    }
}
export const getter = {
    sidebar: state => state.app.sidebar,
    size: state => state.app.size,
    device: state => state.app.device,
    pos: state => state.app.pos,
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}