export const state = () => ({
    loading : true
});

export const getters = {
    loading : state => state.loading
};

export const mutations = {
    SET_LOADING(state, payload) {
        state.loading = payload;
    }
};
