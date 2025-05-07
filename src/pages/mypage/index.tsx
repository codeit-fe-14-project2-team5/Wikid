import PasswordChangeForm from "@/components/mypage/PasswordChangeForm";
import QuestionCreateForm from "@/components/mypage/QuestionCreateForm";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function MyPage() {
  const { isLoggedIn, isInitialized } = useAuthStore();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !isInitialized) return;

    if (!isLoggedIn) {
      router.replace("/login");
    }
  }, [mounted, isInitialized, isLoggedIn, router]);

  if (!mounted || !isInitialized) {
    return null;
  }

  if (!isLoggedIn) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 -mt-[80px]">
        <h2 className="text-text2xlSemibold mb-[50px] text-center text-gray500">
          계정설정
        </h2>
        <PasswordChangeForm />
        <hr className="w-full max-w-md my-10 border-gray-300" />
        <QuestionCreateForm />
      </div>
    </>
  );
}
