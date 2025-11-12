import {Header} from "@/components/header";
import {Features} from "@/components/featuers";
import {Gallery} from "@/components/gallery";
import {Reviews} from "@/components/reviews";
import {CallToAction} from "@/components/call-to-action";

export default function Home() {
    return (
        <div className="flex flex-col mx-auto justify-center gap-12 max-w-[90%] xl:max-w-[80%] xl:gap-y-20 2xl:gap-y-32">
            <Header/>
            <Features/>
            <Gallery/>
            <Reviews/>
            <CallToAction/>
        </div>
    );
}
