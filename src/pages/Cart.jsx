import React from "react";

import cart from "../assets/img/cart1.svg"

function Cart() {
  return (
    <div>
      <div class="content">
        <div class="container container--cart">
          <div class="cart">
            <div class="cart__top">
              <h2 class="content__title">
                <img src={cart} alt="cart" />
                 Корзина</h2>
              <div class="cart__clear">
                {/* <% include ../../public/img/trash.svg %> */}
                <span>Очистить корзину</span>
              </div>
            </div>
            <div class="content__items">
              {/* <% include components/cart-item.ejs %> <% include components/cart-item.ejs %> <% */}
              {/* include components/cart-item.ejs %> <% include components/cart-item.ejs %> */}
            </div>
            <div class="cart__bottom">
              <div class="cart__bottom-details">
                <span> Всего пицц: <b>3 шт.</b> </span>
                <span> Сумма заказа: <b>900 ₽</b> </span>
              </div>
              <div class="cart__bottom-buttons">
                <a href="/" class="button button--outline button--add go-back-btn">
                  {/* <% include ../../public/img/grey-arrow-left.svg %> */}
                  <span>Вернуться назад</span>
                </a>
                <div class="button pay-btn">
                  <span>Оплатить сейчас</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
