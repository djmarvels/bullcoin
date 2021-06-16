<template>
  <div class="loader-page">
    <template v-if="shadow.show">
      <div
        :class="[
          'layer layer-page loader-shadow',
          { 'loader-shadow-show': shadow.visible }
        ]"
      />
    </template>
    <template v-if="logotype.show">
      <div
        :class="[
          'loader-logotype',
          { 'loader-logotype-show': logotype.visible }
        ]"
      >
        <img src="~/assets/images/logo.svg" alt="">
      </div>
    </template>
    <template v-if="loader">
      <svg
        :style="{ transform: `translateY(${slideDown}%)` }"
        class="loader-svg"
        width="1715"
        height="698"
        viewBox="0 0 1715 698"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          :opacity="activeOpacity"
          d="M1546 29L1283.52 505.747C1219.45 622.115 1064.79 650.507 963.564 564.482L893.91 505.286C839.435 458.99 765.151 443.587 696.76 464.406L-179 731"
          stroke="url(#paint0_linear)"
          stroke-width="120"
          stroke-dasharray="2500"
          :stroke-dashoffset="strokeOffset"
        />
        <path
          :opacity="backgroundOpacity"
          d="M1546 29L1283.52 505.747C1219.45 622.115 1064.79 650.507 963.564 564.482L893.91 505.286C839.435 458.99 765.151 443.587 696.76 464.406L-179 731"
          stroke="url(#paint0_linear)"
          stroke-width="120"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="683.5"
            y1="29"
            x2="683.5"
            y2="731"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E50012" />
            <stop offset="0.0001" stop-color="#F30013" />
            <stop offset="1" stop-color="#740000" />
          </linearGradient>
        </defs>
      </svg>
    </template>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name : 'TheLoader',
    data : () => ({
        notHide           : false,
        strokeOffset      : 0,
        backgroundOpacity : 0.0,
        slideDown         : 30,
        activeOpacity     : 0.0,
        loader            : false,
        shadow            : {
            show    : false,
            visible : false
        },
        logotype : {
            show    : false,
            visible : false
        }
    }),
    created() {
        this.showLogotype();
    },
    methods : {
        ...mapMutations({
            setLoading : 'page/SET_LOADING'
        }),
        showLogotype() {
            this.logotype.show = true;
            this.shadow.show = true;
            setTimeout(() => {
                this.showLoader();
                this.shadow.visible = true;
                this.logotype.visible = true;
            }, 0);
        },
        showLoader() {
            this.loader = true;
            const interval = setInterval(() => {
                if (this.backgroundOpacity < 0.4) {
                    this.backgroundOpacity += 0.05;
                    if (this.slideDown > 0) {
                        this.slideDown -= 10;
                    }
                }
                else if (this.activeOpacity < 1.0) {
                    this.activeOpacity += 0.1;
                }
                else {
                    this.startLoading();
                    clearInterval(interval);
                }
            }, 50);
        },
        startLoading() {
            const interval = setInterval(() => {
                if (this.strokeOffset > -2500) {
                    this.strokeOffset -= 250;
                }
                else if (!this.notHide) {
                    this.hideBackground();
                    this.hideLogotype();
                    clearInterval(interval);
                }
            }, 150);
        },
        hideBackground() {
            this.slideDown = 30;
            const interval = setInterval(() => {
                if (this.backgroundOpacity > 0.0) {
                    this.backgroundOpacity -= 0.05;
                }
                else {
                    clearInterval(interval);
                }
            }, 50);
        },
        hideLogotype() {
            this.logotype.visible = false;
            this.shadow.visible = false;
            setTimeout(() => {
                this.shadow.show = false;
                this.loader = false;
                this.logotype.show = false;

                setTimeout(() => {
                    this.setLoading(false);
                }, 100);
            }, 1200);
        }
    }
};
</script>

<style scoped lang="scss">
.loader {
  &-shadow {
    opacity: 0;
    z-index: 4;
    filter: blur(50px);
    top: calc(-100% - (1159px / 2));
    transition: all 1.2s 0s ease-in-out;
    left: calc(45% - (1187px / 2));
    &-show {
      top: calc(-20% - (1159px / 2));
      opacity: 1;
      @media (max-height: 799px) {
        top: calc(-50% - (1159px / 2));
      }
      @media (max-width: 991px) {
        top: calc(-75% - (1159px / 2));
      }
    }
  }
  &-page {
    min-height: 100vh;
    max-width: 100%;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    right: 0;
  }
  &-svg {
    display: block;
    position: absolute;
    left: auto;
    width: 115%;
    height: 100%;
    bottom: -5%;
    right: -15%;
    object-fit: cover;
    z-index: 4;
    transition: transform 1s 0s ease-in-out;

    @media (max-height: 799px) {
      bottom: -15%;
    }

    @media (max-width: 991px) {
      width: 115%;
      right: -15%;
    }

    @media (max-width: 767px) {
      bottom: -30%;
    }

    path {
      transition: stroke-dashoffset 300ms 0s ease-in-out, opacity 400ms 0s ease-in-out;
    }
  }
  &-logotype {
    position: absolute;
    width: 138px;
    height: 119px;
    top: calc(50% - (119px / 2) - 5%);
    left: calc(50% - (138px / 2));
    z-index: 5;
    opacity: 0;
    transform: translateY(50%);
    transition: all 1.2s 0s ease-in-out;
    &-show {
      opacity: 1;
      transform: translateY(0px);
    }
    @media (max-width: 991px) {
      width: 64px;
      height: 64px;
      top: calc(50% - (64px / 2) - 5%);
      left: calc(50% - (64px / 2));
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
