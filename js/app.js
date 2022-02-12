import { inputPassword } from "./components/InputPassword.js";
import { readMore } from "./components/ReadMore.js";

let app = new Vue({
    el: '#app',
    data: {
        title: 'Vue - Basics Exercise'
    },
    components: {
        'first-component': inputPassword,
        'read-more': readMore,
    }

});