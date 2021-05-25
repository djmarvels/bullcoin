<template>
  <div class="app bg-dark">
    <transition name="slide-down" mode="out-in">
      <div
        v-if="show.Layer && routeName.indexOf('page') === -1 && routeName.indexOf('terms') === -1"
        :class="[
          'layer',
          { 'layer-index': routeName && routeName.indexOf('index') > -1 },
          { 'layer-page': routeName && routeName.indexOf('index') === -1 }
        ]"
      />
    </transition>
    <!-- navbar -->
    <div class="container">
      <navbar />
    </div>
    <nuxt />
    <the-footer />
  </div>
</template>

<script>
import navbar from '@/components/navbar';
import TheFooter from '@/components/TheFooter';
export default {
    components : {
        navbar,
        TheFooter
    },
    data : () => ({
        show : {
            Layer : false
        }
    }),
    computed : {
        routeName() {
            return this.$route.name;
        }
    },
    watch : {
        $route() {
            Object.keys(this.show).forEach(key => (this.$set(this.show, key, false)));
            setTimeout(() => {
                Object.keys(this.show).forEach(key => (this.$set(this.show, key, true)));
            }, 500);
        }
    },
    mounted() {
      setTimeout(() => {
            Object.keys(this.show).forEach(key => (this.$set(this.show, key, true)));
        }, 500);
    },
    beforeDestroy() {
    }
};
</script>

<style lang="scss">
  .app {
    position: relative;
    min-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
    overflow-y: hidden;
    height: auto;
  }
  .bg {
    &-dark {
      background: #000 !important;
    }
  }
  .layer {
    position: absolute;
    z-index: 0;
    transform-origin: center top;
    background-repeat: no-repeat;
    background-position: center top;
    background-image: url('~assets/images/layer-index.png');
    width: 1187px;
    height: 1159px;
    filter: blur(50px);
    &-index {
      left: auto;
      right: -100px;
      top: -267px;
      bottom: auto;

    }
    &-page {
      bottom: auto;
      right: auto;
      top: -599px;
      left: calc(47vw - (1187px / 2));
    }
  }
</style>
