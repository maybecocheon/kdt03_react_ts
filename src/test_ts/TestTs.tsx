export default function TestTs() {

    // 기본 데이터 타입
    let name : string = 'k-digital'; // 콜론과 타입(: string) 생략 가능 => 생략 시 입력값에 따라 데이터 타입 추론
    let age : number = 30;
    let isStudent : boolean = true;

    let x : undefined = undefined;
    let y : null = null;

    return (
        <div>
            <h1 className="font-extrabold text-2xl">TypeScript 기본 문법</h1>
            <ul className="mt-10">
                <li>기본 데이터 타입 (string) : {name}</li>
                <li>기본 데이터 타입 (number) : {age}</li>
                <li>기본 데이터 타입 (boolean) : {isStudent ? "학생" : "일반인"}</li>
            </ul>
        </div>
    )
}
