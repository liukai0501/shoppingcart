<script setup lang="ts">
import {useComputer} from "@/hooks/useComputer";
const {computerArray,changeCount,changeChecked,allPrice,closeAccount,removeProduct} = useComputer()
</script>
<template>
  <div class="cart-board cover">
    <div class="container">
      <ul class="cart-board-title">
        <li>选择</li>
        <li>商品名称</li>
        <li>图片</li>
        <li>单价</li>
        <li>数量</li>
        <li>总价</li>
        <li>删除</li>
      </ul>
      <div class="cart-item" v-for="item in computerArray" :key="item.productId">
        <div class="cart-item-select">
          <input type="checkbox" :checked="item.checked" @click="changeChecked(item.productId)">
        </div>
        <div class="cart-item-name">
          {{item.productName}}
        </div>
        <div class="cart-item-img">
          <img :src="require(`../../assets/static/img/${item.productImg}`)" alt="照片无法显示">
        </div>
        <div class="cart-item-price">
          ￥{{item.productPrice}}
        </div>
        <div class="cart-item-count">
          <div class="count-area">
            <a href="javascript:;" @click="changeCount('reduce',item.productId)">-</a>
            <span>&nbsp;&nbsp;{{item.productCount}}&nbsp;&nbsp;</span>
            <a href="javascript:;" @click="changeCount(' ',item.productId)">+</a>
          </div>
        </div>
        <div class="cart-item-total">
          <span class="price-num">￥{{item.productPrice*item.productCount}}</span>
        </div>
        <div class="cart-item-remove">
          <a href="javascript:;" @click="removeProduct(item.productId)">删除</a>
        </div>
      </div>
      <div class="cart-board-footer">
        <div class="total-price">
          <span class="price-text">总价:
          <span class="price-num">{{allPrice}}</span>
          </span>
          <button class="total-button" @click="closeAccount">结算</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$item-total-width: 1226px;

.cart-board {
  .container {
    width: 1226px;
    margin: 0 auto;
    background-color: #fff;

    .cart-board-title {
      display: flex;
      height: 3rem;
      background-color: #ddd;

      li {
        display: flex;
        justify-content: center;
        align-items: center;

        &:nth-child(1) {
          width: $item-total-width * 1 / 15;
        }

        &:nth-child(2) {
          width: $item-total-width * 4 / 15;
        }

        &:nth-child(3) {
          width: $item-total-width * 2 / 15;
        }

        &:nth-child(4) {
          width: $item-total-width * 2 / 15;
        }

        &:nth-child(5) {
          width: $item-total-width * 2 / 15;
        }

        &:nth-child(6) {
          width: $item-total-width * 2 / 15;
        }

        &:nth-child(7) {
          width: $item-total-width * 2 / 15;
        }
      }
    }

    .cart-item {
      display: flex;
      width: 100%;
      height: 8rem;
      border: 1px solid #ddd;
      border-top: none;

      .cart-item-count {
        display: flex;

        .count-area {
          width: auto;
          border: 1px solid #ddd;

          a {
            display: flex;
            width: 2rem;
            height: 2rem;
            justify-content: center;
            align-items: center;
            background-color: #ddd;;
          }
        }
      }

      .cart-item-img {
        padding: 1rem;

        img {
          height: 100%;
        }
      }

      .cart-item-total {
        .price-num {
          color: #f20;
        }
      }

      div {
        display: flex;
        justify-content: center;
        align-items: center;

        &:nth-child(1) {
          width: $item-total-width * 1 / 15;
        }

        &:nth-child(2) {
          width: $item-total-width * 4 / 15;
        }

        &:nth-child(3) {
          width: $item-total-width * 2 / 15;
        }

        &:nth-child(4) {
          width: $item-total-width * 2 / 15;
        }

        &:nth-child(5) {
          width: $item-total-width * 2 / 15;
        }

        &:nth-child(6) {
          width: $item-total-width * 2 / 15;
        }

        &:nth-child(7) {
          width: $item-total-width * 2 / 15;
        }
      }
    }

    .cart-board-footer {
      display: flex;
      justify-content: flex-end;
      height: 3rem;
      border: 1px solid #ddd;
      border-top: none;
      padding-left: 2rem;

      .total-price {
        color: #999;
        font-size: 1rem;

        .price-num {
          color: #f20;
        }

        .total-button {
          width: 6rem;
          height: 3rem;
          background-color: #f40;
          color: #fff;
          font-size: 1rem;
          margin-left: 0.6rem;
        }
      }
    }
  }
}
</style>