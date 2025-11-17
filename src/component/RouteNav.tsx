import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useAtomValue } from 'jotai';
import { userAtom, isLoginAtom } from '../atoms/atomLogin.js'

export default function RouteNav() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/festival");
    }

    // atom으로 전역변수 가지고 오기
    const isLogin = useAtomValue(isLoginAtom);
    const user = useAtomValue(userAtom);

    // 로그인되지 않은 상태
    if (!isLogin) {
        return (
            <div className="w-full h-1/2 mt-5 flex justify-center items-center gap-4 font-bold bg-blue-500 rounded-md p-3 ">
                <Link to="/" className="font-extrabold hover:cursor-pointer hover:text-gray-300">홈</Link>
            </div>
        )
    }
    // 로그인된 상태
    else {
        return (
            <div className="flex">
                <div className="w-full h-1/2 mt-5 flex justify-center items-center gap-4 font-bold bg-blue-500 rounded-md p-3 ">
                    <Link to="/lotto" className="hover:cursor-pointer hover:text-gray-300">로또</Link>
                    <button onClick={handleClick} className="hover:cursor-pointer hover:text-gray-300">부산축제정보</button>
                    <Link to="/todolist" className="hover:cursor-pointer hover:text-gray-300">할일목록</Link>
                    <Link to="/testts" className="hover:cursor-pointer hover:text-gray-300">테스트</Link>
                </div>
                <div className="w-50 h-1/2 mt-5 flex justify-center items-center gap-4 bg-blue-100 rounded-md p-1 ml-3 text-black">
                    <Link to="/" className="text-sm hover:cursor-pointer hover:text-gray-300 flex flex-col items-center">
                        <p className="font-extrabold">[{user?.user_metadata?.user_name}] 님</p>
                        <p className="underline underline-offset-2">로그아웃</p>
                    </Link>
                </div>
            </div>

        )
    }
}