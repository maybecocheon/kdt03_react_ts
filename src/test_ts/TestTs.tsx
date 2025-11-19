export default function TestTs() {

    // 기본 데이터 타입
    let name : string = 'k-digital'; // 콜론과 타입(: string) 생략 가능 => 생략 시 입력값에 따라 데이터 타입 추론
    let age = 30;       // 초기값 할당 안 하고 데이터 타입 명시하지 않으면 any 타입이 됨 => 1) any 타입은 쓰지 말기 2) 초기값 안 줄 거면 데이터 타입 명시하기
    let isStudent : boolean = true;

    age = '50'    // number 타입이라고 명시하지 않아도 age에 처음 number 할당하면 age를 number 타입으로 인식함 => 1) 빨간 줄 생김 2) npm run dev 했을 때는 오류 안 남
    
    // undefined, null 타입
    let x : undefined = undefined;
    let y : null = null;

    // 배열
    let nums : number[] = [1, 2, 3];
    let nums2 : Array<string> = ['4', '5', '6'];

    // 튜플
    // let arrTuple : [name:String, age:number] = ['민지', 30];
    let arrTuple : [string, number] = ['민지', 30];     // 튜플은 값 수정 불가한 배열
    
    // 오브젝트
    let person : {name:string, age:number} = {name: 'pnu', age: 30};
    // 1) 타입 ( = 있음)
    type Person = {
        name: string,
        age: number
    }
    let person1 : Person = {name: '수현', age: 25};
    // 2) 인터페이스 ( = 없음)
    interface Person2 {
        name: string,
        age: number
    }
    let person2 : Person2 = {name: '지현', age: 28};

    // 상수
    let direction : 'left' = 'left';

    // 유니온 타입
    let union : 'left' | 'right' = 'left';
    union = 'right';

    // 함수
    type HandleMsg = (msg : string) => string;
    type HandleClick = () => void;

    const handleMsg = (msg : string) : string => {
        return msg + '님 안녕하세요.';
    }

    const handleMsg2 : HandleMsg = (msg) => {
        return msg + '님 안녕하세요.';
    }

    const handleClick = () : void => {  // 리턴 타입은 void
        console.log("handleClick");
        console.log(handleMsg2('현지'));
    }

    const handleClick2 : HandleClick = () => { 
        console.log("handleClick");
        console.log(handleMsg2('현지'));
    }

    return (
        <div>
            <h1 className="font-extrabold text-2xl">TypeScript 기본 문법</h1>
            <ul className="mt-10">
                <li>기본 데이터 타입 (string) : {name}</li>
                <li>기본 데이터 타입 (number) : {age}</li>
                <li>기본 데이터 타입 (boolean) : {isStudent ? "학생" : "일반인"}</li>
                <li>배열 (number[]) : {nums.join(', ')}</li>
                <li>배열 (Array) : {nums2.join(', ')}</li>
                <li>튜플 ([name:String, age:number]): 이름={arrTuple[0]}, 나이={arrTuple[1]}</li>
                <li>오브젝트(name:String, age:number): 이름={person.name}, 나이={person['age']}</li>
                <li>오브젝트(type Person): 이름={person1.name}, 나이={person1['age']}</li>
                <li>오브젝트(interface Person): 이름={person2.name}, 나이={person2['age']}</li>
                <li>상수: {direction}</li>
                <li>유니온 타입 : {union}</li>
            </ul>
            <div>
                <button type="button" onClick={handleClick} className="bg-blue-400 p-5 hover:cursor-pointer">클릭</button>
            </div>
        </div>
    )
}
