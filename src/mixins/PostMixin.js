export default {
    computed: {
        localeDate() {
            return (new Date(this.post.date)).toLocaleDateString()
        }
    }
}