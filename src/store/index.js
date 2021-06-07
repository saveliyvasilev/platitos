import { createStore } from "vuex";

export default createStore({
  state: {
    dishes: [
      {
        id: 0,
        name: "Rucula",
        ingredients: ["Rucula", "Sal"]
      },
      {
        id: 1,
        name: "sopa",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 2,
        name: "Arroz",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 3,
        name: "Garbanzo",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 4,
        name: "Milanesa",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 5,
        name: "Pizza",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 6,
        name: "Empanadas",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 7,
        name: "Rucula",
        ingredients: ["Rucula", "Sal"]
      },
      {
        id: 8,
        name: "sopa",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 9,
        name: "Arroz",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 10,
        name: "Garbanzo",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 11,
        name: "Milanesa",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 12,
        name: "Pizza",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 13,
        name: "Empanadas",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 14,
        name: "Rucula",
        ingredients: ["Rucula", "Sal"]
      },
      {
        id: 15,
        name: "sopa",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 16,
        name: "Arroz",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 17,
        name: "Garbanzo",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 18,
        name: "Milanesa",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 19,
        name: "Pizza",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 20,
        name: "Empanadas",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 21,
        name: "Rucula",
        ingredients: ["Rucula", "Sal"]
      },
      {
        id: 22,
        name: "sopa",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 23,
        name: "Arroz",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 24,
        name: "Garbanzo",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 25,
        name: "Milanesa",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 26,
        name: "Pizza",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 27,
        name: "Empanadas",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 28,
        name: "Garbanzo",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 29,
        name: "Milanesa",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 30,
        name: "Pizza",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 31,
        name: "Empanadas",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 32,
        name: "Pizza",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 33,
        name: "Empanadas",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 34,
        name: "Pizza",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 35,
        name: "Empanadas",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 36,
        name: "Pizza",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 37,
        name: "Empanadas",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 38,
        name: "Pizza",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
      {
        id: 39,
        name: "Empanadas",
        ingredients: ["Zanahoria", "Leche de coco", "Sal"]
      },
    ],
  },
  getters: {
    withIngredients: (state) => (ingredient) => (
      state.dishes.filter(dish => dish.ingredients.includes(ingredient))
    ),
  },
  mutations: {},
  actions: {},
  modules: {},
});
