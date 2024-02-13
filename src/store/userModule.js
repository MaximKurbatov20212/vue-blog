
export default {
    state: {
        login: "",
        password: "",
        name: "",
        phone: "",

    },
    getters : {
    },
    mutations : {
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
    },
    namespaced: true
}

