import { Plugin } from 'vue';

const toastPlugin: Plugin = {
  install(app) {
    app.config.globalProperties.$toast = (message: string) => {
      alert(message); // Replace with a proper toast library
    };
  },
};

export default toastPlugin;