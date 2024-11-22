import './styles.css';

const UserCard = ({ user, handleDelete }) => {
    return (
        <div>
            <p>
                <strong>{user.first_name}</strong>
                <button className="delete" onClick={() => handleDelete(user.id)}>Delete</button>
            </p>
            <p>{user.email}</p>
            <img key={user.avatar} src={user.avatar} />
        </div>
    );
}

export default UserCard;