import Image from "next/image";
import Footer from "../components/Footer";

export default function Appointment() {
    return (
        <div className="appointments-container">
            <div className="search-section">
                <h3>Find a doctor at your own ease</h3>
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search doctor"
                        className="search-field"
                    />
                    <button className="search-btn">Search</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}