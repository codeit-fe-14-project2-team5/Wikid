import React from "react";
import FormInput from "./FormInput";
import FormButton from "@/components/AuthForm/FormButton";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signupAPI } from "@/apis/authAPI";
const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export interface InputValues {
  email: string;
  name?: string;
  password: string;
  passwordConfirmation?: string;
}

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      await signupAPI({
        email: data.email,
        name: data.name,
        password: data.password,
        passwordConfirmation: data.passwordConfirmation,
      });
      router.push("/login");
    } catch (error) {
      console.error("회원가입 실패", error);
    } finally {
      setIsLoading(false);
    }
  };

  const password = watch("password", "");

  return (
    <>
      <form
        className="flex flex-col gap-6 mb-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          id="name"
          label="이름"
          placeholder="이름을 입력해 주세요"
          type="text"
          register={register("name", {
            required: "이름은 필수입니다.",
            maxLength: {
              value: 10,
              message: "10자 이하로 작성해 주세요",
            },
          })}
          error={errors.name}
        />
        <FormInput
          id="email"
          label="이메일"
          placeholder="이메일을 입력해 주세요"
          type="text"
          register={register("email", {
            required: "이메일은 필수입니다.",
            pattern: {
              value: EMAIL_REGEX,
              message: "이메일 형식으로 작성해 주세요",
            },
          })}
          error={errors.email}
        />
        <FormInput
          id="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해 주세요"
          type="password"
          register={register("password", {
            required: "비밀번호는 필수입니다.",
            minLength: {
              value: 8,
              message: "8자 이상 입력해 주세요",
            },
          })}
          error={errors.password}
        />
        <FormInput
          id="passwordConfirmation"
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해 주세요"
          type="password"
          register={register("passwordConfirmation", {
            required: "비밀번호 확인은 필수입니다.",
            validate: (value: string) =>
              value === password || "비밀번호가 일치하지 않습니다.",
          })}
          error={errors.passwordConfirmation}
        />
        <FormButton type="submit" loading={isLoading}>
          회원가입
        </FormButton>
      </form>
      <div className="flex justify-center gap-[10px]">
        <span className="text-gray400 text-sm">이미 회원이신가요?</span>
        <Link
          href="/login"
          className="font-normal text-primaryGreen200 text-sm"
        >
          로그인
        </Link>
      </div>
    </>
  );
};

export default SignupForm;
