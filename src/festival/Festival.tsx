import { useEffect, useState, useRef } from "react"
import TailCard from "../component/TailCard";
import { Link } from "react-router-dom";
import type { FestivalType } from "./FestivalType";
import loadingGif from '../assets/ic_loading_img.gif'

export default function Festival() {
    const apiKey = import.meta.env.VITE_PUBLIC_API;

    // card, option, 선택 옵션 뿌리기
    const [card, setCard] = useState<FestivalType[]>([]);
    const [optionlist, setOptionlist] = useState<string[]>([]);
    const [gu, setGu] = useState<string | null>();

    const [loading, setLoading] = useState(false);

    const selRef = useRef<HTMLSelectElement>(null);

    const handleSelected = () => {
        setGu(selRef.current?.value);
    }

    // 데이터 가져오기
    const url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${apiKey}&pageNo=1&numOfRows=40&resultType=json`;
    const getFetchData = async () => {
        setLoading(true);
        const resp = await fetch(url);
        const data = await resp.json();

        let options = await data.getFestivalKr.item.map((item: FestivalType) => item.GUGUN_NM);
        options = [...new Set(options)].sort();
        setOptionlist(options);

        let infos: FestivalType[];
        if (selRef.current?.value != "") {
            infos = await data.getFestivalKr.item.filter((item: FestivalType) => item.GUGUN_NM == selRef.current?.value);
        } else {
            infos = await data.getFestivalKr.item;
        }
        setCard(infos);
        setLoading(false);
    }

    useEffect(() => {
        getFetchData();
    }, [])

    useEffect(() => {
        getFetchData();
    }, [gu])

    return (
        <div className="w-full h-full p-5 flex flex-col items-center gap-3">
            <div className="w-full p-10 text-center font-extrabold text-4xl mb-5 text-black bg-blue-50">부산 축제 정보</div>
            <select ref={selRef} onChange={handleSelected} className="w-1/5 p-2 border border-black text-center bg-blue-50 rounded-md">
                <option value="">== 모든 지역 ==</option>
                {
                    optionlist ? optionlist.map((item, i) => <option key={i} value={item}>{item}</option>) : ""
                }
            </select>
            {
                loading ?
                    <div className="flex flex-col items-center font-extrabold text-4xl mb-10 w-full text-center">
                        <img name="loadingImage" alt="로딩중" src={loadingGif} />
                    </div> : ""
            }
            <div className="w-9/10 p-5 grid 2xl:grid-cols-3 lg:grid-cols-2 gap-6">
                {
                    card && !loading ? card.map((item, i) =>
                        <Link key={i} state={{ contents: item }} to="/festival/contents">
                            <TailCard key={i} source={item.MAIN_IMG_THUMB} title={item.TITLE} subtitle={item.USAGE_DAY_WEEK_AND_TIME} keyword={item.PLACE} />
                        </Link>) : ""
                }
            </div>
        </div>
    )
}
