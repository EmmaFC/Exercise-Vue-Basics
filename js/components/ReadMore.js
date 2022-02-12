export let readMore = Vue.component('read-more', {
    template: /* html */
        `<div>
            <h2>{{title}}</h2>
            <div>
                <p class="mb-3 d-block {{textAdjust}}">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ipsa neque odio consectetur impedit tempore modi accusantium! Voluptatem molestiae nemo inventore soluta corrupti. Culpa perferendis sapiente deserunt aperiam maxime consectetur recusandae quasi commodi dicta temporibus pariatur ab repellendus dignissimos natus aliquam odit ullam, quaerat autem non hic, quidem dolore laboriosam.</p> 
                <button 
                    class="btn btn-primary"
                    @click="btnHideShowText"
                >{{ buttonAction }}</button>
            </div>
            <hr class="mb-4">
        </div>`,
    data() {
        return {
            title: 'Read More',
            buttonAction:'Show more',
            textAdjust: 'cut-text',
        }
    },
    methods: {
        btnHideShowText (){
            this.buttonAction = this.buttonAction === 'Show less' ? 'Show more' : 'Show less';
            this.textAdjust = this.buttonAction === 'Show more' ? 'cut-text' : 'whole-text';
        }
    },
    
    computed: {
        
    },
})