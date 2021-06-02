<template>
  <div class="htb">
    <div class="container">
      <transition name="fade" mode="out-in">
        <div v-if="show.head" class="htb-head-row">
          <div class="htb-head">
            <h1 class="htb-title" v-html="$t('HowToBuy.Head.Title')" />
            <div class="htb-subtitle" v-html="$t('HowToBuy.Head.SubTitle')" />
            <div class="htb-buttons">
              <nuxt-link :to="localePath('/markets')" class="htb-button htb-button--market" v-html="$t('HowToBuy.Head.Buttons[0]')" />
              <button type="button" class="htb-button htb-button--buy" v-html="$t('HowToBuy.Head.Buttons[1]')" />
            </div>
          </div>
          <div class="htb-head-video">
            <div class="htb-head-video--inner">
              <img :src="require('~/assets/images/buy-video-img.png').default" alt="" class="htb-head-video--image">
              <div class="htb-head-video--circle" />
              <button type="button" class="htb-head-video--play" />
            </div>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="show.steps" class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 order-lg-1 order-2">
            <div class="htb-steps htb-steps--column">
              <!-- -->
              <div class="htb-step htb-step--first">
                <div class="htb-step-circle">
                  <div class="htb-step-circle--inner">
                    <div class="htb-step-circle--number">
                      01
                    </div>
                  </div>
                </div>
                <div class="htb-step-box">
                  <div class="htb-step-box--title" v-html="$t('HowToBuy.Steps[0].Title')" />
                  <div class="htb-step-box--text" v-html="$t('HowToBuy.Steps[0].Text')" />
                  <div class="htb-step-copy">
                    <div class="htb-step-copy--label" v-html="$t('HowToBuy.Address')" />
                    <div class="htb-step-copy--value" v-html="htbAddress" />
                    <button type="button" class="htb-step-copy--button" @click="copyValue" v-html="$t('HowToBuy.Copy')" />
                  </div>
                </div>
              </div>
              <!-- -->
              <div class="htb-step htb-step--second">
                <div class="htb-step-circle">
                  <div class="htb-step-circle--inner">
                    <div class="htb-step-circle--number">
                      02
                    </div>
                  </div>
                </div>
                <div class="htb-step-box">
                  <div class="htb-step-box--title" v-html="$t('HowToBuy.Steps[1].Title')" />
                  <div class="htb-step-box--text" v-html="$t('HowToBuy.Steps[1].Text')" />
                </div>
              </div>
            </div>
          </div>
          <div class="col col-12 col-lg-6 order-lg-2 order-1">
            <img :src="require(`~/assets/images/htb-example-1.png`).default" alt="" class="htb-example htb-example--first">
          </div>
        </div>
        <div class="row">
          <div class="col col-12">
            <div class="htb-step htb-step--three">
              <div class="htb-step-circle">
                <div class="htb-step-circle--inner">
                  <div class="htb-step-circle--number">
                    03
                  </div>
                </div>
              </div>
              <div class="htb-step-box">
                <div class="htb-step-box--title" v-html="$t('HowToBuy.Steps[2].Title')" />
                <div class="htb-step-box--text" v-html="$t('HowToBuy.Steps[2].Text')" />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col col-12 col-lg-6">
            <div class="htb-step htb-step--four">
              <div class="htb-step-circle">
                <div class="htb-step-circle--inner">
                  <div class="htb-step-circle--number">
                    04
                  </div>
                </div>
              </div>
              <div class="htb-step-box">
                <div class="htb-step-box--title" v-html="$t('HowToBuy.Steps[3].Title')" />
                <div class="htb-step-box--text" v-html="$t('HowToBuy.Steps[3].Text')" />
                <div class="htb-step-box--subtitle">
                  <img :src="require('~/assets/images/htb-example-3.png').default" alt="" class="htb-step-box--subtitle-image">
                  <div class="htb-step-box--text" v-html="$t('HowToBuy.Steps[3].SubTitle')" />
                </div>
                <div class="htb-step-box--bottom" v-html="$t('HowToBuy.Steps[3].Bottom')" />
              </div>
            </div>
          </div>
          <div class="col col-12 col-lg-6">
            <img :src="require(`~/assets/images/htb-example-2.png`).default" alt="" class="htb-example htb-example--second">
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
    name : 'Howtobuy',
    data : () => ({
        show : {
            head  : false,
            steps : false
        },
        htbAddress : '0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3'
    }),
    mounted() {
        Object.keys(this.show).forEach(key => (this.$set(this.show, key, true)));
    },
    methods : {
        async copyValue() {
            try {
                await this.$copyText(this.htbAddress);
                this.$toast.show(this.$t('HowToBuy.CopyNotify'), {
                    type     : 'success',
                    position : 'top-right',
                    duration : 3000
                });
            }
            catch (error) {
                this.$toast.show(error, {
                    type     : 'error',
                    position : 'top-right',
                    duration : 3000
                });
            }
        }
    }
};
</script>

<style scoped lang="scss">
@import "scss/base/colors";
@keyframes rotateText {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
.htb {
  margin-bottom: 70px;
  &-example {
    height: auto;
    &--first {
      margin: 100px auto 0;
    }
    &--second {
      margin: 100px auto 0;
      @media (max-width: 767px) {
        margin-top: 30px;
      }
    }
  }
  &-steps {
    position: relative;
    &--column {
      display: flex;
      flex-direction: column;
    }
  }
  &-step {
    &--first {
      margin-top: 63px;
      @media (max-width: 767px) {
        margin-top: 30px;
      }
    }
    &--second {
      margin-top: 19px;
      @media (max-width: 767px) {
        margin-top: 30px;
      }
    }
    &--three {
      margin-top: 85px;
      @media (max-width: 767px) {
        margin-top: 30px;
      }
    }
    &--four {
      margin-top: 66px;
      @media (max-width: 767px) {
        margin-top: 30px;
      }
    }
    &-box {
      background: #181818;
      border-radius: 10px;
      margin-top: -37px;
      padding: 47px 19px 54px 33px;
      @media (max-width: 1199px) {
        padding: 30px 15px;
      }
      &--bottom {
        margin-top: 30px;
        font-weight: 300;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        color: #808080;
        span {
          color: $white;
        }
      }
      &--subtitle {
        display: flex;
        align-items: center;
        margin-top: 35px;
        @media (max-width: 575px) {
          margin-top: 30px;
          flex-direction: column;
          align-items: flex-start;
        }
        &-image {
          @media (min-width: 576px) {
            margin-right: 27px;
          }
          @media (max-width: 575px) {
            margin-bottom: 25px;
          }
        }
        .htb-step-box--text {
          max-width: 270px;
        }
      }
      &--title {
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: $white;
        b {
          font-weight: 600;
        }
      }
      &--text {
        margin-top: 6px;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #808080;
        span {
          color: $white;
        }
      }
    }
    &-copy {
      margin-top: 12px;
      display: flex;
      justify-content: space-between;
      background-color: #211E1E;
      border-radius: 10px;
      &--label {
        padding: 0 9px 0 14px;
        font-weight: normal;
        font-size: 14px;
        line-height: 39px;
        color: #444444;
        white-space: nowrap;
      }
      &--value {
        padding: 0 39px 0 13px;
        width: 100%;
        font-weight: normal;
        font-size: 12px;
        line-height: 39px;
        color: $white;
        text-align: center;
        white-space: nowrap;
        @media (max-width: 1199px) {
          padding: 0 15px;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      &--button {
        &::before {
          content: '';
          display: block;
          margin-right: 5px;
          width: 12px;
          height: 12px;
          background: url('~assets/icons/copy.svg') no-repeat center;
        }
        background: linear-gradient(180deg, #E50012 0%, #F30013 0.01%, #740000 100%);
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        color: $white;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 39px;
        border: 0;
        padding: 0 18px 0 19px;
        margin: 0;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
    &-circle {
      background: linear-gradient(180deg, rgba(229, 0, 18, 0.2) 0%, rgba(243, 0, 19, 0.2) 0.01%, rgba(116, 0, 0, 0.2) 100%);
      width: 74px;
      height: 74px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin-left: auto;
      margin-right: auto;

      &--inner {
        background: linear-gradient(180deg, rgba(229, 0, 18, 0.2) 0%, rgba(243, 0, 19, 0.2) 0.01%, rgba(116, 0, 0, 0.2) 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 62px;
        height: 62px;
      }

      &--number {
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(180deg, #E50012 0%, #F30013 0.01%, #740000 100%);
        width: 48px;
        height: 48px;
        border-radius: 50%;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
      }
    }
  }
  &-head {
    position: relative;
    z-index: 3;
    margin-top: 74px;
    width: 100%;
    max-width: 549px;
    @media (max-width: 991px) {
      max-width: 100%;
    }
    &-row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      @media (max-width: 991px) {
        flex-direction: column;
      }
    }
    &-video {
      background: rgba(20, 20, 20, 0.7);
      border: 2px solid #242424;
      box-sizing: border-box;
      backdrop-filter: blur(20px);
      border-radius: 10px;
      max-width: 554px;
      width: 100%;
      height: 311.74px;
      margin-top: 74px;
      @media (max-width: 1199px) {
        height: 268.74px;
      }
      @media (max-width: 991px) {
        max-width: 100%;
        height: auto;
        margin-left: auto;
        margin-right: auto;
      }
      &::before {
        content: '';
        display: block;
        width: calc(100% + 2px);
        height: calc(100% + 2px);
        position: absolute;
        z-index: 0;
        left: -1px;
        top: -1px;
        background: rgba(20, 20, 20, 0.5);
        border: 2px solid #242424;
        box-sizing: border-box;
        backdrop-filter: blur(10px);
        border-radius: 10px;
      }
      &--inner {
        position: relative;
        z-index: 2;
        padding: 31px 42px;
        @media (max-width: 575px) {
          padding: 10px;
        }
      }
      &--image {
        display: block;
        border-radius: 10px;
      }
      &--circle {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: url('~assets/images/how-to-player-overlay.svg') no-repeat center;
        z-index: 1;
        animation: rotateText 20s linear infinite;
        @media (max-width: 1199px) {
          background-size: 50%;
        }
      }
      &--play {
        background-color: rgba(0, 0, 0, 0.75);
        background-image: url('~assets/icons/video-play.svg');
        background-repeat: no-repeat;
        background-position: 50%;
        border: 1px solid rgba(0, 0, 0, 0.51);
        box-sizing: border-box;
        backdrop-filter: blur(9px);
        width: 78.62px;
        height: 78.62px;
        border-radius: 50%;
        position: absolute;
        z-index: 1;
        top: calc(50% - (78.62px / 2));
        left: calc(50% - (78.62px / 2));
      }
    }
  }
  &-title {
    font-weight: bold;
    font-size: 130px;
    line-height: 104px;
    color: #ffffff;
    @media (max-width: 1199px) {
      font-size: 100px;
      line-height: 88%;
    }
    @media (max-width: 991px) {
      font-size: 130px;
      line-height: 104px;
    }
    @media (max-width: 767px) {
      font-size: 100px;
      line-height: 88%;
    }
    @media (max-width: 575px) {
      text-align: center;
    }
    @media (max-width: 374px) {
      font-size: 90px;
    }
  }
  &-subtitle {
    position: absolute;
    top: 42px;
    right: 15px;
    @media (max-width: 575px) {
      top: 0;
      right: 0;
      position: relative;
      width: 100%;
      margin-top: 20px;
      text-align: center;
    }
  }
  &-buttons {
    margin-top: 40px;
    display: flex;
    align-items: center;
    @media (max-width: 575px) {
      justify-content: center;
      flex-direction: column;
      margin-top: 30px;
    }
  }
  &-button {
    border: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: $white;
    margin: 0;
    transition: all .2s 0s ease-in-out;
    &:first-child {
      background: linear-gradient(180deg, #E50012 0%, #F30013 0.01%, #740000 100%);
      box-shadow: 0 25px 80px rgba(255, 0, 20, 0.4), inset 0 4px 11px rgba(255, 255, 255, 0.25);
      border-radius: 10px;
      padding: 21px 39px 19px;
      @media (max-width: 1199px) {
        padding: 15px 25px;
      }
      @media (max-width: 991px) {
        padding: 21px 39px 19px;
      }
      &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 0 rgba(255, 0, 20, 0), inset 0 4px 11px rgba(255, 255, 255, 0);
      }
    }
    &:last-child {
      background-color: #351E1E;
      border-radius: 10px;
      padding: 20px 41px 20px 42px;
      margin-left: 22px;
      @media (max-width: 1199px) {
        padding: 15px 25px;
      }
      @media (max-width: 991px) {
        padding: 20px 41px 20px 42px;
      }
      @media (max-width: 575px) {
        margin-left: 0;
        margin-top: 22px;
      }
    }
  }
}
</style>
