interface Props {
    name: string;
    placeholder: string;
}

function SearchInput ({ name, placeholder }: Props) {
    return (<>
        <form className="relative">
            <label htmlFor={name} className="hidden">Search</label>
            <input type="text" id={name} placeholder={placeholder} required className="w-full h-15 rounded-2xl bg-white text-black px-4 outline-very-dark-gray focus:outline-1"/>
            <button type="submit" className="absolute top-0 right-0 bg-black h-full w-1/6 rounded-r-lg ">
                <img src="/images/icon-arrow.svg" className="aspect-square w-4 mx-auto"/>
            </button>
        </form>
    </>);
}

export default SearchInput;