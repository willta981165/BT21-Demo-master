<template>
  <div>
    <div class="content">
      <Navbar :product="products"></Navbar>
      <div class="container">
        <div id="carouselExampleIndicators" class="carousel slide mb-5 mt-5" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div
              class="carousel-item header-carousel-item header-cover active"
              style="background-image: url(https://3.bp.blogspot.com/-7YVoNL5EBhw/WJY5aL8GYYI/AAAAAAAAAnQ/PCDlrc_IUFwtnFs6bC2Ut0B7pW_jWV3BACLcB/s1600/run_jk2.png);"
            >
              <div class="carousel-caption">
                <h1>接下來</h1>
                <p>
                  將會帶你進入由
                  <span class="header-title">BTS</span>打造的世界
                </p>
                <p class="header-title">Are u ready ?</p>
              </div>
            </div>
            <div
              class="carousel-item header-carousel-item header-cover"
              style="background-image:url(https://pbs.twimg.com/media/DnCHTaJUwAAXG8s.jpg);"
            >
              <div class="carousel-caption">
                <div class="header-text">
                  <h3>
                    由
                    <span class="header-title">3D</span>到
                    <span class="header-title">2D</span>
                  </h3>
                  <h3>由現實到幻想</h3>
                </div>
              </div>
            </div>
            <div
              class="carousel-item header-carousel-item header-cover"
              style=" background-image: url(https://www.moshimoshi-nippon.jp/wp/wp-content/uploads/2019/11/BT21-Cafe.jpg);"
            >
              <div class="carousel-caption">
                <h1 class="header-text-2 header-title">Welcome</h1>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <div class="row no-gutters pb-5">
          <div class="col-12 new-content-2">
            <div class="mt-5 text-center new-content move-left">
              <h1 class="header-title">What is BT21</h1>
              <p
                class="mt-5"
              >BT21是由LINE FRIENDS與BTS攜手創作的卡通角色品牌，2017年發佈至今，憑藉著吸引人的魅力造型，
              獨特且新穎的概念和豐富多元的故事性，成長為全球年輕一代最受歡迎的角色。</p>
              <p
                class="mt-4"
              >特別的是，我們追求 “共同創造BT21”的品牌價值，與全球粉絲積極溝通並收集來自各方的意見和想法，
              擴展打造出更具有獨創性的BT21 UNIVERSE世界觀。</p>
            </div>
          </div>
          <div class="col-12 new-img-1 d-none d-lg-block">
            <div class="row no-gutters text-center mt-5">
              <div class="col">
                <iframe
                  style="box-shadow: 3px 9px 6px 2px #C0C0C0;"
                  class="move-left"
                  width="450"
                  height="315"
                  src="https://www.youtube.com/embed/LMxze55_c3E"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media;
         gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="col">
                <iframe
                  style="box-shadow: 3px 9px 6px 2px #C0C0C0;"
                  class="move-right"
                  width="450"
                  height="315"
                  src="https://www.youtube.com/embed/6_wyS38cqXc"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope;
         picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div class="row no-gutters mb-5">
          <div class="col-12 new-content-2">
            <div class="mt-5 text-center new-content move-right">
              <h1 class="header-title">Why BTS</h1>
              <p
                class="mt-5"
              >全球人氣卡通角色品牌LINE FRIENDS的核心關鍵詞：全球化, 千禧世代精神, 時尚潮流感，
              防彈少年團則是明確表現LINE FRIENDS核心關鍵詞最具代表性的藝人代表。</p>
              <p class="mt-4">其强大的影響力不斷地引領著全球新世代的年輕人，‘成長不息’的形象更是當今時代最具影響力的故事源泉。</p>
            </div>
          </div>
          <div class="col-12 new-img-2 d-none d-lg-block">
            <div class="row no-gutters text-center mt-5">
              <div class="col">
                <iframe
                  style="box-shadow: 3px 9px 6px 2px #C0C0C0;"
                  class="move-left"
                  width="450"
                  height="315"
                  src="https://www.youtube.com/embed/OHmdtKgbXno"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media;
         gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="col">
                <iframe
                  class="move-right"
                  style="box-shadow: 3px 9px 6px 2px #C0C0C0;"
                  width="450"
                  height="315"
                  src="https://www.youtube.com/embed/2AxJv5sq-Kw"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope;
         picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div class="new-content-2 pb-3"></div>
        <div class="d-none d-lg-block">
          <div class="row mt-5 no-gutters header-background">
            <div class="col-md-5">
              <div class="new-img"></div>
            </div>
            <div class="col-md-7 text-center mt-5">
              <div class="new-content move-left">
                <h1 style="font-weight:800;">宇宙明星BT21</h1>
                <p class="mt-5">來自BT星球的王子TATA，夢想著有一天能將愛傳播到全宇宙，為了實踐夢想, TATA與守護者宇宙機器人VAN踏上旅程來到了地球。</p>
                <p class="mt-4">到地球後，TATA發現散播愛最好、最棒的方法就是成為明星，不對……是宇宙明星！於是TATA跟VAN開始尋找擁有共同目標的朋友！</p>
                <p
                  class="mt-4"
                >最後他們認識了 KOYA, RJ, SHOOKY, MANG, CHIMMY 和 COOKY，夢想成為宇宙明星的BT21就此誕生！
                 各自擁有不同魅力，在一起時更閃閃發光的BT21！ 迎著夢想奔跑的BT21他們之間發生的愉快而又感動的故事會一直繼續。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="d-lg-none">
          <div class="row mt-5 no-gutters">
            <div class="col-12">
              <div class="new-img"></div>
            </div>
            <div class="text-center mt-5 move-left">
              <h1 style="font-weight:800;">宇宙明星BT21</h1>
              <p class="mt-5">來自BT星球的王子TATA，夢想著有一天能將愛傳播到全宇宙，為了實踐夢想, TATA與守護者宇宙機器人VAN踏上旅程來到了地球。</p>
              <p class="mt-4">到地球後，TATA發現散播愛最好、最棒的方法就是成為明星，不對……是宇宙明星！於是TATA跟VAN開始尋找擁有共同目標的朋友！</p>
              <p
                class="mt-4"
              >最後他們認識了 KOYA, RJ, SHOOKY, MANG, CHIMMY 和 COOKY，夢想成為宇宙明星的BT21就此誕生！
               各自擁有不同魅力，在一起時更閃閃發光的BT21！ 迎著夢想奔跑的BT21他們之間發生的愉快而又感動的故事會一直繼續。</p>
            </div>
          </div>
        </div>
        <div class="row no-gutters pb-5">
          <div class="col-12 new-content-2">
            <div class="mt-5 text-center new-content move-left">
              <h1 class="header-title mb-5" id="hotitem">Hot Item</h1>
              <div class="row no-gutters">
                <div class="col-sm d-flex justify-content-center mb-6"
                v-for="(item) in hotitem" :key="item.id">
                  <div class="card shadow-sm overflow-hidden" style="width: 18rem;">
                    <div
                  class="card-img"
                  style="height: 150px; background-size: cover;
                  background-position: center width: 100%;"
                  :style="{backgroundImage: `url(${item.imageUrl})`}"
                    ></div>
                    <div class="card-body">
                      <h5 class="card-title">{{ item.title }}</h5>
                      <a href="#" class="btn btn-primary mt-6" @click="getdetail(item)">查看更多</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 d-none d-lg-block">
            <div style="box-sizing: border-box;" class="move-left">
              <div class="shop-link">
                <div class="shop-link-img">
                  <a href="#/shop" class="shop-link-border" style="text-decoration:none;">
                    <h1 class="link-text-1">GO TO SHOP</h1>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-none d-lg-block">
            <div style="box-sizing: border-box;" class="move-right">
              <div class="shop-link-2">
                <div class="shop-link-img-2">
                  <div class="shop-link-border-2" style="text-decoration:none;">
                    <div class="bt-move">
                      <button
                        class="tag-read btn btn-dark"
                        data-clipboard-text="bt21"
                        @click="copy"
                      >
                        <p class="h1">Get Coupon</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-12 d-lg-none d-block">
            <div class="move-left">
              <div class="shop-link-sm d-flex justify-content-center align-items-center">
                <a class="btn btn-dark" href="#/shop">Go to shop</a>
              </div>
            </div>
          </div>

          <div class="col-md-12 d-lg-none d-block mt-3">
            <div class="move-right">
              <div class="shop-link-sm-2 d-flex justify-content-center align-items-center">
                <button
                  class="tag-read btn btn-dark"
                  data-clipboard-text="bt21"
                  @click="copy"
                >Get Coupon</button>
              </div>
            </div>
          </div>
        </div>
        <div class="new-content-2 mt-5 text-center">
           <h1 class="header-title move-right mt-5" id="epaper">E-paper</h1>
        </div>
        <div class="row justify-content-center align-items-center my-5">
          <div class="col-md-8 text-center">
            <div class="follow-bg move-right">
              <div class="follow-bg-cover">
                <h3 class="header-title">Join our mailing list for updates</h3>
                <div class="input-group mb-3">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="useremail"
                    v-validate="'required|email'"
                    v-model="form.user.email"
                    placeholder="請輸入 Email"
                    :class="{'is-invalid': errors.has('email')}"
                  />
                  <button class="form-control btn btn-dark mt-4" @click="check()">Follow us</button>
                </div>
                <span class="text-danger"
                v-if="errors.has('email')">{{ errors.first('email') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="row justify-content-center align-items-center footer-bg">
        <div class="col-md-4 text-center">
          <img
            src="https://cdn130.picsart.com/261149211002202.gif?to=min&r=640"
            width="60"
            height="60"
            class="d-inline-block align-top"
            alt
          />
          <div class="navbar-brand">
            <h1 class="font-weight-bold">BT21</h1>
          </div>
          <div class="row justify-content-center align-items-center footer-icon">
            <div class="col-md-10">
              <ul>
                <li>
                  <a href="#" class="mr-3 github">
                    <h4 class="fab fa-github"></h4>
                  </a>
                  <a href="#" class="mr-3 facebook">
                    <h4 class="fab fa-facebook-f"></h4>
                  </a>
                </li>
                <li>
                  <a href="#" class="mr-2 ml-1 instagram">
                    <h4 class="fab fa-instagram"></h4>
                  </a>
                  <a href="#" class="mr-3 ml-1 twitter">
                    <h4 class="fab fa-twitter"></h4>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4 text-center my-5">僅個人練習使用，不做任何商業用途</div>
        <div class="col-md-4 text-center">
          <h1 class="font-weight-bold ml-3">Contact Us</h1>
          <div class="footer-address">
            <p>TEL： 0912345678</p>
            <p>Mail：BT21SHOP@mail.com</p>
            <p>地址： 地球上的某一個角落</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard';
import $ from 'jquery';
import { mapGetters } from 'vuex';
import Navbar from '../../components/Navbar.vue';

export default {
  name: 'Layout',
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters(['cart', 'local']),
  },
  data() {
    return {
      form: {
        user: {
          email: '',
        },
      },
      hotitem: [],
      products: [],
    };
  },
  methods: {
    getitems() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      $('#loading').css('display', 'block');
      vm.$http.get(url).then((response) => {
        vm.products = response.data.products;
        vm.products.forEach((el) => {
          vm.$set(el, 'favItem', false);
        });

        const localdata = JSON.parse(localStorage.getItem('items') || '[]');
        let localtitle = '';
        localdata.forEach((item) => {
          localtitle = item.item_title;
          vm.products.forEach((items) => {
            if (localtitle === items.title) {
              const itemt = items;
              itemt.favItem = true;
            }
          });
        });
        $('#loading').css('display', 'none');
      });
    },
    getProducts() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      $('#loading').css('display', 'block');
      vm.$http.get(url).then((response) => {
        const { products } = response.data;
        vm.hotitem = products.filter((item) => item.category === 'Hot ltem');
        $('#loading').css('display', 'none');
      });
    },
    getdetail(item) {
      const vm = this;
      vm.$router.push(`/detail/${item.id}`);
    },
    check() {
      const vm = this;
      vm.$validator.validate().then((valid) => {
        if (valid) {
          vm.$store.dispatch('updateMessage', {
            message: '已訂閱電子報',
            status: 'success',
          });
        } else {
          vm.$store.dispatch('updateMessage', {
            message: '電子信箱輸入錯誤',
            status: 'danger',
          });
        }
      });
      vm.form.user.email = '';
    },
    removelocal(item) {
      if (item.favItem === true) {
        const itemt = item;
        itemt.favItem = false;
      }
      this.$store.dispatch('remove', item);
    },
    copy() {
      const clipboard = new Clipboard('.tag-read');
      const vm = this;
      clipboard.on('success', () => {
        vm.$store.dispatch('updateMessage', {
          message: '已複製優惠碼',
          status: 'success',
        });
        clipboard.destroy();
      });
      clipboard.on('error', () => {
        clipboard.destroy();
      });
    },
    setlocal(title, id) {
      this.$store.dispatch('setlocal', { title, id });
    },
  },
  // created(){

  // },
  mounted() {
    this.getitems();
    this.getProducts();
    $(window).scroll(() => {
      const scrollPos = $(window).scrollTop();
      const windowHeight = $(window).height();

      $('.move-right').each(function left() {
        const thisPos = $(this).offset().top;
        if (windowHeight + scrollPos >= thisPos + 200) {
          $(this).addClass('animated fadeInLeft');
        }
      });

      $('.move-left').each(function right() {
        const thisPos = $(this).offset().top;
        if (windowHeight + scrollPos >= thisPos + 200) {
          $(this).addClass('animated fadeInRight');
        }
      });
    });
  },
};
</script>
