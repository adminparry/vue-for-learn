// https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
import Vue from 'vue';
import { Message, Notification } from 'element-ui';
import router from '@/router';

const credentials =  'include';
const headers = {
    'user-agent': 'big-middle-platform',
    'content-type': 'application/json'
};
const cache = 'no-cache';
const mode = 'cors';// no-cors, cors, *same-origin
const redirect = 'follow'; // manual, *follow, error
const referrer = 'no-referrer'; // *client, no-referrer

const servicalPrams = (json) => {
    let ret = "?";
    for(let key in json){
        ret += key + '=' + json[key] + '&';
    }
    return ret.substr(0,ret.length - 1);
}
export const fetcher = function ({url, method="post", data={} }) {

    const config = {
        credentials,
        method: method.toUpperCase(),
        headers,
        
    };
    
    if(method == 'get'){
       
        url = url + servicalPrams(data);

    }else if('post' == method){
        config.body = JSON.stringify(data);
        console.log(config.body,"header")
    }

    return fetch(url, config)
    .then(r => {
        console.log(r);
        return r;
    })
    .then(r => r.json())
    .then((res) => {

        if(res.statusCode > 304){
            Notification({message:res.msg,type:'error', customClass: 'errorMsg'});
            return;
        }else{
            res.msg && Notification({message: res.msg, type:'info', customClass: 'errorMsg'});
        }

        if(res.data && res.data.error == 1)return;
        // if(res.status == 555){
        //     console.log(router)
        //     router.replace({path: '/login'});
        // } 

        
        // 如果会话过期则跳转到登录
        
        
        if(res.statusCode > 304)return null;
        return res;
    })
    .catch((error) => {
        Message.error(error)
    });

}

export default fetcher