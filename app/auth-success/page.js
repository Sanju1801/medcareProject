"use client"; 
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthSuccess() {
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get("token");

            if (token) {
                localStorage.setItem("token", token);
                router.replace("/appointments");
            } else {
                router.replace("/login");
            }
        }
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Authenticating...</h2>
            <p>Please wait while we log you in.</p>
        </div>
    );
}