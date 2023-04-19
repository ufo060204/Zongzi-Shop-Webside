<template>
  <VueLoading :active="isLoading" :color="color" :z-index="9999" />
  <div class="container-lg">
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="() => openArticleModal(true)">
        建立新的文章
      </button>
    </div>
    <table class="table mt-4 table-responsive">
      <thead>
        <tr>
          <th width="120">標題</th>
          <th>描述</th>
          <th width="120">作者</th>
          <th width="120">建立時間</th>
          <th width="100">是否公開</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.id">
          <td>{{ article.title }}</td>
          <td>{{ article.description }}</td>
          <td>{{ article.author }}</td>
          <td>{{ dateFilter(article.create_at) }}</td>
          <!-- <td>{{ article.create_at }}</td> -->
          <td>
            <span class="text-success" v-if="article.isPublic">已上架</span>
            <span v-else>未上架</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="() => getArticle(article.id)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="() => openDelArticleModal(article)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <BackPagination :pages="page" @emitPages="getArticles"/>
  </div>
  <!-- articleModal start -->
  <div
    id="articleModal"
    ref="articleModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="articleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <form @submit.prevent="updateArticle(this.tempArticle)" class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="articleModalLabel" class="modal-title">
            <span>{{ isNew ? "新增文章" : "編輯文章" }}</span>
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
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="tempArticle.title"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  placeholder="請輸入圖片網址"
                  v-model="tempArticle.imageUrl"
                />
              </div>
              <div class="mb-3">
                <label for="author" class="form-label">作者</label>
                <input
                  type="text"
                  class="form-control"
                  id="author"
                  placeholder="請輸入作者"
                  v-model="tempArticle.author"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="create_at" class="form-label">建立日期</label>
                <input
                  type="date"
                  class="form-control"
                  id="create_at"
                  v-model="create_at"
                  required
                />
              </div>
            </div>
            <div class="col-sm-8">
              <label for="tag" class="form-label">標籤</label>
              <div class="row gx-1 mb-3">
                <div
                  class="col-md-2 mb-1"
                  v-for="(label, key) in tempArticle.tag"
                  :key="key"
                >
                  <div class="input-group input-group-sm">
                    <input
                      type="text"
                      class="form-control"
                      id="tag"
                      v-model="tempArticle.tag[key]"
                      placeholder="請輸入標籤"
                    />
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      @click="() => tempArticle.tag.splice(key, 1)"
                    >
                      <i class="bi bi-x"></i>
                    </button>
                  </div>
                </div>
                <div
                  class="col.md-2 mb-1"
                >
                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="() => tempArticle.tag.push('')"
                  >
                    新增標籤
                  </button>
                </div>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">文章描述</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入文章描述"
                  v-model="tempArticle.description"
                  required
                >
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">文章內容</label>
                <textarea
                  id="content"
                  type="text"
                  class="form-control"
                  placeholder="請輸入文章內容"
                  v-model="tempArticle.content"
                  required
                >
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="isPublic"
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempArticle.isPublic"
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
          <button type="submit" class="btn btn-primary">確認</button>
        </div>
      </form>
    </div>
  </div>
  <!-- articleModal end -->

  <!-- delArticleModal start-->
  <div id="delArticleModal" ref="delArticleModal" class="modal fade" tabindex="-1"
          aria-labelledby="delArticleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delArticleModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger"></strong> {{ tempArticle.title }} (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="() => deleteArticle()">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- delArticleModal end-->
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import Swal from 'sweetalert2'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import BackPagination from '@/components/BackPagination.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      articles: [],
      create_at: 0,
      page: {},
      tempArticle: {
        tag: ['']
      },
      isNew: false, // 確認是編輯或是新增所使用的
      isLoading: false,
      color: '#FF700C',
      pagination: '',
      articleModal: '',
      delArticleModal: '',
      editor: ClassicEditor,
      editorData: '<p>Hello world!!</p>',
      editorConfig: {
        toolbar: ['heading', 'typing', '|', 'bold', 'italic', 'link']
      }
    }
  },
  watch: {
    create_at () {
      this.tempArticle.create_at = Math.floor(new Date(this.create_at) / 1000)
    }
  },
  methods: {
    dateFilter (time) {
      const localDate = new Date(time * 1000)
      return localDate.toLocaleDateString()
    },
    getArticles (page = 1) {
      this.page = page
      const api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/articles?page=${page}`
      this.isLoading = true
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.articles = res.data.articles
            this.pagination = res.data.pagination
          }
        })
        .catch((err) => {
          this.isLoading = false
          Swal.fire('error', err.response, err.request, err.message)
        })
    },
    getArticle (id) {
      const api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/article/${id}`
      this.isLoading = true
      this.$http
        .get(api)
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            this.tempArticle = res.data.article
            this.openArticleModal(false, res.data.article)
            this.isNew = false
          }
        })
        .catch((err) => {
          this.isLoading = false
          Swal.fire(err.response)
        })
    },
    updateArticle (item) {
      this.isLoading = true
      this.tempArticle = item
      let api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/article`
      let method = 'post'
      let status = '新增貼文'
      if (!this.isNew) {
        api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/article/${this.tempArticle.id}`
        method = 'put'
        status = '更新貼文'
      }
      this.$http[method](api, { data: this.tempArticle })
        .then((res) => {
          this.isLoading = false
          this.articleModal.hide()
          this.getArticles()
          Swal.fire(res.data.message, status)
        })
        .catch((err) => {
          this.isLoading = false
          Swal.fire(err.response)
        })
    },
    openArticleModal (isNew, item) {
      if (isNew) {
        this.tempArticle = {
          isPublic: false,
          create_at: new Date().getTime() / 1000,
          tag: []
        }
        this.isNew = true
      } else {
        this.tempArticle = { ...item }
        this.isNew = false
      }
      this.articleModal.show()
    },
    openDelArticleModal (item) {
      this.tempArticle = { ...item }
      this.delArticleModal.show()
    },
    deleteArticle () {
      const api = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/article/${this.tempArticle.id}`
      this.isLoading = true
      this.$http.delete(api)
        .then((res) => {
          this.isLoading = false
          this.delArticleModal.hide()
          this.getArticles(this.page)
          Swal.fire(res.data.message)
        })
        .catch((err) => {
          this.isLoading = false
          Swal.fire(err.response)
        })
    }
  },
  components: {
    BackPagination
  },
  mounted () {
    this.getArticles()
    this.articleModal = new Modal(this.$refs.articleModal)
    this.delArticleModal = new Modal(this.$refs.delArticleModal)
  }
}
</script>
