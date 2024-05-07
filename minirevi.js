class MiniReviReactive {
  constructor({ data }) {
    const origen = data();

    this.$data = new Proxy(origen, {
      get(target, name) {
        if (name in target) {
          return target[name];
        }
        console.warn("La propiedad que intentas acceder no existe");
        return "";
      },
      set() {},
    });

    this.mount();
  }

  mount() {
    document.querySelectorAll("*[p-text]").forEach((el) => {
      this.pText(el, this.$data, el.getAttribute("p-text"));
    });
  }

  pText(el, target, name) {
    const content = target[name];
    el.innerText = content;
  }
}

var MiniRevi = {
  createApp(options) {
    return new MiniReviReactive(options);
  },
};
