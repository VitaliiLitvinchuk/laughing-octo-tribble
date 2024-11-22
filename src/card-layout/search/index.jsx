const Search = ({ inputRef, onClick }) => {
    return (
        <>
            <button onClick={onClick}>Search</button>
            <input ref={inputRef} type="text" placeholder="Search" />
        </>
    )
};

export default Search;