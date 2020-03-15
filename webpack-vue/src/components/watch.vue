<template>
    <div>
        <p>请输入你的问题:<input v-model="question" type="text"></p>
        <p>{{ answer }}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            question: '',
            answer: 'I cannot give you an answer until you ask a question!'
        }
    },
    watch: {
        question(){
            this.answer = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer();
        }
    },
    created(){
        this.debouncedGetAnswer = this.debounce(this.getAnswer, 500);
    },
    methods: {
        debounce(fn, delay){
            
            let timer = null;
            return function() {
                let ctx = this;
                let args = arguments;
                clearTimeout(timer);
                timer = setTimeout(function(){
                    fn.apply(ctx, args);

                }, delay)
            }
        },
        getAnswer(){
            this.answer = "Thinking...";
            let vm = this;
            axios.get('https://yesno.wtf/api')
            .then(function (response) {
                vm.answer = _.capitalize(response.data.answer)
            })
            .catch(function (error) {
                vm.answer = 'Error! Could not reach the API. ' + error
            })
            
            
            
            
            
            // Accept: application/json, text/plain, */*
            // Origin: http://localhost:3800
            // Sec-Fetch-Mode: cors

            // Accept: */*
            // Sec-Fetch-Mode: no-cors
            
            
            

            // fetch('https://yesno.wtf/api',{
            //     // credentials: 'include', 
                
            //     mode: 'cors',
            //     method: 'GET',
            //     // headers: {
            //     //     'Origin': window.location.origin,
            //     //     'Accept': 'application/json, text/plain, */*'
            //     // }
            // })
            // .then(res => res.json())
            // .then(res => {

            //     this.answer = res.data.answer;
            // })
            // .catch(err => {
            //     this.answer = "error...";
            // })
        }
    }
}
</script>