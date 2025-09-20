import Link from "next/link";
import Form from "./form";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Form - Go-Makkah",
    description: "Create an account to get started with Go-Makkah",
}

export default function FormPage() {
    return (
        <>
            <div className="flex flex-col justify-center items-center w-full p-16">
                <div className="text-center">
                    <h1 className="font-bold text-3xl">Create a request</h1>
                    <p className="text-gray-500">Enter your information to get started</p>
                </div>
                <div className="mt-6 mx-auto w-full">
                    <Form />
                </div>
                <div className="mt-6 text-center text-sm">
                    Go back to home?{' '}
                    <Link className="underline" href="/">
                        Home
                    </Link>
                </div>
            </div>
        </>

    );
}