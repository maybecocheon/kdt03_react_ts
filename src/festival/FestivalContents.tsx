import { useLocation, useNavigate } from "react-router-dom";
import type { FestivalType } from "./FestivalType";

export default function FestivalContents() {
    const location = useLocation();
    const contents : FestivalType = location.state.contents;
    const kakaoMapUrl = `https://map.kakao.com/link/map/${contents.MAIN_PLACE.toString().replace(',','').replace(' ','')},${contents.LAT},${contents.LNG}`;

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/festival");
    }

    return (
        <div className="w-full h-full">
            <h2 className="font-extrabold text-4xl m-10 text-center p-5 text-black bg-blue-50">{contents.TITLE}</h2>
            <div className="flex">
                <img src={contents.MAIN_IMG_NORMAL} className="w-100 h-100 m-5 rounded-2xl" />
                <table className="w-full h-auto mt-5 m-3 table-auto shadow-lg rounded-4xl">
                    <tbody>
                        <tr className="flex p-2">
                            <td className="w-30 text-right font-bold pr-5">축제구분</td>
                            <td className="w-full">{contents.GUGUN_NM}</td>
                        </tr>
                        <tr className="flex p-2">
                            <td className="w-30 text-right font-bold pr-5">주소</td>
                            <td className="w-full">{contents.ADDR1} {contents.ADDR2} <a href={kakaoMapUrl} className="bg-amber-200 p-2 ml-4 font-bold">카카오지도보기</a></td>
                        </tr>
                        <tr className="flex p-2">
                            <td className="w-30 text-right font-bold pr-5">연락처</td>
                            <td className="w-full">{contents.CNTCT_TEL}</td>
                        </tr>
                        <tr className="flex p-2">
                            <td className="w-30 text-right font-bold pr-5">홈페이지</td>
                            <td className="w-full"><a href={contents.HOMEPAGE_URL} className="hover:text-gray-400">{contents.HOMEPAGE_URL}</a></td>
                        </tr>
                        <tr className="flex p-2">
                            <td className="w-30 text-right font-bold pr-5">상세내용</td>
                            <td className="w-full">{contents.ITEMCNTNTS.toString().split("*").slice(0, 1)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center text-center">
                <button onClick={handleClick} className="p-3 bg-blue-400 w-15 text-white font-bold m-5 rounded-md hover:bg-blue-300 hover:cursor-pointer">목록</button>
            </div>
        </div>
    )
}
