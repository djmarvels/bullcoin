<template>
  <div class="page">
    <transition name="fade">
      <div v-if="page" class="container">
        <div class="page-image">
          <div class="page-image-inner" :style="{ backgroundImage: `url(${require('~/assets/images/article-main-image.png').default})` }" />
          <div class="page-image-header">
            <nuxt-link :to="localePath('/articles')" class="page-image-prev">
              <articlePrev /> <span v-html="$t('Page.Prev')" />
            </nuxt-link>
            <div class="page-image-date">
              16.06.2022 / 13:00
            </div>
          </div>
          <h1 class="page-title" v-html="'Заголовок статьи<br> '+ 'в две строки'" />
        </div>
        <div class="page-content">
          <div class="page-content-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor in at ut vulputate enim condimentum viverra purus. Sapien nunc ultrices pellentesque ac. Enim eget erat at rhoncus posuere sapien. Sit malesuada fusce in gravida orci sed massa odio. Fames in tortor, iaculis tristique elit. Id viverra tellus aliquam mus vulputate suscipit eget enim.<br>
            Sed sed iaculis id elementum. Arcu id luctus vitae viverra nisl ut aliquam, quam eu. Fringilla sed amet tempus scelerisque ac iaculis. Quam velit mauris elementum vel morbi parturient ultrices pharetra. Gravida nunc massa interdum tincidunt vitae cursus quis posuere arcu. Pharetra turpis sit rhoncus, nunc venenatis, tellus faucibus. Nulla ullamcorper faucibus risus et massa netus fringilla. Purus elementum non at proin risus faucibus.<br>
            Lobortis eu neque, est sed proin et massa id. Rhoncus mauris, viverra scelerisque nulla sagittis diam. Rutrum quis et vulputate auctor vivamus. Lectus lacus et, ut sem pellentesque diam pellentesque. Urna egestas ut accumsan, lacus, viverra. Praesent velit quisque sagittis aliquam. Egestas massa ornare erat scelerisque porttitor pellentesque justo, ante. Senectus lectus est, diam, in semper pellentesque consectetur. Magna volutpat amet ipsum leo. Quis sed ac pellentesque pellentesque urna, id donec. Mattis sagittis dolor sem sapien sapien, eget facilisi. Vulputate varius in gravida consectetur felis. Gravida eros pellentesque nam pulvinar iaculis auctor vestibulum ante vitae.<br>
            Hac gravida a, diam sed gravida proin ut odio. Amet adipiscing eget sem eget ultrices non hendrerit mauris nec. Aliquet diam tristique curabitur massa in justo, odio risus. Suspendisse interdum nunc sociis velit. Augue magna viverra eget sem sed. Nunc orci a, hendrerit egestas. Nunc justo ornare elit turpis lacus, nunc, dui. Gravida pharetra sit sed mauris. Ipsum, sed elementum ultrices semper donec. Lectus tortor convallis quis porta justo nullam urna, scelerisque consectetur. Aliquet vehicula pretium varius orci convallis elementum. Sed pellentesque in ultricies sit nam. Faucibus tincidunt mattis morbi nisl, elementum in ac mattis. Bibendum enim rhoncus neque dictum proin elementum. Neque feugiat scelerisque egestas vivamus aliquam.
          </div>
        </div>
        <div class="row page-content--row">
          <div class="col col-12 col-lg-6">
            <img class="page-content-picture" :src="require('~/assets/images/page-picture.png')">
          </div>
          <div class="col col-12 col-lg-6">
            <div class="page-content-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor in at ut vulputate enim condimentum viverra purus. Sapien nunc ultrices pellentesque ac. Enim eget erat at rhoncus posuere sapien. Sit malesuada fusce in gravida orci sed massa odio. Fames in tortor, iaculis tristique elit. Id viverra tellus aliquam mus vulputate suscipit eget enim.
              Sed sed iaculis id elementum. Arcu id luctus vitae viverra nisl ut aliquam, quam eu. Fringilla sed amet tempus scelerisque ac iaculis. Quam velit mauris elementum vel morbi parturient ultrices pharetra. Gravida nunc massa interdum tincidunt vitae cursus quis posuere arcu. Pharetra turpis sit rhoncus, nunc venenatis, tellus faucibus. Nulla ullamcorper faucibus risus et massa netus fringilla. Purus elementum non at proin risus faucibus.
              Lobortis eu neque, est sed proin et massa id. Rhoncus mauris, viverra scelerisque nulla sagittis diam. Rutrum quis et vulputate auctor vivamus. Lectus lacus et, ut sem pellentesque diam pellentesque. Urna egestas ut accumsan, lacus, viverra. Praesent velit quisque sagittis aliquam. Egestas massa
            </div>
          </div>
        </div>
        <div class="row page-content--column">
          <div class="col col-12">
            <img class="page-content-picture" :src="require('~/assets/images/page-picture-bottom.png')">
          </div>
          <div class="col col-12">
            <div class="page-content-text page-content-text--column">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor in at ut vulputate enim condimentum viverra purus. Sapien nunc ultrices pellentesque ac. Enim eget erat at rhoncus posuere sapien. Sit malesuada fusce in gravida orci sed massa odio. Fames in tortor, iaculis tristique elit. Id viverra tellus aliquam mus vulputate suscipit eget enim.
            </div>
          </div>
        </div>
        <div class="row page-content--column">
          <div class="col col-12">
            <img class="page-content-picture" :src="require('~/assets/images/page-picture-bottom.png')">
          </div>
          <div class="col col-12">
            <div class="page-content-text page-content-text--column">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor in at ut vulputate enim condimentum viverra purus. Sapien nunc ultrices pellentesque ac. Enim eget erat at rhoncus posuere sapien. Sit malesuada fusce in gravida orci sed massa odio. Fames in tortor, iaculis tristique elit. Id viverra tellus aliquam mus vulputate suscipit eget enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor in at ut vulputate enim condimentum viverra purus. Sapien nunc ultrices pellentesque ac. Enim eget erat at rhoncus posuere sapien. Sit malesuada fusce in gravida orci sed massa odio. Fames in tortor, iaculis tristique elit. Id viverra tellus aliquam mus vulputate suscipit eget enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor in at ut vulputate enim condimentum viverra purus. Sapien nunc ultrices pellentesque ac. Enim eget erat at rhoncus posuere sapien. Sit malesuada fusce in gravida orci sed massa odio. Fames in tortor, iaculis tristique elit. Id viverra tellus aliquam mus vulputate suscipit eget enim.
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="blog" class="index-blog">
        <div class="index-blog-aside">
          <div class="index-blog-aside--title" v-html="$t('Page.Blog')" />
          <div class="index-blog-aside--bottom">
            <div class="index-blog-aside--navigation">
              <button type="button" class="index-blog-aside--prev" @click="blogPrev" />
              <button type="button" class="index-blog-aside--next" @click="blogNext" />
            </div>
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
  </div>
</template>

<script>
import articlePrev from '~/assets/icons/article-prev.svg?inline';
export default {
    name       : 'Page',
    components : {
        articlePrev
    },
    data : () => ({
        page         : false,
        blog         : false,
        blogCarousel : null
    }),
    mounted() {
        require('owl.carousel');
        this.$nextTick(() => {
            this.page = true;
            this.blog = true;
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
            }, 100);
        });
    },
    methods : {
        blogPrev() {
            this.blogCarousel.trigger('prev.owl.carousel');
        },
        blogNext() {
            this.blogCarousel.trigger('next.owl.carousel');
        }
    }
};
</script>

<style scoped lang="scss">
  @import "scss/base/colors";
.page {
  margin-top: 36px;
  margin-bottom: 118px;
  &-content {
    margin-top: 30px;
    &-text {
      font-size: 15px;
      line-height: 188.7%;
      color: #FFFFFF;
      font-weight: 300;
      &--column {
        margin-top: 37px;
      }
    }
    &-picture {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    &--row {
      margin-top: 49px;
    }
    &--column {
      margin-top: 49px;
    }
  }
  &-image {
    background: linear-gradient(180deg, #E50012 0%, #F30013 0.01%, #740000 100%);
    min-height: 300px;
    max-height: 300px;
    border-radius: 10px;
    position: relative;
    @media (max-width: 575px) {
      min-height: 200px;
      max-height: 200px;
    }
    &-inner {
      border-radius: 10px;
      width: 100%;
      height: auto;
      display: block;
      min-height: 300px;
      max-height: 100%;
      object-fit: cover;
      mix-blend-mode: overlay;
      opacity: .5;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      @media (max-width: 575px) {
        min-height: 200px;
      }
    }
    &-header {
      position: relative;
      z-index: 3;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 31px 32px 0 18px;
      @media (max-width: 575px) {
        padding: 30px 10px 0;
      }
    }
    &-prev {
      display: flex;
      align-items: center;
      font-weight: normal;
      color: #ffffff;
      font-size: 15px;
      line-height: 105.7%;
      svg {
        margin-right: 7px;
        display: block;
        width: 9px;
        height: 14px;
        g, path {
          fill: #ffffff;
        }
      }
      span {
        @media (max-width: 575px) {
          white-space: nowrap;
        }
      }
    }
    &-date {
      font-size: 15px;
      line-height: 105.7%;
      font-weight: normal;
      text-align: center;
      color: #FFFFFF;
      @media (max-width: 575px) {
        font-size: 14px;
        white-space: nowrap;
      }
    }
  }
  &-title {
    font-weight: bold;
    font-size: 50px;
    line-height: 105.7%;
    text-align: center;
    color: #FFFFFF;
    margin-top: 60px;
    @media (max-width: 575px) {
      font-size: 24px;
      margin-top: 30px;
    }
  }
}
  .index {
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
  }
</style>
