export default function TailBall({n}) {
    
    //숫자마다 공 색 다르게 하기
    // const BallStyle = {
    //     blue: "bg-blue-400",
    //     red: "bg-red-400",
    //     green: "bg-green-400",
    //     yellow: "bg-yellow-400",
    //     gray: "bg-gray-400" 
    // }


    //객체로 받지 않고 배열로도 가능
    const BallStyle = [
        "bg-blue-400", 
        "bg-red-400", 
        "bg-green-400", 
        "bg-yellow-400", 
        "bg-gray-400"
    ]

    //n 값에 따라 색상 변경
    // let ballStyle = (n) => {
    //     let color;
    //     if (n <= 10) color = BallStyle.blue;
    //         else if (n <= 20) color = BallStyle.red;
    //         else if (n <= 30) color = BallStyle.green;
    //         else if (n <= 40) color = BallStyle.yellow;
    //         else color = BallStyle.gray;
        
    //         return color;
    //     }

    return (
        //<div className={`w-15 h-15 m-5 rounded-full flex justify-center items-center ${ballStyle(n)} font-bold`}>
        <div className={`w-15 h-15 m-5 rounded-full flex justify-center items-center ${BallStyle[Math.floor(n/10)]} font-bold`}>
            <p>
                {n}
            </p>
        </div>
    )
}
