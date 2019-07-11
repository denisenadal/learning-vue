const app = new Vue({
    el: '#vue-app',
    data: {
        message: 'hello Vue!',
        now: new Date()
    },
    methods: {
        updateDate() {
            this.now = new Date();
        },
        mounted() {
            setInterval(() => {
                this.updateDate();
            }, 100);
        }
    }
});