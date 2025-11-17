import { atom } from "jotai"

// localStorage에서 초기값 꺼내기
const savedLogin = JSON.parse(localStorage.getItem("login")) ?? 0;
const savedUser = JSON.parse(localStorage.getItem("user_name")) ?? "";

export const isLoginAtom = atom(savedLogin === 1); 
export const userAtom = atom({
    user_metadata: {
        user_name: savedUser
    }
});