<template>
  <div class="index">
    <!-- первый блок -->
    <div class="container">
      <div class="row">
        <div class="col col-12 col-lg-7">
          <transition name="fade" mode="out-in">
            <div v-if="show.indexText" class="index-header">
              <h1 class="index-header-title" v-html="$t('Index.Header.Title')" />
              <div class="index-header-bottom">
                <nuxt-link :to="localePath('/howtobuy')" class="index-header-button" v-html="$t('Index.Header.Button')" />
                <p class="index-header-text" v-html="$t('Index.Header.Text')" />
              </div>
            </div>
          </transition>
        </div>
        <div class="col col-12 col-lg-5">
          <div class="row">
            <transition name="slide-down" mode="in-out">
              <img v-if="show.indexHeaderImage" class="index-header-image d-lg-block d-none" :src="require('~/assets/images/index-header-image.png').default">
            </transition>
          </div>
        </div>
      </div>
    </div>
    <!-- второй блок -->
    <transition name="slide-up" mode="out-in">
      <div v-if="show.live" class="container">
        <div class="index-live">
          <div class="index-live-row">
            <button type="button" class="index-live-button" v-html="$t('Index.Live.LiveChart')" />
            <div class="index-live-values">
              <div class="index-live-value">
                <span>0.000004763</span>
                <span v-html="$t('Index.Live.CurrentPrice')" />
              </div>
              <div class="index-live-value">
                <span>2,193,312</span>
                <span v-html="$t('Index.Live.Holders')" />
              </div>
              <div class="index-live-value">
                <span>583,758,821,195,316</span>
                <span v-html="$t('Index.Live.Supply')" />
              </div>
              <div class="index-live-value">
                <span>$2,741,331,362.96</span>
                <span v-html="$t('Index.Live.MarketCap')" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- третий блок -->
    <transition name="slide-up" mode="out-in">
      <div v-if="show.buyVector" class="index-buy-vector" />
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="show.buy" class="container">
        <div class="index-buy">
          <div class="index-buy-video">
            <div class="index-buy-video_box">
              <div class="index-buy-title" v-html="$t('Index.Buy.Title')" />
              <div class="index-buy-video_inner">
                <button class="index-buy-video_play" type="button" />
              </div>
            </div>
          </div>
          <div class="index-buy-right">
            <p class="index-buy-text" v-html="$t('Index.Buy.Text')" />
            <nuxt-link class="index-buy-button" :to="localePath('/howtobuy')" type="button" v-html="$t('Index.Buy.Button')" />
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="show.ecosystem" class="index-ecosystem">
        <div class="container">
          <div class="index-ecosystem-header">
            <div class="index-ecosystem-header_title" v-html="$t('Index.Ecosystem.Title')" />
            <div class="index-ecosystem-header_text">
              <span v-html="$t('Index.Ecosystem.Text')" />
            </div>
          </div>
          <div class="index-ecosystem-tabs row">
            <div class="col col-12 col-lg-3">
              <div class="index-ecosystem-tab">
                <img src="~assets/images/index-tab-1.svg" alt="" class="index-ecosystem-tab_image">
                <span class="index-ecosystem-tab_text" v-html="$t('Index.Ecosystem.Tabs[0]')" />
              </div>
            </div>
            <div class="col col-12 col-lg-3">
              <div class="index-ecosystem-tab">
                <img src="~assets/images/index-tab-2.svg" alt="" class="index-ecosystem-tab_image">
                <span class="index-ecosystem-tab_text" v-html="$t('Index.Ecosystem.Tabs[1]')" />
              </div>
            </div>
            <div class="col col-12 col-lg-3">
              <div class="index-ecosystem-tab">
                <img src="~assets/images/index-tab-3.svg" alt="" class="index-ecosystem-tab_image">
                <span class="index-ecosystem-tab_text" v-html="$t('Index.Ecosystem.Tabs[2]')" />
              </div>
            </div>
            <div class="col col-12 col-lg-3">
              <button type="button" class="index-ecosystem-more" v-html="$t('Index.Ecosystem.More')" />
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="show.ecosystem" class="index-ecosystem-bottom">
        <div class="container">
          <p class="index-ecosystem-bottom_text" v-html="$t('Index.Ecosystem.Bottom[0]')" />
          <p class="index-ecosystem-bottom_text" v-html="$t('Index.Ecosystem.Bottom[1]')" />
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="show.roadmap" class="index-steps">
        <div class="container">
          <div class="row">
            <div class="col col-12 col-lg-6">
              <div class="index-steps-box">
                <img class="index-steps-image" :src="require('~/assets/images/roadmap-enot.png').default">
                <div class="index-steps-title">
                  <span v-html="$t('Index.Roadmap.Road')" />
                  <span v-html="$t('Index.Roadmap.Map')" />
                </div>
                <div class="index-steps-subtitle" v-html="$t('Index.Roadmap.Subtitle')" />
              </div>
            </div>
            <div class="col col-12 col-lg-6">
              <div class="index-steps-main">
                <div v-for="step in 4" :key="step" class="index-steps-main--row">
                  <div class="index-steps-main--date" v-html="$t(`Index.Steps[${step - 1}].Date`)" />
                  <div class="index-steps-main--status">
                    <div :class="['index-steps-main--status_circle', {'index-steps-main--status_circle--active': currentStep === step}]" />
                    <div :class="['index-steps-main--status_progress', { 'animation': currentStep === step }]" />
                  </div>
                  <div class="index-steps-main--body">
                    <div class="index-steps-main--title" v-html="$t(`Index.Steps[${step - 1}].Title`)" />
                    <div class="index-steps-main--text" v-html="$t(`Index.Steps[${step - 1}].Text`)" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="show.blog && isBlog" class="index-blog">
        <div class="index-blog-aside">
          <div class="index-blog-aside--title" v-html="$t('Index.Blog.Title')" />
          <div class="index-blog-aside--bottom">
            <div class="index-blog-aside--navigation">
              <button type="button" class="index-blog-aside--prev" @click="blogPrev" />
              <button type="button" class="index-blog-aside--next" @click="blogNext" />
            </div>
            <nuxt-link class="index-blog-aside--showall" :to="localePath('/')" v-html="$t('Index.Blog.ShowAll')" />
          </div>
        </div>
        <div id="blogCarousel" class="owl-carousel owl-theme index-blog-carousel">
          <div v-for="i in 6" :key="i" class="item">
            <div class="index-blog-carousel--item">
              <div class="index-blog-carousel--title">
                Заголовок статьи <br>в две строки
              </div>
              <div class="index-blog-carousel--text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nisl hendrerit facilisis purus velit, non.
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="index-partners">
      <div class="container">
        <div class="index-partners-row">
          <img :src="require('~/assets/images/BscScan.png').default" alt="" class="index-partner">
          <img :src="require('~/assets/images/Certik.png').default" alt="" class="index-partner">
          <img :src="require('~/assets/images/CoinMarketCap.png').default" alt="" class="index-partner">
          <img :src="require('~/assets/images/nomics.png').default" alt="" class="index-partner">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data : () => ({
        show : {
            indexText        : false,
            indexHeaderImage : false,
            live             : false,
            buy              : false,
            buyVector        : false,
            ecosystem        : false,
            roadmap          : false,
            blog             : false
        },
        currentStep  : 0,
        intervalStep : null,
        timeStep     : 2990,
        blogCarousel : null
    }),
    computed : {
        isBlog() {
            return process.env.blog;
        }
    },
    mounted() {
        Object.keys(this.show).forEach(key => (this.$set(this.show, key, true)));
        this.startIntervalStep();
        require('owl.carousel');
        setTimeout(() => {
            // eslint-disable-next-line no-undef
            this.blogCarousel = jQuery('#blogCarousel').owlCarousel({
                margin    : 10,
                loop      : true,
                autoWidth : true,
                items     : 4,
                nav       : false,
                dots      : false
            });
        }, 0);
    },
    beforeDestroy() {
        if (this.intervalStep) {
            clearTimeout(this.intervalStep);
        }
        // Object.keys(this.show).forEach(key => (this.$set(this.show, key, false)));
    },
    methods : {
        startIntervalStep() {
            this.intervalStep = setTimeout(() => (this.nextStep()), this.timeStep);
        },
        nextStep() {
            this.currentStep = (this.currentStep >= 4) ? 1 : this.currentStep + 1;
            this.intervalStep = setTimeout(() => (this.nextStep()), this.timeStep);
        },
        blogPrev() {
            this.blogCarousel.trigger('prev.owl.carousel');
        },
        blogNext() {
            this.blogCarousel.trigger('next.owl.carousel');
        }
    }
};
</script>

<style lang="scss">
  @keyframes rotate_image {
    0% {
      transform: rotate(35.56deg) translateY(-2px);
    }
    50% {
      transform: rotate(25.56deg) translateY(30px);
    }
    100% {
      transform: rotate(35.56deg) translateY(-2px);
    }
  }
@import "scss/base/colors";
.index {
  &-partners {
    margin-top: 114px;
    @media(max-width: 767px) {
      margin-top: 60px;
    }
    &-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 29px 0;
      @media (max-width: 575px) {
        justify-content: center;
        flex-direction: column;
      }
    }
  }
  &-partner {
    @media(max-width: 767px) and (min-width: 576px) {
      flex-basis: calc(50% - 30px);
      &:nth-last-child(2), &:nth-last-child(1) {
        margin-top: 30px;
      }
    }
    @media (max-width: 575px) {
      flex-basis: 100%;
      max-width: 200px;
      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }
  }
  &-blog {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: calc(100% - 144px);
    overflow: hidden;
    margin-left: 144px;
    margin-top: 80px;
    position: relative;
    @media (max-width: 991px) {
      flex-direction: column;
      margin-left: 0;
      max-width: 100%;
    }
    &::before {
      content: '';
      display: block;
      position: absolute;
      background: linear-gradient(270deg, #000000 42.01%, rgba(0, 0, 0, 0) 100%);
      width: 319px;
      height: 252px;
      top: 0;
      left: auto;
      right: 0;
      z-index: 2;
      @media (max-width: 991px) {
        bottom: 0;
        top: auto;
        right: -100px;
      }
      @media (max-width: 767px) {
        right: -200px;
      }
    }
    &-carousel {
      @media (min-width: 992px) {
        margin-left: 40px;
      }
      @media (max-width: 991px) {
        margin-left: 15px;
      }
      &--item {
        padding: 22px 15px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: column;
        background: url('~assets/images/index-carousel-item.png') no-repeat center top;
        background-size: cover;
        position: relative;
        width: 263px;
        height: 203px;
        border-radius: 10px;
        overflow: hidden;
        &::before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0), #141212);
        }
      }
      &--title {
        font-weight: bold;
        font-size: 18px;
        line-height: 19px;
        text-align: center;
        color: #FFFFFF;
        position: relative;
        z-index: 1;
      }
      &--text {
        margin-top: 6px;
        font-weight: normal;
        font-size: 14px;
        line-height: 105.7%;
        text-align: center;
        color: #6B6B6B;
        position: relative;
        z-index: 1;
      }
    }
    &-aside {
      @media (max-width: 991px) {
        margin-bottom: 40px;
      }
      &--title {
        font-weight: bold;
        font-size: 98px;
        line-height: 86px;
        color: $white;
      }
      &--bottom {
        margin-top: 29px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      &--navigation {
        margin-right: 23px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
      }
      &--prev, &--next {
        background: linear-gradient(180deg, #E50012 0%, #F30013 0.01%, #740000 100%);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
        border: 0;
        width: 46px;
        height: 36px;
        &::before {
          content: '';
          display: block;
          width: 14px;
          height: 23px;
        }
      }
      &--next {
        margin-left: 9px;
        &::before {
          background: url('~assets/icons/chevron-right.svg') no-repeat center;
        }
      }
      &--prev {
        &::before {
          background: url('~assets/icons/chevron-left.svg') no-repeat center;
        }
      }
      &--showall {
        font-weight: normal;
        font-size: 15px;
        line-height: 13px;
        text-decoration-line: underline;
        color: #DF9797;
        &:hover {
          color: #DF9797;
        }
      }
    }
  }
  &-steps {
    margin-top: 90px;
    &-box {
      position: relative;
      @media (max-width: 991px) {
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 120px;
      }
      @media (max-width: 575px) {
        max-width: 375px;
      }
      @media (max-width: 374px) {
        max-width: 100%;
        margin-bottom: 60px;
      }
    }
    &-subtitle {
      font-size: 15px;
      line-height: 100%;
      color: #ffffff;
      font-weight: 300;
      margin-top: calc(-53px + 13px);
      @media (max-width: 374px) {
        text-align: center;
      }
    }
    &-image {
      position: absolute;
      height: auto;
      z-index: 2;
      animation: rotate_image 9s 0s linear infinite;
      @media (min-width: 1200px) {
        left: 30%;
        top: -20%;
        width: 90%;
      }
      @media (max-width: 1199px) and (min-width: 576px) {
        width: 80%;
        left: 40%;
        top: 0;
      }
      @media (max-width: 575px) and (min-width: 375px) {
        width: 100%;
        left: 40%;
        top: -20px;
      }
      @media (max-width: 374px) {
        width: 70%;
        left: 65%;
        top: -30px;
      }
    }
    &-title {
      user-select: none;
      span {
        background: linear-gradient(180deg, #E50012 0%, #F30013 0.01%, #740000 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: bold;
        font-size: 150px;
        line-height: 100%;
        position: relative;
        z-index: 1;
        @media (max-width: 374px) {
          font-size: 115px;
          text-align: center;
        }
        &:last-child {
          z-index: 2;
          top: calc(-75px + 22px);
        }
      }
    }
    &-main {
      &--row {
        display: flex;
        justify-content: flex-start;
        &:last-child {
          .index-steps-main--status_progress {
            @media (min-width: 1200px) {
              max-height: calc(100% - 38px - 26px);
            }
          }
        }
      }
      &--date {
        white-space: nowrap;
        font-weight: normal;
        font-size: 15px;
        line-height: 117.2%;
        color: #484848;
        padding-top: 6px;
      }
      &--body {
        margin-left: 6px;
      }
      &--title {
        font-weight: 500;
        font-size: 16px;
        line-height: 100%;
        padding-top: 6px;
      }
      &--text {
        margin-top: 19px;
        font-weight: normal;
        font-size: 15px;
        line-height: 117.2%;
        color: #B6B6B6;
        padding-bottom: 30px;
        @media (max-width: 1199px) {
          padding-bottom: 20px;
        }
      }
      &--status {
        margin-left: 9px;
        &_circle {
          background: url('~assets/images/index-status-icon.svg') no-repeat center top;
          min-width: 33px;
          max-width: 33px;
          min-height: 33px;
          max-height: 33px;
          position: relative;
          &::before {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            opacity: 0;
            background: url('~assets/images/index-status-icon-active.svg') no-repeat center top;
            transition: opacity 1s 0s linear;
          }
          &--active {
            &::before {
              opacity: 1;
            }
          }
        }
        &_progress {
          width: 1px;
          background: #4E4E4E;
          height: calc(100% - 38px);
          margin-left: auto;
          margin-right: auto;
          position: relative;
          @media (max-width: 1199px) {
            height: calc(100% - 54px);
          }
          &::before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 0;
            opacity: 0;
            background: $red;
            transition: height 3s 0s linear, opacity .1s 0s linear;
          }
          &.animation {
            &::before {
              opacity: 1;
              height: 100%;
            }
          }
        }
      }
    }
  }
  &-ecosystem {
    margin-top: 183px;
    &-bottom {
      margin-top: 50px;
      &_text {
        max-width: 920px;
        width: 100%;
        margin: 0 auto;
        word-break: break-word;
        text-align: center;
        font-weight: normal;
        font-size: 15px;
        line-height: 19px;
        i {
          font-style: normal;
          color: $red;
        }
        &:last-child {
          margin-top: 13px;
        }
      }
    }
    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 991px) {
        flex-direction: column;
      }
      &_title {
        font-style: normal;
        font-weight: 300;
        font-size: 98px;
        line-height: 123px;
        b {
          font-weight: bold;
        }
        @media (max-width: 575px) {
          font-size: 55px;
          line-height: 100%;
        }
        @media (max-width: 374px) {
          font-size: 48px;
        }
      }
      &_text {
        max-width: 300px;
        position: relative;
        @media (max-width: 991px) {
          margin-left: auto;
          margin-top: 30px;
          max-width: 50%;
        }
        @media (max-width: 767px) {
          max-width: 100%;
        }
        span {
          width: 100%;
          display: block;
          font-weight: 300;
          font-size: 16px;
          line-height: 20px;
          word-break: break-word;
          position: relative;
          z-index: 1;
        }
        &::before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          background: url('~assets/images/ecosystem-text-icon.svg') no-repeat center top;
          width: 55px;
          height: 56px;
          left: -11px;
          top: -19px;
        }
      }
    }
    &-tabs {
      margin-top: 50px;
    }
    &-tab {
      width: 100%;
      max-width: 262px;
      height: 121px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $dark;
      border-radius: 10px;
      box-shadow: 0 16px 123px rgba(162, 0, 0, 0);
      transform: translateY(0);
      transition: all .3s 0s ease-in-out;
      @media (max-width: 1199px) {
        height: 100px;
      }
      @media (max-width: 991px) {
        max-width: 100%;
        height: auto;
        padding-top: 30px;
        padding-bottom: 30px;
        margin-bottom: 15px;
      }
      &:hover {
        box-shadow: 0 16px 123px rgba(162, 0, 0, 0.64);
        transform: translateY(-17px);
      }
      &_text {
        font-weight: normal;
        font-size: 18px;
        line-height: 23px;
        color: $white;
        margin-left: -13px;
        user-select: none;
      }
      &_image {
        user-select: none;
      }
    }
    &-more {
      max-width: 262px;
      width: 100%;
      height: 121px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(180deg, #E50012 0%, #F30013 0.01%, #740000 100%);
      border-radius: 10px;
      position: relative;
      border: 0;
      padding: 0;
      margin: 0;
      box-shadow: 0 16px 123px rgba(162, 0, 0, 0);
      transition: all .3s 0s ease-in-out;
      font-weight: 500;
      font-size: 20px;
      line-height: 25px;
      color: $white;
      @media (max-width: 1199px) {
        height: 100px;
      }
      @media (max-width: 991px) {
        height: auto;
        max-width: 100%;
        padding-top: 40px;
        padding-bottom: 40px;
      }
      &::before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: url('~assets/images/more-info.svg') no-repeat 50%;
        position: absolute;
        left: 0;
        top: 0;
        transform: scale(1);
        transition: all .3s 0s ease-in-out;
      }
      &:hover {
        box-shadow: 0 16px 123px rgba(162, 0, 0, 0.64);
        &::before {
          transform: scale(1.5);
        }
      }
    }
  }
  &-buy {
    margin-top: 97px;
    display: flex;
    align-items: flex-start;
    @media (max-width: 991px) {
      flex-direction: column;
    }
    &-right {
      margin-top: 167px;
      position: relative;
      z-index: 2;
      @media (max-width: 991px) {
        margin-top: 60px;
      }
    }
    &-vector {
      background: url('~assets/images/index-buy-vector.png') no-repeat center top;
      width: 100%;
      height: 789px;
      position: absolute;
      z-index: 0;
      top: 452px;
    }
    &-text {
      margin-left: -33px;
      font-weight: normal;
      font-size: 20px;
      line-height: 25px;
      color: $white;
      @media (max-width: 991px) {
        margin-left: 0;
        text-align: center;
      }
    }
    &-button {
      margin: 22px 0 0 27px;
      background: linear-gradient(180deg, #E50012 0%, #F30013 0.01%, #740000 100%);
      backdrop-filter: blur(20px);
      border-radius: 8px;
      font-weight: normal;
      font-size: 15px;
      line-height: 19px;
      color: $white;
      padding: 14px 55px;
      border: 0;
      transition: all .2s 0s ease-in-out;
      &:hover {
        transform: scale(1.05);
      }
      @media (max-width: 1199px) {
        margin: 8px 0 0 27px;
      }
      @media (max-width: 991px) {
        margin: 30px auto 0;
        display: block;
      }
    }
    &-title {
      position: absolute;
      top: -43px;
      left: auto;
      right: -144px;
      z-index: 1;
      font-weight: bold;
      font-size: 98px;
      line-height: 86px;
      color: $white;
      user-select: none;
      @media (max-width: 991px) {
        position: relative;
        text-align: center;
        left: 0;
        top: 0;
        margin-bottom: 30px;
      }
      @media (max-width: 767px) {
        font-size: 70px;
        line-height: 100%;
      }
      @media (max-width: 575px) {
        font-size: 48px;
      }
    }
    &-video {
      background: rgba(20, 20, 20, 0.7);
      border: 2px solid #242424;
      box-sizing: border-box;
      backdrop-filter: blur(20px);
      border-radius: 10px;
      min-width: 554px;
      max-width: 554px;
      height: auto;
      @media (max-width: 991px) {
        min-width: 100%;
        max-width: 100%;
      }
      &_box {
        background: rgba(20, 20, 20, 0.5);
        border: 2px solid #242424;
        box-sizing: border-box;
        backdrop-filter: blur(10px);
        border-radius: 10px;
        padding: 31px 42px;
        position: relative;
        z-index: 2;
        @media (max-width: 575px) {
          padding: 20px;
        }
      }
      &_inner {
        background: url('~assets/images/buy-video-img.png') no-repeat center;
        width: 100%;
        height: 249.57px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 991px) {
          height: 400px;
          background-size: cover;
        }
        @media (max-width: 767px) {
          height: 300px;
        }
        @media (max-width: 575px) {
          height: auto;
        }
      }
      &_play {
        background: rgba(0, 0, 0, 0.75);
        border: 1px solid rgba(0, 0, 0, 0.51);
        box-sizing: border-box;
        backdrop-filter: blur(9px);
        border-radius: 50%;
        margin: 0;
        padding: 0;
        width: 78.62px;
        height: 78.62px;
        position: relative;
        @media (max-width: 575px) {
          margin-top: 25%;
          margin-bottom: 25%;
        }
        &::before {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          background: url('~assets/icons/video-play.svg') no-repeat center;
        }
      }
    }
  }

  &-live {
    min-height: 103px;
    height: auto;
    position: relative;
    z-index: 2;
    @media (min-width: 1200px) {
      background: url('~assets/images/index-live.svg') no-repeat center top;
      background-size: contain;
    }
    @media (max-width: 1199px) {
      background: $dark;
      border-radius: 10px;
    }
    @media (max-width: 991px) {
      margin-top: 60px;
    }
    &-row {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      min-height: 103px;
      @media (max-width: 991px) {
        height: auto;
        flex-direction: column;
      }
    }
    &-values {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      width: 100%;
      @media (min-width: 1200px) {
        margin-left: 56px;
      }
      @media (max-width: 992px) {
        margin-left: 15px;
      }
      @media (max-width: 991px) {
        flex-wrap: wrap;
        margin-left: 0;
      }
    }
    &-button {
      margin: 0;
      background: linear-gradient(180deg, #E50012 0%, #F30013 0.01%, #740000 100%);
      border-radius: 10px;
      padding: 8px 20px 7px 19px;
      font-weight: normal;
      font-size: 15px;
      line-height: 19px;
      color: $white;
      border: 0;
      white-space: nowrap;
      @media (max-width: 991px) {
        margin-top: 30px;
      }
    }
    &-value {
      @media (min-width: 992px) {
        padding: 31px 29px;
      }
      @media (max-width: 991px) {
        padding: 31px 12px;
        flex-basis: 50%;
      }
      @media (max-width: 575px) {
        flex-basis: 100%;
        padding-left: 0;
        padding-right: 0;
      }
      span {
        text-align: center;
        color: $white;
        &:first-child {
          font-weight: bold;
          font-size: 19px;
          line-height: 24px;
        }
        &:last-child {
          font-weight: normal;
          font-size: 15px;
          line-height: 19px;
        }
      }
    }
  }

  &-header {
    margin-top: 76px;
    position: relative;
    z-index: 1;
    &-image {
      margin-top: 19px;
      position: relative;
      z-index: 1;
    }
    &-title {
      margin-bottom: 0;
      width: 100%;
      color: $white;
      font-weight: 500;
      font-size: 81px;
      line-height: 65px;
      overflow: hidden;
      padding-bottom: 25px;
      @media (max-width: 575px) {
        font-size: 50px;
        line-height: 50px;
      }
      @media (max-width: 374px) {
        font-size: 43px;
        line-height: 40px;
      }
      b {
        font-weight: bold;
        font-size: 150px;
        line-height: 189px;
        @media (max-height: 1199px) {
          font-size: 130px;
          line-height: 115px;
        }
        @media (max-width: 575px) {
          font-size: 79px;
          line-height: 60px;
        }
        @media (max-width: 374px) {
          font-size: 70px;
          line-height: 48px;
        }
      }
      @media (max-width: 991px) {
        text-align: center;
      }
    }
    &-bottom {
      margin-top: 14px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      @media (max-width: 767px) {
        flex-direction: column-reverse;
      }
    }
    &-button {
      background: linear-gradient(180deg, #E50012 0%, #F30013 0.01%, #740000 100%);
      box-shadow: 0 25px 80px rgba(255, 0, 20, 0.4), inset 0px 4px 11px rgba(255, 255, 255, 0.25);
      border-radius: 10px;
      width: 263px;
      height: 65px;
      line-height: 25px;
      font-weight: 500;
      font-size: 20px;
      display: block;
      margin: 0;
      border: 0;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: $white;
      white-space: nowrap;
      padding: 21px 41px 19px;
      transition: all .3s 0s ease-in-out;
      &:hover {
        box-shadow: none;
        transform: scale(1.05);
      }
      @media (max-width: 767px) {
        margin-top: 20px;
      }
    }
    &-text {
      font-weight: 300;
      font-size: 20px;
      line-height: 25px;
      color: $white;
      margin-bottom: 0;
      @media (min-width: 768px) {
        margin-left: 37px;
      }
      @media (max-width: 1199px) {
        font-size: 15px;
        line-height: 18px;
      }
      @media (max-width: 767px) {
        text-align: center;
      }
    }
  }
}
</style>
