import {createStore} from "vuex";
import {i18n} from "@/i18n";

export default createStore({
    state: {
        login: "",
        password: "",
        name: "",
        phone: "",
        posts : [
            {
                id : "1",
                title: "Пост о жизни",
                date: Date.now() + 100000000000,
                content: "# post1"
            },
            {
                id : "2",
                title: "Пост о смерти",
                date: Date.now() + 10,
                content: "# post2"
            },
            {
                id : "3",
                title: "Пост о любви",
                date: Date.now() + 10000,
                content: "# post3"
            },
            {
                id : "4",
                title: "Пост о свободe",
                date: Date.now() ,
                content: "# post4"
            },
        ],
        selectedPost: null,
        sortOptions : [
            { value: "title", option: i18n.global.t('by_title'), comparator : (a, b) => a.selectedSort?.localeCompare(b.selectedSort) },
            { value: "date", option: i18n.global.t('by_date') },
        ],
        selectedSort : ""
    },
    getters : {
        sortPosts(state, getters) {
            if (state.selectedSort === "title") {
                return [...(state.posts)].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
            } else {
                return [...(state.posts)]
                    .sort((post1, post2) => post1[state.selectedSort] - post2[state.selectedSort])
            }
        },
    },
    mutations : {
        setSelectedSort(state, newValue) {
            state.selectedSort = newValue
        },

        setPost(state, e) {
            for (let p of state.posts) {
                if (p.id === e.id) {
                    p.content = e.content;
                    console.log(p.content);
                }
            }
        },

        setLogin(state, newValue) {
            state.login = newValue;
        },
        setPassword(state, newValue) {
            state.password = newValue;
        },
        setName(state, newValue) {
            state.name = newValue;
        },

        setPhone(state, newValue) {
            state.phone = newValue;
        },
    }
})


