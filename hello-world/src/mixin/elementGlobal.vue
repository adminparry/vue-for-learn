<script>
export default {
   computed: {

        fontColor: {
            get() {

                return this.$store.getters.fontColor;
            },
            set(val) {


                this.$store.dispatch('elementSettings/setFontColor', val)
            }
        },
        color: {
            get() {

                return this.$store.getters.color;
            },
            set(val) {

                this.$store.state.elementSettings.color = val;
            }
        },
        collapse: {
            get() {
                return this.$store.getters.collapse;
            },
            set(val) {
                this.$store.dispatch('elementSettings/setCollapse', val)
                // this.$store.state.elementSettings.collapse = val;
            }
        },
        size: {
            get() {

                 return this.$store.getters.size 
            },
            set(val) {
                this.$store.state.elementSettings.size  = val;
            }
        },
        pos: {
            get() {
                return this.$store.getters.pos;
            },
            set(val) {
                // this.$store.state.elementSettings.pos = val;
                this.$store.dispatch('elementSettings/setPos', val)
            }
        }
    },
};
</script>