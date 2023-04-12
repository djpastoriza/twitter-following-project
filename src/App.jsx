import { useState } from "react";
import "./App.css";
import TwitterFollowCard from "./components/TwitterFollowCard";

const users = [
    {
        userName: "midudev",
        name: "Miguel Ángel Durán",
        isFollowing: true,
    },
    {
        userName: "pheralb",
        name: "Pablo H.",
        isFollowing: false,
    },
    {
        userName: "PacoHdezs",
        name: "Paco Hdez",
        isFollowing: true,
    },
    {
        userName: "TMChein",
        name: "Tomas",
        isFollowing: false,
    },
];

const App = () => {
    const formatUserName = (userName) => `@${userName}`;

    return (
        <section className="App">
            {users.map(({isFollowing,userName,name}) => (
                <TwitterFollowCard
                    key={userName}
                    formatUserName={formatUserName}
                    initialIsFollowing={isFollowing}
                    userName={userName}
                >
                    {name}
                </TwitterFollowCard>
            ))}
        </section>
    );
};

export default App;
