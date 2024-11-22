import { useState, useEffect, useRef } from "react";
import { getUsers, deleteUser } from "../api/requests";
import Search from "./search";
import UserCard from "./card";

const CardLayout = () => {
    const searchRef = useRef(null);
    const [users, setUsers] = useState([]);
    const [filetredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        const f = async () => {
            setUsers(await getUsers());
        };
        f();
    }, []);

    useEffect(() => {
        setFilteredUsers(users);
    }, [users]);

    const handleSearch = async () => {
        setFilteredUsers(users.filter(user => user.first_name.toLowerCase().includes(searchRef.current.value.toLowerCase())));
    };

    const handleDelete = async (id) => {
        if (await deleteUser(id))
            setUsers(users.filter(user => user.id !== id));
    };

    return (
        <>
            <Search inputRef={searchRef} onClick={handleSearch} />
            <div className="flex">
                {
                    filetredUsers.length ?
                        filetredUsers.map(user => <UserCard key={user.id} user={user} handleDelete={handleDelete} />)
                        :
                        <>No users</>
                }
            </div>
        </>
    )
};

export default CardLayout