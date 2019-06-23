const ls = (a, b) => {
	if(!b){
		return localStorage.getItem(a);
	}else{
		localStorage.setItem(a, b)
	}
}
const state = { 

    device: 'desktop',
    pos: localStorage.getItem('pos') ||  'left',
    size: localStorage.getItem('size') || 'medium',
    collapse: JSON.parse(localStorage.getItem('elCollapse')) || false,
    // 按钮形式的 Radio 激活时的文本颜色
    radio_group: {
    	tc:ls('el/radio/textColor') || '#ffffff',
    	fill: ls('el/fill') || '#409EFF'
    },
    color: ls('el/color') || '#409EFF',
    // 字体颜色
    fontColor: ls('el/fontColor') || '#ffffff',
    // 按钮形式的 Radio 激活时的填充色和边框色

}
const mutations = {
	SET_COLOR: (state, val) => {
		state.color = val;
		ls('el/color', val)
	},
    TOGGLE_SIDEBAR: state => {
        state.collapse = !state.collapse;
    },
    SET_COLLAPSE: (state, bol) => {
    	state.collapse = bol;
    	localStorage.setItem('elCollapse', bol)
    },

    SET_SIZE: (state, size) => {
        state.size = size;
        localStorage.setItem('size', size);
    },
    SET_POS: (state, pos) =>{
        state.pos = pos;
        localStorage.setItem('pos', pos);
    },
    SET_FONT_COLOR: (state, val) => {
    	state.fontColor = val;
    	ls('el/fontColor', val);
    }
}
const actions = {
	setFontColor({ commit }, val){
		commit("SET_FONT_COLOR", val)
	},
    toggleSideBar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },
    setSize({ commit }, size){
        commit('SET_SIZE', size)
    },
    setPos({ commit }, pos){
        commit('SET_POS', pos);
    },
    setCollapse({ commit }, val) {
    	commit('SET_COLLAPSE', val)
    },
    setColor( { commit } , val ) {
    	commit('SET_COLOR', val)
    }
}
export const getter = {
    sidebar: state => state.elementSettings.sidebar,
    size: state => state.elementSettings.size,
    device: state => state.elementSettings.device,
    pos: state => state.elementSettings.pos,
    collapse: state => state.elementSettings.collapse,
    color: state => state.elementSettings.color,
    fontColor: state => state.elementSettings.fontColor,
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}