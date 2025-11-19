export default function BackgroundSelect({ bg, setBg, bgOptions }) {
    const objectValue = (optVal) => `cursor-pointer m-1 text-center border-2 w-24 h-24 ${bg === optVal ? 'border-neon' : 'border-[#223322]'} rounded-lg`;

    return (
        <div>
            <h3 className="text-xs tracking-wide text-slate-400">Background</h3>
            <div className="flex flex-row space-6 flex-wrap">
                { bgOptions.map((option) => {
                    if (!option.value) return (
                        <div 
                            className={objectValue('')} 
                            key="none" 
                            onClick={() => setBg('')}
                        >No Background</div>
                    );

                    return (
                        <img 
                            alt = {option.label} 
                            key={option.value} 
                            src={option.value} 
                            className={objectValue(option.value)} 
                            onClick={() => setBg(option.value)} 
                        />
                    )
                })}
            </div>
        </div>
    )
}