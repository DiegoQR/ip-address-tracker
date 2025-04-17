interface Props {
    label: string;
    children: string;    
}

function InfoDisplay({label, children} : Props) {
    return (<>
        <div>
            <span className="text-dark-gray text-sm font-medium tracking-widest">{label}</span>
            <h2 className="font-semibold text-xl">{children}</h2>
        </div>
    </>);
}

export default InfoDisplay;