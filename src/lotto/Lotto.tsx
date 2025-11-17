import { useState } from 'react'
import TailBall from '../component/TailBall'
import TailButton from '../component/TailButton'

//Lotto 컴포넌트
export default function Lotto() {

    //useState로 공 생성 여부 관리
    //useState는 상태 변화 관리
    //훅은 바디 안에서만 사용 가능
    let [ball, setBall] = useState([]);

    //클릭했을 때 난수가 겹치지 않는 TailBall 6개 생성 => onHandle에 전달할 함수

    // const click = () => {
    //     // 1. 로또 숫자 저장 배열
    //     let nums = [];
    //     //2. 숫자 일곱 개 중복되지 않도록 생성
    //     while (nums.length < 7) {
    //         let rd = Math.floor((Math.random() * 45) + 1);
    //         if (nums.includes(rd)){
    //             continue;
    //         } else {
    //             nums.push(rd);
    //         }
    //     }
    //     setBall(nums);
    // }

    //Set 집합: 중복되지 않는 값을 저장하는 객체
    // const click = () => {
    //     // 1. 로또 숫자 저장 배열
    //     let nums = new Set();
    //     //2. 숫자 일곱 개 생성 (중복 자동 제거)
    //     while (nums.size < 7) {
    //         let rd = Math.floor((Math.random() * 45) + 1);
    //         nums.add(rd);
    //     }
    //     //3. set을 배열로 변환
    //     nums = Array.from(nums);
    //     //4. 보너스 번호 뽑기
    //     let bonus = nums.pop();
    //     //5. 배열 정렬
    //     nums.sort((a, b) => a - b);
    //     //6. 플러스 만들기
    //     nums.push(50);
    //     //7. 보너스 번호 추가
    //     nums.push(bonus);
    //     //8. 태그 만들기
    //     let tm = nums.map(num => num == 50? 
    //                      <span className='font-bold' key="plus"> + </span> : <TailBall n={num} key={num} />);\
    //     //9. 상태 변경
    //     setBall(tm);
    // }

    //Set 집합: 중복되지 않는 값을 저장하는 객체
    const click = () => {
        // 1. 로또 숫자 저장 배열
        let nums = new Set();
        //2. 숫자 일곱 개 생성 (중복 자동 제거)
        while (nums.size < 7) {
            let rd = Math.floor((Math.random() * 45) + 1);
            nums.add(rd);
        }
        //3. set을 배열로 변환
        nums = Array.from(nums);
        //4. 보너스 번호 뽑기
        let bonus = nums.pop();
        //5. 배열 정렬
        nums.sort((a, b) => a - b);
        //6. 태그 만들기
        let tm = nums.map(num => <TailBall n={num} key={num} />);
        tm = [...tm, <span className='font-bold' key="plus"> + </span>, <TailBall n={bonus} key={bonus} />];
        //7. 상태 변경
        setBall(tm);
    }

    //표현식 안에는 연산자만 들어갈 수 있어서 함수는 못 들어감
    //따라서 click 함수를 밖에서 정의하고 표현식 안에서는 호출만 함
    //onHandle={() => click()} 도 가능
    //if문은 삼항연산자나 && 등 연산자로 대체 가능
    return (        
        <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center m-10'>
                {/* {ball.map((num) => {return num !== ball[6]? <TailBall n={num} key={num} /> : ""})}
                <span className='font-bold'>{ball.length == 0? " " : " + "}</span>
                <TailBall n={ball[6]} /> */}
                {ball}
                {console.log(ball)}
            </div>
            <TailButton color="blue" caption="로또 번호 생성" onHandle={click}/>
        </div>
  )
}
