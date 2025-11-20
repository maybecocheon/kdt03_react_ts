import { useRef } from "react"
import TailButton from "../component/TailButton"
import { supabase } from "../supabase/client"

interface TodoInputProps {
    getTodos : () => {}
}
export default function TodoInput({ getTodos } : TodoInputProps) {
    // 추가 클릭 시 함수
    // 인풋 값 참조하기
    const todoInputRef = useRef<HTMLInputElement>(null);
    const onClickAdd = async () => {
        if (todoInputRef.current?.value == "") {
            alert("값을 입력해 주세요.");
            todoInputRef.current?.focus();
            return;
        }

        const { error } = await supabase
                                    .from('todos')
                                    .insert({ text: todoInputRef.current?.value, completed: false });
            
        if (error) {
            console.error('Error adding todos:', error);
        } else {
            getTodos();
            if (todoInputRef.current != null) {
                todoInputRef.current.value = "";
            }
            todoInputRef.current?.focus();
        }
    }

    return (
        <div className="flex gap-2 mb-5 p-2 items-center w-full">
            <input type="text" name="todoListInput" ref={todoInputRef} placeholder="새로운 할 일을 입력하세요"
                            className="w-9/10 p-3 bg-gray-50 rounded-lg border border-gray-300" />
            <div className="w-2/10">
                <TailButton color="blue" caption="추가" onHandle={onClickAdd} />
            </div>
        </div>
    )
}
