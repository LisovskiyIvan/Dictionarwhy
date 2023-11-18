import { Textarea } from "./Textarea"

export function Container () {
    return (
        <div className="mt-28 mx-40 w-9/12 flex justify-between items-center">
            <Textarea />
            <div className="w-14 transition ease-in-out delay-50  hover:scale-110  duration-300 cursor-pointer">
                <img src="/img/swap.png" alt="" />
            </div>
            <Textarea />
        </div>
    )
}