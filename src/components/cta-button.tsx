type CtaButtonProps = {
    type: "phone" | "message";
    color?: "white" | "black";
};

export const CtaButton = ({type, color = "black"}: CtaButtonProps) => {
    const href =
        type === "phone"
            ? "tel:+48669994490"
            : "https://wa.me/+48669994490";

    const text =
        type === "phone"
            ? "Zadzwoń"
            : "Napisz";

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-light transition ${
                color === "white"
                    ? "text-white"
                    : "text-black"
            }`}
        >
            {text}
        </a>
    );
};
