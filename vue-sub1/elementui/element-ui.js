import Vue from 'vue'
import { 
  Menu,
  Submenu,
  MenuItem, 
  MenuItemGroup,
  Message
} from 'element-ui'

Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

Vue.prototype.$message = Message
