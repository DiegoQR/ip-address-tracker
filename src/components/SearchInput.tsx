interface Props {
    name: string;
    placeholder: string;
    loading?: boolean;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

function SearchInput ({ name, placeholder, value, loading, onChange, onSubmit }: Props) {
    return (<>
        <form className="relative max-w-150 mx-auto my-10" onSubmit={onSubmit}>
            <label htmlFor={name} className="hidden">Search</label>
            <input 
                type="text" 
                id={name} 
                placeholder={placeholder} 
                required
                value={value}
                onChange={onChange} 
                className="h-15 w-full rounded-2xl bg-white text-black px-4 outline-very-dark-gray focus:outline-1"
            />
            <button type="submit" disabled={loading} className="absolute inset-y-0 right-0 bg-black w-15 rounded-r-lg cursor-pointer hover:bg-very-dark-gray">
                {
                    loading ? <svg xmlns="http://www.w3.org/2000/svg" className="aspect-square w-10 mx-auto" viewBox="0 0 200 200"><radialGradient id="a9" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stopColor="#FFFFFF"></stop><stop offset=".3" stopColor="#FFFFFF" stopOpacity=".9"></stop><stop offset=".6" stopColor="#FFFFFF" stopOpacity=".6"></stop><stop offset=".8" stopColor="#FFFFFF" stopOpacity=".3"></stop><stop offset="1" stopColor="#FFFFFF" stopOpacity="0"></stop></radialGradient><circle transform-origin="center" fill="none" stroke="url(#a9)" strokeWidth="15" strokeLinecap="round" strokeDasharray="200 1000" strokeDashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transform-origin="center" fill="none" opacity=".2" stroke="#FFFFFF" strokeWidth="15" strokeLinecap="round" cx="100" cy="100" r="70"></circle></svg>  :
                    <img src="/images/icon-arrow.svg" className="aspect-square w-4 mx-auto"/> 
                }
                
            </button>
        </form>
    </>);
}

export default SearchInput;