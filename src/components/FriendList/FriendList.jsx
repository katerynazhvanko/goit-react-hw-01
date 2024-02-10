import clsx from 'clsx';

import css from './Friends.module.css';



export const FriendList = ({ friends }) => {
    return (
        <ul className={css.list}>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <li key={id} id={id} className={css.item}>
                        <div className={css.box}>
                            <img src={avatar} alt="Avatar" width="48" className={css.avatar} />
                            <p className={css.name}>{name}</p>
                            <p className={clsx(css.status, isOnline ? css.isOnline : css.isOffline)}>{isOnline ? 'Online' : 'Offline'}</p>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}