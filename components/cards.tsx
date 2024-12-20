import Image from "next/image";

export function ClientOptionCard({icon, title, value, selected, onSelect}: { icon: string, title: string, value?: string, selected?: string, onSelect?: () => void }) {
    return (
        <div className="flex flex-col gap-4 max-w-96 rounded-xl border-2 border-[#2951e1] px-8 py-5 cursor-pointer" onClick={onSelect}>
            <div className="flex flex-row justify-between items-center">
                <Image src={icon} alt={title} width={50} height={50} />
                {value && (value == selected) && <div className="w-5 h-5 p-[2px] bg-white rounded-xl border-2 border-[#2951e1]">
                    <div className="w-full h-full bg-[#2951e1] rounded-full" />
                </div>}
            </div>
            <h3 className="font-bold text-2xl max-w-64">{title}</h3>
        </div>
    )

}