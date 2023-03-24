<template>
  後台文章列表
  <VueLoading :active="isLoading" :color="color" :z-index="9999"/>
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="() => openModal('create')">
        建立新的文章
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">日期</th>
          <th>標題</th>
          <th width="120">作者</th>
          <th width="120">描述</th>
          <th width="120">內容</th>
          <th width="100">是否公開</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.create_at }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.author }}</td>
          <td>{{ product.description }}</td>
          <td><button type="button" @click="() => getContent(product.id)">查看</button></td>
          <td>
            <span class="text-success" v-if="product.isPublic">公開</span>
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
            <span>{{ isNew ? '新增文章' : '編輯文章' }}</span>
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
                  <!-- <label for="category" class="form-label"></label>
                  <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入"
                    v-model="tempProduct.description"
                  /> -->
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">作者</label>
                  <input
                    id="author"
                    type="text"
                    class="form-control"
                    placeholder="請輸入作者"
                    v-model="tempProduct.author"
                  />
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="create_at" class="form-label">日期</label>
                  <input
                    id="create_at"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入日期"
                    v-model.number="tempProduct.create_at"
                  />
                </div>
                <div class="mb-3 col-md-6">
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="content" class="form-label">文章內容</label>
                <textarea
                  id="content"
                  type="text"
                  class="form-control"
                  placeholder="請輸入文章內容"
                  v-model="tempProduct.content"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">文章</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入文章描述"
                  v-model="tempProduct.description"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="isPublic"
                    class="form-check-input"
                    type="checkbox"
                    :true-value= true
                    :false-value= false
                    v-model="tempProduct.isPublic"
                  />
                  <label class="form-check-label" for="isPublic"
                    >是否公開</label
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
// import BackPagination from '../../components/BackPagination.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      tempProduct: {
        imagesUrl: []
      },
      isNew: false, // 確認是編輯或是新增所使用的
      isLoading: false,
      color: '#FF700C',
      productModal: '',
      delProductModal: ''
    }
  },
  methods: {
    getProducts () {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/articles`
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.articles
          this.isLoading = false
          console.log(this.products)
          console.log(res)
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    getContent (id) {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/article/${id}`
      this.$http
        .get(url)
        .then((res) => {
          console.log(res.data.article.content)
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
      let url = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/article`
      // 用 this.isNew 判斷 API 要怎麼運行
      let method = 'post'
      if (!this.isNew) {
        url = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/article/${this.tempProduct.id}`
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
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/article/${this.tempProduct.id}`
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
  },
  mounted () {
    this.getProducts()
    this.productModal = new Modal(this.$refs.productModal)
    this.delProductModal = new Modal(this.$refs.delProductModal)
  }
}
</script>
