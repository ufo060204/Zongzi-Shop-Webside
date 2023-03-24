<template>
  後台產品列表
  <VueLoading :active="isLoading" :color="color" :z-index="9999"/>
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="() => openModal('create')">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.category }}</td>
          <td>{{ product.title }}</td>
          <td class="text-end">{{ product.origin_price }}</td>
          <td class="text-end">{{ product.price }}</td>
          <td>
            <span class="text-success" v-if="product.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="() => openModal('edit',product)"
              >
                編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="() => openModal('delete',product)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <BackPagination v-if="page" :pages="page" @emitPages="getProducts"></BackPagination>
  </div>
  <!-- productModal start -->
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>{{ isNew ? '新增產品' : '編輯產品' }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-2">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label"
                    >輸入圖片網址</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="tempProduct.imageUrl"
                  />
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl" alt="" />
              </div>
              <div>
                <h4>多圖設置</h4>
                <!-- key 值建議用 id 去帶，沒有的話再用其他方式 -->
                <!-- 判斷  tempProduct.imagesUrl 是一個陣列-->
                <template v-if="Array.isArray(tempProduct.imagesUrl)">
                  <div
                    v-for="(img, key) in tempProduct.imagesUrl"
                    :key="key +1234"
                  >
                    <input
                      type="text"
                      class="form-control"
                      v-model="tempProduct.imagesUrl[key]"
                    />
                    <img
                      :src="tempProduct.imagesUrl[key]"
                      alt=""
                      class="img-fluid mb-2"
                    />
                  </div>
                  <!-- 判斷新增、刪除出現的時機 -->
                  <!--
                    if -> 新增
                    欄位是有填寫資料時
                    當如果是空的時候

                    else -> 刪除
                    當是空著時候，就不能刪除
                  -->
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="() => tempProduct.imagesUrl.push('')"
                    v-if="!tempProduct.imagesUrl.length || tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]"
                  >
                    新增圖片
                  </button>
                  <button
                    class="btn btn-outline-danger btn-sm d-block w-100"
                    @click="() => tempProduct.imagesUrl.pop()"
                    v-else
                  >
                    刪除圖片
                  </button>
                </template>
                <div v-else>
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="createImages"
                  >
                    新增圖片
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="tempProduct.title"
                />
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="tempProduct.category"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model="tempProduct.unit"
                  />
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <!-- 確保型別正確加上 .number -->
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model.number="tempProduct.origin_price"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <!-- 確保型別正確加上 .number -->
                  <input
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model.number="tempProduct.price"
                  />
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                  v-model="tempProduct.content"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                  v-model="tempProduct.description"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    v-model="tempProduct.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >是否啟用</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="updateProduct"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- productModal end -->

  <!-- delModal start-->
  <div id="delProductModal" ref="delProductModal" class="modal fade" tabindex="-1"
          aria-labelledby="delProductModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger"></strong> 商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="() => deleteProduct()">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- delModal end-->
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import BackPagination from '../../components/BackPagination.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      tempProduct: {
        imagesUrl: []
      },
      isNew: false, // 確認是編輯或是新增所使用的
      page: {},
      isLoading: false,
      color: '#FF700C',
      productModal: '',
      delProductModal: ''
    }
  },
  methods: {
    getProducts (page = 1) { // 參數預設值，沒有的話會是 undefined
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/products/?page=${page}`
      // this.current_page = page
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products
          this.page = res.data.pagination
          this.isLoading = false
          // console.log(this.products)
          // console.log(this.page)
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    openModal (status, product) {
      if (status === 'create') {
        this.productModal.show()
        this.isNew = true
        // 會帶入初始化資料
        this.tempProduct = {
          // 會傳入多張圖片，所以要帶上 imagesUrl，以防陣列結構出錯
          imagesUrl: []
        }
      } else if (status === 'edit') {
        this.productModal.show()
        this.isNew = false
        // 會帶入當前要編輯的資料
        // 展開語法，不會去動到原本的資料
        this.tempProduct = { ...product }
      } else if (status === 'delete') {
        this.delProductModal.show()
        this.tempProduct = { ...product } // 等等取 id 使用
      }
    },
    updateProduct () {
      // const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/product`;
      let url = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/product`
      // 用 this.isNew 判斷 API 要怎麼運行
      let method = 'post'
      if (!this.isNew) {
        url = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`
        method = 'put'
      }

      // 資料在 data 裡面
      // 用變數 method 來帶入 post
      this.$http[method](url, { data: this.tempProduct })
        .then((res) => {
          alert(res.data.message)
          // 重新取得產品列表
          this.getProducts()
          // 建立新產品後關閉 modal
          this.productModal.hide()
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    createImages () {
      this.tempProduct.imagesUrl = []
      this.tempProduct.imagesUrl.push('')
    },
    deleteProduct () {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http
        .delete(url)
        .then((res) => {
          alert(res.data.message)
          this.getProducts()
          this.delProductModal.hide()
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  },
  components: {
    BackPagination
  },
  mounted () {
    this.getProducts()
    this.productModal = new Modal(this.$refs.productModal)
    this.delProductModal = new Modal(this.$refs.delProductModal)
    // this.delProductModal.show()
    // this.productModal.show()
  }
}
</script>
