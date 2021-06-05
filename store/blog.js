export const state = () => ({
    articles : [],
    article: {},
});

export const getters = {
  articles: (state) => state.articles,
  article: (state) => state.article,
};

export const mutations = {
    SET_ARTICLES(state, payload) {
      state.articles = payload.reverse();
    },
    SET_ARTICLE(state, payload) {
      payload.date = this.$moment(payload.date).format('DD.MM.YYYY - HH:mm');
      state.article = payload;
    },
    CLEAR_ARTICLE(state) {
      state.article = {};
    },
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
    },
    async ADD_ARTICLE({ dispatch }, payload) {
      try {
        await this.$axios.$post('/api/article', {
          title: payload.title,
          description: payload.description,
          content: payload.content
        });
        await dispatch('GET_ARTICLES');
        await this.$router.push(this.localePath('/admin/articles'));
      } catch (error) {
        this.$toast.error(error, {
          type     : 'error',
          position : 'top-right',
          duration : 3000
        });
      }
    },
    async GET_ARTICLE({ commit }, id) {
      try {
        const response = await this.$axios.$post(`/api/article/get`, { id });
        commit('SET_ARTICLE', response);
      } catch (error) {
        this.$toast.error(error, {
          type     : 'error',
          position : 'top-right',
          duration : 3000
        });
      }
    },
    async SAVE_ARTICLE({ dispatch }, payload) {
      try {
        await this.$axios.$post(`/api/article/save`, payload);
        this.$toast.success('Article is update', {
          type     : 'error',
          position : 'top-right',
          duration : 3000
        });
      } catch (error) {
        this.$toast.error(error, {
          type     : 'error',
          position : 'top-right',
          duration : 3000
        });
      }
    },
    async DELETE_ARTICLE({ dispatch }, payload) {
      try {
        await this.$axios.$post('/api/delete/article', payload);
        await dispatch('GET_ARTICLES');
      } catch (error) {
        this.$toast.error(error, {
          type     : 'error',
          position : 'top-right',
          duration : 3000
        });
      }
    }
};
