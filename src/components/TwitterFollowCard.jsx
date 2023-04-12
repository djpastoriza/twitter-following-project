import { useEffect, useState } from "react";

const TwitterFollowCard = ({ children, formatUserName, userName,initialIsFollowing }) => {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    let buttonText = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing
        ? "tw-followCard-button is-following"
        : "tw-followCard-button";
    const imageSrc = `https://unavatar.io/${userName}`;

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };


    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" alt="El avatar" src={imageSrc} />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button
                    className={buttonClassName}
                    onClick={() => handleClick()}
                >
                    <span className="tw-followCard-text">{buttonText}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
};

export default TwitterFollowCard;
