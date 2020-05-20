// import Vue from 'vue'
// import Vuetify from 'vuetify'

// // import colors from './../config/colors'

// import 'vuetify/dist/vuetify.min.css'
// import '@mdi/font/css/materialdesignicons.css'
// Vue.use(Vuetify)

// export default ctx => {
//   const vuetify = new Vuetify({
//     theme: {
//       themes: {
//         light: {
//         },
//         dark: {
//           // colors
//         }
//       }
//     }
//   })
//   ctx.app.vuetify = vuetify
//   ctx.$vuetify = vuetify.framework
// }

// import Vue from 'vue'
// import Vuetify from 'vuetify'

// Vue.use(Vuetify)

// export default new Vuetify({
//   rtl: true
// })

// import Vue from 'vue'
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
// import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader version "^2.1.1" ,
// Vue.use(Vuetify)

// export default (ctx) => {
//   const vuetify = new Vuetify({
//     rtl: true,
//     theme: {
//       dark: false // From 2.0 You have to select the theme dark or light here
//     }
//   })

//   ctx.app.vuetify = vuetify
//   ctx.$vuetify = vuetify.framework
// }

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/es5/util/colors'
Vue.use(Vuetify)

export default (ctx) => {
  const vuetify = new Vuetify({
    rtl: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.deepPurple.lighten3,
          accent: colors.deepPurple.accent3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent4
        }
      }
    }
  })

  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}
