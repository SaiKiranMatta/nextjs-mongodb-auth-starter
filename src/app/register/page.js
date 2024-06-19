import React from "react";
import RegistrationForm from "@/components/RegistrationForm";

import Link from "next/link";

const RegisterPage = () => {
    return (
        <div className="flex flex-col justify-center items-center pt-24">
            <RegistrationForm />
            <div className="my-3">
                Already have an account?
                <Link href="/" className="mx-2 underline">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default RegisterPage;
