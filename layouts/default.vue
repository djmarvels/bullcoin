<template>
  <div class="app bg-dark">
    <transition name="slide-down">
      <div v-if="routeName && routeName.indexOf('index') > -1 && show.Layer" class="layer layer-index" />
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
    mounted() {
        this.$nextTick(() => {
            Object.keys(this.show).forEach(key => (this.$set(this.show, key, true)));
        });
    },
    beforeDestroy() {
        Object.keys(this.show).forEach(key => (this.$set(this.show, key, false)));
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
    &-index {
      background-image: url('~assets/images/layer-index.png');
      width: 1187px;
      height: 1159px;
      left: auto;
      right: -100px;
      top: -267px;
      bottom: auto;
      filter: blur(50px);
    }
  }
</style>
