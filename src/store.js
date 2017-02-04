/**
 * Created by lyn on 2017/2/3.
 */
const STORAGE_KEY="todos-vuejs";
export default {
    fetch(){
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY))||[];
    },
    save(items){
        window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
    }
}
