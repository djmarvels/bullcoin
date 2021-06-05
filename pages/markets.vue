<template>
  <div class="markets">
    <transition name="fade" mode="out-in">
      <div v-if="show.head" class="container">
        <div class="markets-up">
          <div class="markets-header">
            <h1 class="markets-header--title" v-html="$t('Markets.Title')" />
            <h1 class="markets-header--subtitle" v-html="$t('Markets.SubTitle')" />
          </div>
          <img class="markets-person" :src="require('~/assets/images/roadmap-enot.png')" />
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="container">
        <div class="markets-table--overflow">
          <div class="markets-table">
            <div class="markets-thead">
              <div class="markets-col markets-col-1" />
              <div class="markets-th markets-col markets-col-2" v-html="$t('Markets.Table.Name')" />
              <div class="markets-th markets-col markets-col-3" v-html="$t('Markets.Table.TradePair')" />
              <div class="markets-th markets-col markets-col-4" v-html="$t('Markets.Table.Listed')" />
            </div>
            <div class="markets-tbody">
              <div v-for="row in 8" :key="row" class="markets-tr">
                <div class="markets-td markets-col markets-col-1">
                  <img :src="require(`~/assets/images/markets/${row}.png`)" alt="">
                </div>
                <div class="markets-td markets-col markets-col-2">
                  <a href="#!" class="markets-td--link">
                    BitMart <icon_link />
                  </a>
                </div>
                <div class="markets-td markets-col markets-col-3">
                  <span class="markets-td--text">USDT</span>
                </div>
                <div class="markets-td markets-col markets-col-4">
                  <span class="markets-td--text">4.5.2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="show.background" class="markets-bg" />
    </transition>
  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import icon_link from '~/assets/icons/link.svg?inline';
export default {
    name       : 'Markets',
    components : {
        icon_link
    },
    data : () => ({
        show : {
            table      : false,
            head       : false,
            background : false

        }
    }),
    mounted() {
        Object.keys(this.show).forEach(key => (this.$set(this.show, key, true)));
    }
};
</script>

<style scoped lang="scss">
@import "scss/base/colors";
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
.markets {
  position: relative;
  &-table {
    max-width: 100%;
    overflow-x: auto;
    &--overflow {
      max-width: 100%;
      padding: 31px 27px 34px;
      margin-top: 110px;
      background: rgba(24, 24, 24, 0.85);
      backdrop-filter: blur(36px);
      margin-bottom: 145px;
      position: relative;
      z-index: 4;
      border-radius: 10px;
      @media (max-width: 991px) {
        margin-top: 45px;
      }
    }
  }
  &-thead {
    display: flex;
  }
  &-th {
    font-weight: normal;
    font-size: 15px;
    line-height: 12px;
    color: #B5B5B5;
  }
  &-col {
    &-1 {
      margin-left: 28px;
      flex-basis: 64px;
      @media (max-width: 991px) {
        flex-basis: auto;
        min-width: 64px;
        max-width: 64px;
      }
    }
    &-2 {
      flex-basis: 406px;
    }
    &-3 {
      flex-basis: 447px;
    }
    &-4 {
      flex-basis: 141px;
    }
    &-2, &-3, &-4 {
      @media (max-width: 991px) {
        flex-basis: auto;
        min-width: calc(100% / 3);
        max-width: calc(100% / 3);
      }
      @media (max-width: 767px) {
        min-width: 250px;
        max-width: 250px;
      }
    }
  }
  &-tbody {
    margin-top: 27px;
  }
  &-tr {
    display: flex;
    align-items: center;
    border-radius: 10px;
    height: 68px;
    &:not(&:nth-child(2n)) {
      background: rgba(38, 38, 38, 0.85);
    }
    &:nth-child(2n) {
      background: rgba(24, 24, 24, 0.85);
    }
    &:not(&:last-child) {
      margin-bottom: 15px;
    }
    @media (max-width: 767px) {
      min-width: calc(250px * 3);
    }
  }
  &-td {
    font-weight: bold;
    font-size: 15px;
    line-height: 19px;
    color: $white;
    &--link {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: $white;
      svg {
        position: relative;
        top: 1px;
        margin-left: 7px;
        g, path {
          transition: all .3s 0s linear;
          fill: $white;
        }
      }
    }
  }
  &-bg {
    width: 1796px;
    height: 789px;
    position: absolute;
    z-index: 2;
    left: auto;
    right: -143px;
    top: -143px;
    background: url('~assets/images/markets-vector.png') no-repeat center top;
    @media (max-width: 1199px) {
      right: -400px;
    }
  }
  &-up {
    position: relative;
  }
  &-person {
    @media (min-width: 576px) {
      height: auto;
      position: absolute;
      left: auto;
      z-index: 1;
      animation: rotate_image 9s 0s linear infinite;
    }
    @media (min-width: 992px) {
      width: 60%;
      top: -40%;
      right: -15%;
    }
    @media (max-width: 991px) and (min-width: 768px) {
      width: 60%;
      top: 0;
      right: -15%;
    }
    @media (max-width: 767px) and (min-width: 576px) {
      width: 60%;
      top: 52%;
      right: -25%;
    }
    @media (max-width: 575px) {
      display: none;
    }
  }
  &-header {
    max-width: 557px;
    width: 100%;
    margin-top: 87px;
    position: relative;
    z-index: 4;
    @media (max-width: 767px) {
      max-width: 100%;
    }
    &--title {
      font-weight: bold;
      font-size: 130px;
      line-height: 104px;
      color: #FFFFFF;
      @media (max-width: 767px) {
        text-align: center;
      }
      @media (max-width: 575px) {
        font-size: 70px;
        line-height: 100%;
      }
    }
    &--subtitle {
      margin-top: 15px;
      font-weight: normal;
      font-size: 20px;
      line-height: 25px;
      color: #FFFFFF;
      @media (max-width: 991px) {
        max-width: 455px;
        font-size: 17px;
      }
      @media (max-width: 767px) {
        text-align: center;
        max-width: 100%;
      }
      @media (max-width: 575px) {
        font-size: 15px;
        line-height: 120%;
      }
    }
  }
}
</style>
