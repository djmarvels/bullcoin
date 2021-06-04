import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default ({ app, route }) => {
  if (route.name.indexOf('admin') <= -1) {
    return;
  }
  Vue.use(ElementUI);
  console.log('element connected');
};
