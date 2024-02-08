export const FriendList = ({ friends }) => {
    return (
        <ul>
            {friends.map(({ avatar, name, isOnline, id }) => { return (
                <li key={id} id={id}>
                    <div>
                        <img src={avatar} alt="Avatar" width="48" />
                        <p>{name}</p>
                        <p>{isOnline ? 'Online' : 'Offline'}</p>
                    </div>
                </li>
            )})}
  </ul>
)
}