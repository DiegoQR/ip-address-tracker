interface Props {
    name: string;
    placeholder: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

function SearchInput ({ name, placeholder, value, onChange, onSubmit }: Props) {
    return (<>
        <form className="relative" onSubmit={onSubmit}>
            <label htmlFor={name} className="hidden">Search</label>
            <input 
                type="text" 
                id={name} 
                placeholder={placeholder} 
                required
                value={value}
                onChange={onChange} 
                className="w-full h-15 rounded-2xl bg-white text-black px-4 outline-very-dark-gray focus:outline-1"
            />
            <button type="submit" className="absolute inset-y-0 right-0 bg-black w-15 rounded-r-lg cursor-pointer hover:bg-very-dark-gray">
                <img src="/images/icon-arrow.svg" className="aspect-square w-4 mx-auto"/>
            </button>
        </form>
    </>);
}

export default SearchInput;