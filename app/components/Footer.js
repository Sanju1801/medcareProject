import Image from "next/image";

export default function Footer() {
    return (
        <div id="footer-container">
            <span>@EmScripts 2024. All Rights Reserved.</span>
            <Image src="/Social_media.png" width={60} height={60} alt="social media"/>
        </div>
    )
}