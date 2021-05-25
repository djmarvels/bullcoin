<template>
  <div class="contact">
    <div class="container">
      <transition name="fade">
        <div class="contact-content" v-if="show.contact">
          <div class="contact-title" v-html="$t('Contact.Title')" />
          <div class="contact-info-row">
            <div class="contact-info-col">
              <div class="contact-info-label" v-html="$t('Contact.Email')" />
              <div class="contact-info-value" v-html="'hello@bullcoin.com'" />
            </div>
            <div class="contact-info-col">
              <div class="contact-info-label" v-html="$t('Contact.Cooperation')" />
              <div class="contact-info-value" v-html="'coop@bullcoin.com'" />
            </div>
          </div>
          <div class="contact-socials">
            <a href="#!" class="contact-social contact-social--discord">
              <discord /> Discord chanel
            </a>
            <a href="#!" class="contact-social contact-social--telegram">
              <telegram /> Telegram
            </a>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import discord from '~/assets/images/footer/discord.svg?inline';
import telegram from '~/assets/images/footer/telegram.svg?inline';
export default {
    name       : 'Contact',
    components : {
        discord,
        telegram
    },
    data : () => ({
        show : {
            contact      : false
        }
    }),
    mounted() {
        Object.keys(this.show).forEach(key => (this.$set(this.show, key, true)));
    }
};
</script>

<style scoped lang="scss">
.contact {
  margin-top: 47px;
  margin-bottom: 450px;
  @media (max-width: 575px) {
    margin-bottom: 200px;
  }
  &-content {
    position: relative;
    z-index: 2;
  }
  &-title {
    font-weight: bold;
    font-size: 130px;
    line-height: 163px;
    color: #FFFFFF;
    text-align: center;
    @media (max-width: 575px) {
      font-size: 70px;
      line-height: 120%;
    }
  }
  &-info {
    &-row {
      margin-top: 12px;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      @media (max-width: 575px) {
        align-items: center;
        flex-direction: column;
      }
    }
    &-col {
      &:last-child {
        margin-left: 118px;
        @media (max-width: 575px) {
          margin-left: 0;
          margin-top: 30px;
        }
      }
    }
    &-label, &-value {
      text-align: center;
      font-size: 16px;
      line-height: 20px;
      color: #FFFFFF;
    }
    &-label {
      margin-bottom: 1px;
      font-weight: normal;
    }
    &-value {
      font-weight: bold;
    }
  }
  &-socials {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: 26px;
    @media (max-width: 575px) {
      flex-direction: column;
      align-items: center;
      margin-top: 40px;
    }
  }
  &-social {
    display: flex;
    align-items: center;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    background: #211E1E;
    border-radius: 31px;
    svg {
      display: block;
      margin-right: 17px;
      g, path {
        fill: #ffffff;
      }
    }
    &--discord {
      padding: 14px 35px;
      svg {
        width: 30px;
        height: 34px;
      }
    }
    &--telegram {
      margin-left: 42px;
      @media (max-width: 575px) {
        margin-left: 0;
        margin-top: 30px;
      }
      padding: 15px 55px 16px;
      svg {
        width: 31px;
        height: 31px;
      }
    }
  }
}
</style>
