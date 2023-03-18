<template>
  <section class="landing-img landing-header"></section>
  <section class="bg-bg">
    <div class="container-md">
      <main class="py-8 text-center">
        <ul class="list-unstyled d-md-flex justify-content-center">
          <li style="background-color: #ffe8d9" class="py-3 px-7 me-6">確認商品</li>
          <li style="background-color: #ffe8d9" class="py-3 px-7 me-6">填寫資料</li>
          <li style="background-color: #ffe8d9" class="py-3 px-7 me-6">確認付款</li>
          <li class="bg-primary py-3 px-7">完成付款</li>
        </ul>
        <div class="row d-flex align-items-center justify-content-center">
          <div class="col-6 d-flex align-items-center justify-content-center flex-column py-6">
            <h1>結帳完成</h1>
            <img class="my-6" style="height: 150px;" src="../../assets/images/SignWarning.png" alt="SignWarning">
            <h2>感謝您的訂購</h2>
            <router-link to="/products" class="add-cart-text d-inline-block text-white py-3 px-7 fs-5 fw-bold text-decoration-none border border-text-dark">繼續購物</router-link>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>
<style>
.add-cart-text {
    background-color: #FF700C;
  }
  .add-cart-text:hover {
    background-color: #BD5309;
  }
</style>
