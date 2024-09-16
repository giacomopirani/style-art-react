

export default function Input({ label, invalid ,...props}) {

    let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";
    let inputClasses =
     "w-full px-3 py-2 mb-3 text-sm leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline";

    if (invalid) {
        labelClasses += " text-red-500";
        inputClasses += " text-red-500 bg-red-200 border-red-500";
    } else {
        labelClasses += " text-gray-300";
        inputClasses += " text-gray-700 bg-stone-300";
    }

    return (
        <p>
        <label className={labelClasses}>{label}</label>
        <input className={inputClasses} {...props} />
        </p>
    );
}
