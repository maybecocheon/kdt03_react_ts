import TailButton from "../component/TailButton"
import { useEffect, useRef, useState } from "react"
import { supabase } from "../supabase/client"
import type { TodoType } from "./TodoType"

interface TodoItemProps {
    todo : TodoType,
    getTodos : () => {}
}

export default function TodoItem({ todo, getTodos } : TodoItemProps) {

    // 수정 여부를 묻는 state 
    const [isEdit, setIsEdit] = useState(false);

    // 수정 시 state 변수
    const [editValue, setEditValue] = useState(todo.text);
    const editRef = useRef<HTMLInputElement>(null);

    // 수정 클릭 시 함수
    // 체크박스의 값 참조하기
    const todoCheckValue = useRef<HTMLInputElement>(null);
    const onClickChange = () => {
        setIsEdit(true);
    }

    // 수정할 값 focus 하기
    useEffect(() => {
        if (isEdit) {
            editRef.current?.focus();
        }
    }, [isEdit]);

    // 삭제 클릭 시 함수
    const onClickDel = async () => {
        const { error } = await supabase
                                .from('todos')
                                .delete()
                                .eq('id', todo.id);

        if (error) {
            console.error('Error deleting todo:', error);
        } else {
            getTodos();
        }
    }

    // 저장 클릭 시 함수
    const onClickSave = async () => {
        if (editValue == "") {
            alert("값을 입력해 주세요.");
            editRef.current?.focus();
            return;
        }

        const { error } = await supabase
                                .from('todos')
                                .update({ text: editRef.current?.value })
                                .eq('id', todo.id);

        if (error) {
            console.error('Error editing todo:', error);
        } else {
            getTodos();
        }
        setIsEdit(false);
    }

    // 취소 클릭 시 함수
    const onClickCancel = () => {
        setIsEdit(false);
        setEditValue(todo.text);
    }

    // 체크 시
    const onCheckToggle = async () => {
        const { error } = await supabase
                                .from('todos')
                                .update({ completed: !todo.completed })
                                .eq('id', todo.id);

        if (error) {
            console.error('Error toggling todo:', error);
        } else {
            getTodos();
        }
    }

    return (
        <div className="flex gap-5 mb-2">
            <div className="flex w-full gap-5 items-center bg-yellow-50 p-2">
                <input type="checkbox" name={String(todo.id)} ref={todoCheckValue} onChange={onCheckToggle} />
                {isEdit ?
                <input type="text" name={String(todo.id)} value={editValue} ref={editRef} onChange={(e) => setEditValue(e.target.value)} className="p-2 w-full focus: bg-gray-50" />
                    : <p className={todo.completed ? "line-through text-gray-300" : ""}>{todo.text}</p>}
            </div>
            {isEdit ?
                <div className="flex gap-5 w-3/10">
                    <TailButton color="red" caption="저장" onHandle={onClickSave} />
                    <TailButton color="orange" caption="취소" onHandle={onClickCancel} />
                </div>
                :
                <div className="flex gap-5 w-3/10">
                    <TailButton color="red" caption="수정" onHandle={onClickChange} />
                    <TailButton color="orange" caption="삭제" onHandle={onClickDel} />
                </div>
            }
        </div>
    )
}
