import { useEffect, useState, useRef } from "react"
import TailCard from "../component/TailCard";
import { Link } from "react-router-dom";

export default function Festival() {
    const apiKey = import.meta.env.VITE_PUBLIC_API;

    // card와 option과 선택 옵션 뿌리기
    const [card, setCard] = useState([]);
    const [optionlist, setOptionlist] = useState([]);

    //const [selectedValue, setSelectedValue] = useState();
    const selRef = useRef();

    // const handleSelected = e => setSelectedValue(e.target.value);
    const handleSelected = () => selRef.current.value;

    // 데이터 가져오기
    const url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${apiKey}&pageNo=1&numOfRows=40&resultType=json`;
    const getFetchData = async () => {
        const resp = await fetch(url);
        const data = await resp.json();
        let options = await data.getFestivalKr.item.map(item => item.GUGUN_NM);
        options = [...new Set(options)].sort();
        options = options.map((item, i) => <option key={i} value={item}>{item}</option>);
        setOptionlist(options);
        let infos;
        // if (selectedValue != null){
        if (selRef.current.value != "") {
            // infos = await data.getFestivalKr.item.filter(item => item.GUGUN_NM == selectedValue);
            infos = await data.getFestivalKr.item.filter(item => item.GUGUN_NM == selRef.current.value);
        } else {
            infos = await data.getFestivalKr.item;
        }
        infos = infos.map((item, i) =>
            <Link key={i} state={{ contents: item }} to="/festival/contents">
                <TailCard key={i} source={item.MAIN_IMG_THUMB} title={item.TITLE} subtitle={item.USAGE_DAY_WEEK_AND_TIME} keyword={item.PLACE} />
            </Link>);
        setCard(infos);
    }

    useEffect(() => {
        getFetchData();
    }, [])

    useEffect(() => {
        getFetchData();
    }, [handleSelected])

    return (
        <div className="w-full h-full p-5 flex flex-col items-center gap-3">
            <div className="w-full p-10 text-center font-extrabold text-4xl mb-5 text-black bg-blue-50">부산 축제 정보</div>
            {/* <select value={selectedValue} onChange={handleSelected} className="w-1/5 p-2 border-1 border-black text-center bg-blue-50 rounded-md"> */}
            <select ref={selRef} onChange={handleSelected} className="w-1/5 p-2 border-1 border-black text-center bg-blue-50 rounded-md">
                <option value="" selected>== 모든 지역 ==</option>
                {optionlist}
            </select>
            <div className="w-full h-auto p-5 flex flex-wrap grid-cols-3 justify-center gap-4">
                {card}
            </div>
        </div>
    )
}
