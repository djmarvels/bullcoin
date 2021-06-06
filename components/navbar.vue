<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <nuxt-link :to="pathTo('/')" class="navbar-brand flex-center">
      <img src="@/assets/images/logo.svg" alt="">
      <span v-html="$t('Navbar.AppName')" />
    </nuxt-link>
    <div id="navbarMenu" class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="navbar-item">
          <nuxt-link :to="pathTo('/')" class="navbar-link" v-html="$t('Navbar.Ecosystem')" />
        </li>
        <li class="navbar-item">
          <nuxt-link :to="pathTo('/howtobuy')" class="navbar-link" v-html="$t('Navbar.HowToBuy')" />
        </li>
        <li class="navbar-item">
          <nuxt-link :to="pathTo('/')" class="navbar-link" v-html="$t('Navbar.Price')" />
        </li>
        <li class="navbar-item">
          <nuxt-link :to="pathTo('/')" class="navbar-link" v-html="$t('Navbar.Service')" />
        </li>
        <li v-if="isBlog" class="navbar-item">
          <nuxt-link :to="pathTo('/articles')" class="navbar-link" v-html="$t('Navbar.Blog')" />
        </li>
        <li class="navbar-item">
          <nuxt-link :to="pathTo('/contact')" class="navbar-link" v-html="$t('Navbar.Contact')" />
        </li>
      </ul>
      <ul class="navbar-nav navbar-nav--socials">
        <li class="navbar-item">
          <a href="#!" class="navbar-link">
            <img src="@/assets/icons/twitter-white.svg" alt="">
          </a>
        </li>
        <li class="navbar-item">
          <a href="#!" class="navbar-link">
            <img src="@/assets/icons/github-white.svg" alt="">
          </a>
        </li>
        <li class="navbar-item">
          <a href="#!" class="navbar-link">
            <img src="@/assets/icons/telegram-white.svg" alt="">
          </a>
        </li>
      </ul>
    </div>
    <select id="selectLang" class="nice-select selectLang">
      <option
        v-for="(locale, locale_key) in allLocales"
        :key="locale_key"
        :selected="locale.code === currentLocale"
        v-html="locale.code"
      />
    </select>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarMenu"
      aria-controls="navbarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
  </nav>
</template>

<script>
export default {
    name     : 'Navbar',
    computed : {
        allLocales() {
            return this.$i18n.locales;
        },
        currentLocale() {
            return this.$i18n.locale;
        },
        isBlog() {
            return process.env.blog;
        }
    },
    beforeMount() {
        require('~/static/niceSelect');
    },
    mounted() {
        // eslint-disable-next-line no-undef
        jQuery('#selectLang').niceSelect();
        // eslint-disable-next-line no-undef
        jQuery('.selectLang').attr('class', `nice-select selectLang ${this.currentLocale}`);
        // eslint-disable-next-line no-undef
        jQuery('#selectLang').on('change', (event) => {
            this.$i18n.setLocale(event.target.value);
            setTimeout(() => {
                // eslint-disable-next-line no-undef
                jQuery('.selectLang').attr('class', `nice-select selectLang ${event.target.value}`);
            }, 0);
        });
    },
    methods : {
        pathTo(path) {
            if (typeof this.localePath === 'undefined') {
                return path;
            }
            return this.localePath(path);
        }
    }
};
</script>

<style scoped lang="scss">
@import "scss/base/colors";
.navbar {
  width: 100%;
  padding: 23px 0 0;

  @media (max-width: 991px) {
    justify-content: flex-start;
  }

  &-brand {
    padding: 0;
    margin-right: 0;
    position: relative;
    z-index: 3;
    order: 1;

    img {
      width: 36px;
      height: 31px;
    }

    span {
      margin-left: 3px;
      font-weight: normal;
      font-size: 22px;
      line-height: 28px;
      color: $white;
      text-transform: uppercase;

      b {
        font-weight: bold;
      }
    }
  }

  &-collapse {
    margin-left: auto;
    justify-content: flex-end;
    position: relative;
    z-index: 3;
    @media (min-width: 992px) {
      order: 2;
    }
    @media (max-width: 991px) {
      order: 4;
    }
  }

  &-nav {
    &:first-child {
      @media (max-width: 991px) {
        padding-top: 30px;
      }
    }
    &:last-child {
      @media (min-width: 992px) {
        margin-left: 30px;
        li.navbar-item {
          &::after {
            content: initial !important;
          }
        }
      }
      @media (max-width: 991px) {
        flex-direction: row;
        justify-content: center;
        margin-top: 30px;
        li.navbar-item {
          margin-bottom: 0 !important;
          &:not(:last-child) {
            margin-right: 30px;
          }
        }
      }
    }
  }

  &-item {
    white-space: nowrap;
    position: relative;
    transition: all .2s 0s linear;
    &:not(:last-child) {
      @media (min-width: 992px) {
        margin-right: 30px;
      }
      @media (max-width: 991px) {
        margin-bottom: 15px;
      }
    }
    @media (max-width: 991px) {
      text-align: center;
    }

    @media (min-width: 992px) {
      &::after {
        content: '';
        display: block;
        background: url('~assets/images/navbar-hover.svg') no-repeat center top;
        width: 100%;
        min-height: 8px;
        max-height: 8px;
        position: absolute;
        top: 22px;
        opacity: 0;
        transform: scale(0) translateY(8px);
        transition: all .2s .1s ease-in-out;
        transform-origin: 0 50%;
      }
      &:hover {
        transform: translateY(-3px);
        &::after {
          transform: scale(1) translateY(3px);
          opacity: 1;
        }
      }
    }
  }

  &-link {
    font-weight: normal;
    font-size: 15px;
    line-height: 19px;
    color: $white;
  }

  &-toggler {
    @media (max-width: 991px) {
      order: 3;
      border-radius: 6px;
      border: 1px solid #ffffff;
      padding: 0;
      height: 33px;
      width: auto;
      position: relative;
      z-index: 3;
    }
    @media (max-width: 991px) and (min-width: 376px) {
      margin-left: 30px;
    }
    @media (max-width: 375px) {
      margin-left: 10px;
    }
    &-icon {
      @media (max-width: 991px) {
        width: 46px;
        height: 23px;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
      }
    }
  }
}
</style>
