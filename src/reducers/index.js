import { combineReducers } from "redux";


const comments = [
    {
        user: "Şevket Akırmak",
        comment: "Güzel bir yazı."
    },
    {
        user: "Agatha Christie",
        comment: "Yazınızda problemler görüyorum."
    },
    {
        user: "Gerorge Orwell",
        comment: "Güzel bir yazı olmuş fakat bazı bölümleri anlamsız geldi."
    },
    {
        user: "Ursula K. Leguin",
        comment: "Kötü bir yaz olmuş daha iyisi için çaba göstermelisiniz."
    }
];

const commentList = (commentList = comments, action) =>{
    switch(action.type){
        case 'DELETE_COMMENT':{
            return commentList.filter(element => element !== action.payload);
        }
        case 'ADD_COMMENT':{
            return [...commentList, action.payload]
        }
        default:{
            return commentList;
        }
    }
}

export default combineReducers({
    commentList: commentList
});