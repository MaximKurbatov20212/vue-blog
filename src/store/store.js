import {createStore} from "vuex";
import userModule from "@/store/userModule";
import postModule from "@/store/postModule";

export default createStore({
    modules : {
        user: userModule,
        post: postModule
    },
})


