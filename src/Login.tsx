// 로컬스토리지 사용하여 로그인하기
import { useEffect, useState } from 'react';
import { supabase } from './supabase/client.ts';
import TailButton from './component/TailButton.tsx'

function Login() {
    // session 상태를 저장하는 state
    const [session, setSession] = useState(null);

    // 컴포넌트가 마운트될 때 한 번 실행되는 useEffect
    useEffect(() => {
        // 현재 세션 정보를 가져와서 session state를 업데이트
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        // 인증 상태 변경을 감지하는 리스너를 설정
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            // 인증 상태가 변경되면 session state를 업데이트
            setSession(session);
        });

        // 컴포넌트가 언마운트될 때 리스너를 정리
        return () => subscription.unsubscribe();
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함

    // session 상태 변경될 때 로그인 변수 변경
    useEffect(() => {
        // 세션이 있으면 user 정보를, 없으면 null을 user state에 저장
        if (session) {
            localStorage.setItem("user_name", JSON.stringify(session?.user?.user_metadata?.user_name || null));
            localStorage.setItem("login", JSON.stringify(1));
        }
    }, [session])

    // GitHub OAuth를 사용하여 로그인하는 비동기 함수
    const signInWithGithub = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'github',
        });
    };

    // 로그아웃하는 비동기 함수
    const signOut = async () => {
        await supabase.auth.signOut();
        localStorage.setItem("user_name", JSON.stringify(""));
        localStorage.setItem("login", JSON.stringify(0));
    };

    // 세션이 없는 경우 (로그인되지 않은 상태)
    if (!session) {
        return (
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">로그인</h1>
                <TailButton onHandle={signInWithGithub} color="blue" caption="GitHub으로 로그인" />
            </div>
        );
    }
    // 세션이 있는 경우 (로그인된 상태)
    else {
        return (
            <div className="flex flex-col items-center justify-center">
                {/* 사용자 이름 또는 이메일을 환영 메시지에 표시 */}
                <h1 className="text-2xl font-bold mb-4">환영합니다, {session?.user?.user_metadata?.user_name || session?.user?.email}!</h1>
                {/* 사용자 이메일 표시 */}
                <p className="mb-4">이메일: {session?.user?.email}</p>
                <TailButton onHandle={signOut} color="red" caption="로그아웃" />
            </div>
        );
    }
}

export default Login;
