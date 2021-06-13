<template>
  <div class="wallet">
    <template v-if="view">
      <div class="wallet-bg" />
      <div class="container">
        <div class="wallet-title" v-html="$t('Wallet.Title')" />
        <div class="wallet-subtitle" v-html="$t('Wallet.SubTitle')" />
      </div>
    </template>

    <template v-if="view">
      <div class="container">
        <div class="wallet-box">
          <div class="wallet-box-form">
            <input type="text" class="wallet-box-input" :placeholder="$t('Wallet.Form.Input')">
            <button type="button" class="wallet-box-btn" v-html="$t('Wallet.Form.Button')" />
          </div>
          <div class="wallet-box-row">
            <div class="wallet-box-col">
              <span>6,367,990.0540</span>
              <span v-html="$t('Wallet.Balance')" />
            </div>
            <div class="wallet-box-col">
              <span>0.810</span>
              <span v-html="$t('Wallet.Liquidity')" />
            </div>
            <div class="wallet-box-col">
              <span>$25.33</span>
              <span v-html="$t('Wallet.Value')" />
            </div>
            <div class="wallet-box-col">
              <span>0.000003978</span>
              <span v-html="$t('Wallet.Price')" />
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-if="view">
      <div class="container">
        <div class="wallet-table--overflow">
          <div class="wallet-table">
            <div class="wallet-table-title" v-html="$t('Wallet.Table.Ranks')" />
            <div class="wallet-thead">
              <div class="wallet-col wallet-col-1" />
              <div class="wallet-th wallet-col wallet-col-2" v-html="$t('Wallet.Table.Title')" />
              <div class="wallet-th wallet-col wallet-col-3" v-html="$t('Wallet.Table.Min')" />
              <div class="wallet-th wallet-col wallet-col-4" v-html="$t('Wallet.Table.Max')" />
            </div>
            <div class="wallet-tbody">
              <div v-for="row in table" :key="row.id" class="wallet-tr">
                <div class="wallet-td wallet-col wallet-col-1">
                  <img :src="row.img" alt="">
                </div>
                <div class="wallet-td wallet-col wallet-col-2">
                  <a href="#!" class="wallet-td--title" v-html="row.title" />
                </div>
                <div class="wallet-td wallet-col wallet-col-3">
                  <span class="wallet-td--min" v-html="row.min" />
                </div>
                <div class="wallet-td wallet-col wallet-col-4">
                  <span class="wallet-td--max" v-html="row.max" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
    name : 'Wallet',
    data : () => ({
        view : false
    }),
    created() {
        this.table = [
            { id : 1, img : require('~/assets/images/wallet/1.png'), title : 'Kraken', min : '1 Trillion+\t', max : '4.5.2021' },
            { id : 2, img : require('~/assets/images/wallet/2.png'), title : 'BitMart', min : '500.0B\t', max : '999.99B' },
            { id : 3, img : require('~/assets/images/wallet/3.png'), title : 'Kraken', min : '1 Trillion+\t', max : '4.5.2021' },
            { id : 4, img : require('~/assets/images/wallet/4.png'), title : 'BitMart', min : '500.0B\t', max : '999.99B' },
            { id : 5, img : require('~/assets/images/wallet/5.png'), title : 'Kraken', min : '1 Trillion+\t', max : '4.5.2021' },
            { id : 6, img : require('~/assets/images/wallet/6.png'), title : 'BitMart', min : '500.0B\t', max : '999.99B' },
            { id : 7, img : require('~/assets/images/wallet/7.png'), title : 'Kraken', min : '1 Trillion+\t', max : '4.5.2021' },
            { id : 8, img : require('~/assets/images/wallet/8.png'), title : 'BitMart', min : '500.0B\t', max : '999.99B' }
        ];
    },
    mounted() {
        this.$nextTick(() => {
            this.view = true;
        });
    }
};
</script>

<style scoped lang="scss">
.wallet {
  position: relative;
  margin: 69px 0 40px;

  &-title {
    font-style: normal;
    font-weight: bold;
    font-size: 130px;
    line-height: 104px;
    color: #FFFFFF;
    margin-top: 15px;
    @media (max-width: 991px) and (min-width: 768px) {
      font-size: 95px;
      line-height: 110%;
    }
    @media (max-width: 767px) and (min-width: 576px) {
      font-size: 70px;
      line-height: 110%;
    }
    @media (max-width: 575px) {
      font-size: 42px;
      line-height: 110%;
      white-space: nowrap;
    }
  }
  &-subtitle {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 25px;
    color: #ffffff;
    margin-top: 15px;
    min-height: 50px;
    @media (max-width: 767px) and (min-width: 576px) {
      font-size: 18px;
      line-height: 110%;
    }
    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 110%;
    }
  }
  &-title, &-subtitle {
    z-index: 3;
    position: relative;
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
  &-box {
    margin-top: 13px;
    background: rgba(24, 24, 24, 0.85);
    backdrop-filter: blur(36px);
    border-radius: 10px;
    position: relative;
    z-index: 3;

    @media (min-width: 768px) {
      padding: 36px 53px;
    }
    @media (max-width: 767px) {
      padding: 20px 25px;
    }

    &-form {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0 0 41px;
      @media (max-width: 575px) {
        flex-direction: column;
      }
    }

    &-input {
      border-radius: 10px 0 0 10px;
      background: rgba(34, 34, 34, 0.85);
      padding: 0 34px;
      border: 0;
      display: block;
      font-size: 17px;
      line-height: 68px;
      font-weight: normal;
      color: #ffffff;
      width: calc(100% - 207px);
      outline: none;
      min-height: 68px;
      max-height: 68px;
      @media (max-width: 767px) {
        padding: 0 15px;
        min-height: 48px;
        max-height: 48px;
        width: calc(100% - 178px);
      }
      @media (max-width: 575px) {
        width: 100%;
        border-radius: 5px;
        margin-bottom: 12px;
      }
      &::placeholder {
        color: #B5B5B5;
      }
    }
    &-btn {
      background: linear-gradient(180deg, #E50012 0%, #F30013 0.01%, #740000 100%);
      border-radius: 0 10px 10px 0;
      display: block;
      border: 0;
      outline: none;
      padding: 27px 49px;
      line-height: 14px;
      font-size: 17px;
      color: #ffffff;
      @media (max-width: 767px) {
        padding: 17px 36px;
        white-space: nowrap;
      }
      @media (max-width: 575px) {
        border-radius: 5px;
        width: 100%;
      }
    }
    &-row {
      margin-top: 41px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 767px) {
        margin-top: 0;
        margin-bottom: 24px;
      }
      @media (max-width: 575px) {
        flex-wrap: wrap;
      }
    }
    &-col {
      @media (max-width: 575px) {
        flex-basis: 50%;
        &:nth-child(1), &:nth-child(2) {
          margin-bottom: 24px;
        }
      }
      span {
        display: block;
        font-size: 19px;
        text-align: center;
        line-height: 15px;
        @media (max-width: 767px) {
          font-size: 16px;
        }
        &:first-child {
          font-weight: bold;
          color: #FFFFFF;
        }
        &:last-child {
          font-weight: 300;
          margin-top: 8px;
          color: #B5B5B5;
        }
      }
      &:nth-child(3) span:first-child {
        color: #00BB1E;
      }
    }
  }
  /* Table */
  &-table {
    max-width: 100%;
    overflow-x: auto;
    width: 100%;
    &--overflow {
      max-width: 100%;
      padding: 31px 27px 34px;
      margin-top: 26px;
      background: rgba(24, 24, 24, 0.85);
      backdrop-filter: blur(36px);
      position: relative;
      z-index: 4;
      border-radius: 10px;
      width: 100%;
      @media (max-width: 991px) {
        margin-top: 45px;
      }
    }
    &-title {
      margin-bottom: 24px;
      font-weight: bold;
      font-size: 32px;
      line-height: 26px;
      color: #FFFFFF;
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
    text-transform: uppercase;
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
    color: #ffffff;
    &--title {
      text-decoration: none !important;
      color: #ffffff !important;
    }
  }
}
</style>
