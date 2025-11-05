import { reviews } from "@/data/reviews";
import {Star} from "lucide-react";

export const Reviews = () => {
    return (
        <div>
            <h4 className={"font-bold text-2xl"}>Opinie klientów</h4>
            <div className={"mt-8 flex flex-col gap-y-4"}>
                {reviews.map((review, index) => (
                    <div key={index}>
                        <div className={"flex gap-x1"}>
                            {Array.from({length: review.rating}).map((_, i) => (
                                <Star key={i} fill={"#155dfc"} strokeWidth={0}/>
                            ))}
                        </div>
                        <p className="text-gray-600 mt-1 ml-1 2xl:text-lg 2xl:mt-4">{review.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}