export const state = () => ({
    articles : []
});

export const mutations = {
    SET_ARTICLES(state, payload) {
        state.articles = payload;
    }
};

export const actions = {
    async GET_ARTICLES({ commit }) {
        try {
            const response = await this.$axios.$get('/api/articles');
            commit('SET_ARTICLES', response);
        }
        catch (error) {
            this.$toast.error(error, {
                type     : 'error',
                position : 'top-right',
                duration : 3000
            });
        }
    }
};
