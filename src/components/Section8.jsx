import { useState, useRef } from "react";


export default function Section8() {
    const [activeIndex, setActiveIndex] = useState(null);
    const refs = useRef([]);

    const items = [
        {
            title: "Lörem ipsum koda astrobel: sutaveligen.",
            body: "Question-1"
        },
        {
            title: "Rodod bänera viliga",
            body: "Question-2"
        },
        {
            title: "Pregigt primasofi dede facebooka: förutom",
            body: "Question-3"
        },
        {
            title: "Ipsum koda astrobel: sutaveligen. Rodod bänera viliga.",
            body: "Question-4"
        },
        {
            title: "Rodod bänera viliga. Pregigt primasofi dede facebooka",
            body: "Question-5"
        }
    ];

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <div className="section8">
                <div className="container">
                    <div className="h-p-box-9">
                        <h3 className="heading-12">Frequently Asked Questions</h3>
                        <p className="para-14">Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade</p>
                    </div>
            <div className="accordion-wrapper">
                {items.map((item, index) => (
                    <div className="accordion-card" key={index}>
                        <div className="accordion-header" onClick={() => toggle(index)}>
                            <p className="accordion-title">{item.title}</p>

                            <div
                                className={`accordion-icon ${activeIndex === index ? "rotate" : ""}`}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                        <div
                            className="accordion-body"
                            ref={(el) => (refs.current[index] = el)}
                            style={{
                                maxHeight: activeIndex === index ? refs.current[index]?.scrollHeight : 0
                            }}
                        >
                            <p className="accordion-body-text">{item.body}</p>
                        </div>

                    </div>
                ))}
                    </div>
                </div>
            </div>
        </div >
    );
}