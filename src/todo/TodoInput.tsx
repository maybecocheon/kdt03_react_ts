import { useRef } from "react"
import TailButton from "../component/TailButton"
import { supabase } from "../supabase/client"

interface TodoInputProps {
    getTodos : () => {}
}
export default function TodoInput({ getTodos } : TodoInputProps) {
    // 추가 클릭 시 함수
    // 인풋 값 참조하기
    const todoInputValue : React.RefObject<HTMLInputElement> = useRef();
    const onClickAdd = async () => {
        if (todoInputValue.current.value == "") {
            alert("값을 입력해 주세요.");
            todoInputValue.current.focus();
            return;
        }

        const { error } = await supabase
                                    .from('todos')
                                    .insert({ text: todoInputValue.current.value, completed: false });
            
        if (error) {
            console.error('Error adding todos:', resp.statusText);
        } else {
            getTodos();
            todoInputValue.current.value = "";
            todoInputValue.current.focus();
        }
    }

    return (
        <div className="flex gap-2 mb-5 p-2 items-center w-full">
            <input type="text" name="todoListInput" ref={todoInputValue} placeholder="새로운 할 일을 입력하세요"
                            className="w-9/10 p-3 bg-gray-50 rounded-lg border border-gray-300" />
            <div className="w-2/10">
                <TailButton color="blue" caption="추가" onHandle={onClickAdd} />
            </div>
        </div>
    )
}
