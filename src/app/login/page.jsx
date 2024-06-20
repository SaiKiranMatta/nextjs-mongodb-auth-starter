import React from "react";

import Link from "next/link";
import LoginForm from "@/components/LoginForm";

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-24">
            <LoginForm />
            <div className="my-3">
                Don't have an account?
                <Link href="/login" className="mx-2 underline">
                    Register
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;
