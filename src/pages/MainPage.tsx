import SearchInput from "../components/SearchInput";

function MainPage() {
    return (<>
        <main className='mx-5 text-center my-10 space-y-7'>
            <h1>IP Address Tracker</h1>
            <SearchInput name="ip-search" placeholder="Search for any IP address or domain"/>
        </main>
    </>);
}

export default MainPage;