export let inputPassword = Vue.component('input-password', {
    template: /* html */
        `<div>
            <h2>{{title}}</h2>
            <div class="d-flex">
                <input
                    :type="passwordField" 
                    class="form-control" 
                    placeholder="Enter your password"
                >
                <button 
                    class="btn btn-primary" @click="showHidePassword" 
                >{{ buttonAction }}</button>    
            </div>
            <hr class="mb-4">
        </div>`,
    data() {
        return {
            title: 'Show the password',
            password: '',
            passwordField:'password',
            buttonAction: 'Show Passwords' ,
        }
    },
    methods: {
        showHidePassword () {
            this.passwordField = this.passwordField === 'password' ? 'text' : 'password';
            this.buttonAction = this.passwordField === 'password' ? 'Show password' : 'Hide password';
        }
    },
})