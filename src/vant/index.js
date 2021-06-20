import Vue from 'vue'

// vant组件按需引入
import {
  Button,
  Tabbar,
  TabbarItem,
  NavBar,
  Field,
  Toast,
  Form,
  Cell,
  CellGroup,
  Image,
  Grid,
  GridItem,
  Dialog,
  Tab,
  Tabs,
  PullRefresh,
  List,
  Popup,
  Icon,
  Search,
  ImagePreview
} from 'vant'

// 将图片预览组件注册到全局方法
Vue.prototype.$imagePreview = ImagePreview

Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Field)
Vue.use(Toast)
Vue.use(Form)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Image)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Dialog)
Vue.use(Tabs)
Vue.use(Tab)
Vue.use(PullRefresh)
Vue.use(List)
Vue.use(Popup)
Vue.use(Icon)
Vue.use(Search)
