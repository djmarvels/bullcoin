<template>
  <div class="footer">
    <div class="container">
      <div class="footer-up">
        <div class="footer-brand">
          <nuxt-link class="footer-logo" :to="localePath('/')">
            <img src="@/assets/images/logo.svg" alt="">
            <span v-html="$t('Navbar.AppName')" />
          </nuxt-link>
          <div class="footer-logo-text" v-html="$t('Footer.LogoText')" />
        </div>
        <div class="footer-menu">
          <!-- Home -->
          <nuxt-link :to="localePath('/')" v-html="$t(`Footer.Menu[0]`)" />
          <!-- How to buy -->
          <nuxt-link :to="localePath('/howtobuy')" v-html="$t(`Footer.Menu[1]`)" />
          <!-- Blogs -->
          <nuxt-link :to="localePath('/')" v-html="$t(`Footer.Menu[2]`)" />
          <!-- Price -->
          <nuxt-link :to="localePath('/')" v-html="$t(`Footer.Menu[3]`)" />
          <!-- Services -->
          <nuxt-link :to="localePath('/')" v-html="$t(`Footer.Menu[4]`)" />
          <!-- Contract -->
          <nuxt-link :to="localePath('/')" v-html="$t(`Footer.Menu[5]`)" />
          <!-- Wallet Tracker -->
          <nuxt-link :to="localePath('/')" v-html="$t(`Footer.Menu[6]`)" />
          <!-- F.A.Q -->
          <nuxt-link :to="localePath('/')" v-html="$t(`Footer.Menu[7]`)" />
        </div>
        <div class="footer-socials">
          <a href="#!" class="footer-social"><twitter /></a>
          <a href="#!" class="footer-social"><twitch /></a>
          <a href="#!" class="footer-social"><github /></a>
          <a href="#!" class="footer-social"><facebook /></a>
          <a href="#!" class="footer-social"><instagram /></a>
          <a href="#!" class="footer-social"><panic /></a>
          <a href="#!" class="footer-social"><youtube /></a>
          <a href="#!" class="footer-social"><telegram /></a>
          <a href="#!" class="footer-social"><discord /></a>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copyright" v-html="$t('Footer.Copyright')" />
        <div class="footer-links">
          <nuxt-link :to="localePath('/terms')" v-html="$t('Footer.Terms')" />
          <nuxt-link :to="localePath('/terms')" v-html="$t('Footer.Privacy')" />
          <nuxt-link :to="localePath('/terms')" v-html="$t('Footer.Cookie')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import twitter from '@/assets/images/footer/twitter.svg?inline';
import twitch from '@/assets/images/footer/twitch.svg?inline';
import github from '@/assets/images/footer/github.svg?inline';
import facebook from '@/assets/images/footer/facebook.svg?inline';
import instagram from '@/assets/images/footer/instagram.svg?inline';
import panic from '@/assets/images/footer/panic.svg?inline';
import youtube from '@/assets/images/footer/youtube.svg?inline';
import telegram from '@/assets/images/footer/telegram.svg?inline';
import discord from '@/assets/images/footer/discord.svg?inline';
export default {
    name       : 'Footer',
    components : {
        twitter,
        twitch,
        github,
        facebook,
        instagram,
        panic,
        youtube,
        telegram,
        discord
    }
};
</script>

<style scoped lang="scss">
@import "scss/base/colors";
.footer {
  padding-top: 35px;
  padding-bottom: 35px;
  height: auto;
  &-bottom {
    margin-top: 34px;
    padding-top: 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #3A3A3A;
    position: relative;
    z-index: 2;
    @media (max-width: 767px) {
      flex-direction: column;
    }
  }
  &-copyright {
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: $white;
    @media (max-width: 767px) {
      margin-bottom: 30px;
    }
  }
  &-links {
    display: flex;
    align-items: center;
    @media (max-width: 575px) {
      flex-direction: column;
      align-items: center;
    }
    a {
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      color: $white;
      transition: all .2s 0s linear;
      &:hover {
        color: $red;
      }
      @media (min-width: 576px) {
        &:not(:last-child) {
          margin-right: 31px;
        }
      }
      @media (max-width: 575px) {
        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
  }
  &-up {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    z-index: 2;
    @media (max-width: 991px) {
      flex-wrap: wrap;
    }
  }
  &-brand {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }
  &-socials {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 991px) {
      margin-left: 0;
      margin-top: 30px;
      flex-basis: 100%;
      width: 100%;
      max-width: 100%;
      justify-content: space-between;
    }
    @media (max-width: 575px) {
      flex-wrap: wrap;
    }
  }
  &-social {
    @media (min-width: 992px) {
      &:not(:last-child) {
        margin-right: 18px;
      }
    }
    @media (max-width: 575px) {
      flex-basis: calc(100% / 3);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 15px;
      &:nth-last-child(1), &:nth-last-child(2), &:nth-last-child(3) {
        margin-bottom: 0;
      }
    }
    svg {
      g, path {
        transition: all .2s 0s linear;
      }
    }
    &:hover {
      svg {
        g, path {
          fill: #ffffff;
        }
      }
    }
  }
  &-menu {
    margin-left: 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: column;
    max-width: 340px;
    max-height: 79px;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 767px) {
      margin-left: 0;
      margin-top: 30px;
    }
    a {
      display: block;
      font-weight: 500;
      font-size: 15px;
      line-height: 19px;
      color: $white;
      margin-bottom: 10px;
      transition: all .2s 0s linear;
      &:hover {
        color: $red;
      }
      &:nth-child(3), &:nth-child(6) {
        margin-bottom: 0;
      }
    }
  }
  &-logo {
    display: flex;
    align-items: center;
    @media (max-width: 767px) {
      flex-basis: 100%;
    }
    img {
      width: 36px;
      height: 31px;
    }
    span {
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      line-height: 28px;
      margin-left: 3px;
      color: $white;
      text-transform: uppercase;
      b {
        font-weight: bold;
      }
    }
    &-text {
      margin-top: 6px;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: #595959;
      word-break: break-word;
      @media (min-width: 768px) {
        max-width: 262px;
      }
    }
  }
}
</style>
