import {CheckCircle} from "lucide-react";
import {FeaturesList} from "@/data/features";

export const Features = () => {
    return (
        <div>
            <h2 className={"font-bold text-2xl 2xl:text-3xl"}>Dlaczego Clariflow?</h2>
            <div className={"mt-8 2xl:mt-16"}>
                <ul className="space-y-3 grid grid-cols-1 md:grid-cols-2">
                    {FeaturesList.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-600 2xl:text-lg">
                            <CheckCircle className="text-blue-600 w-5 h-5 flex-shrink-0"/>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}