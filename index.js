import ghzselect from './components/ghz-select.vue'
const ghz_select = {
    install(Vue, options) {
        Vue.component(ghzselect.name, ghzselect)
    }
}
export default ghz_select