type CtaButtonProps = {
    type: "phone" | "message" | "contact" | "gallery";
    color?: "white" | "black" | "whiteBg" | "blackBg";
};

export const CtaButton = ({ type, color = "black" }: CtaButtonProps) => {
    const href =
        type === "phone"
            ? "tel:+48669994490"
            : type === "message"
                ? "https://wa.me/+48669994490"
                : type === "contact"
                    ? "/kontakt"
                    : "/galeria";

    const text =
        type === "phone"
            ? "Zadzwoń"
            : type === "message"
                ? "Napisz"
                : type === "contact"
                    ? "Umów wizytę"
                    : "Zobacz efekty";

    const colorClass = {
        white: "text-white hover:opacity-80",
        black: "text-gray-700 hover:opacity-80",
        whiteBg:
            "bg-gradient-to-r from-blue-500 to-blue-400 text-white hover:from-blue-600 hover:to-blue-500 shadow-md",
        blackBg:
            "bg-black text-white hover:bg-gray-900 shadow-md",
    }[color];

    const isInternalLink = type === "contact" || type === "gallery";

    return (
        <a
            href={href}
            target={isInternalLink ? "_self" : "_blank"}
            rel={isInternalLink ? undefined : "noopener noreferrer"}
            className={`inline-flex items-center justify-center px-6 py-2.5 rounded-lg font-light transition duration-200 ${colorClass}`}
        >
            {text}
        </a>
    );
};
