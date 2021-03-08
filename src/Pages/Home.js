import React from 'react';
import Header from '../Components/Header';
import LoginCard from '../Components/LoginCard';
import ProfileCard from '../Components/ProfileCard';
import { AuthUserStore } from '../Global/Stores/AuthUserStore';


function Home() {
    const [authUser, setAuthUser] = React.useState(AuthUserStore.getAuthUser());

    React.useEffect(() => {
        AuthUserStore.addChangeListener(() => setAuthUser(AuthUserStore.getAuthUser()));
        return () => AuthUserStore.removeChangeListener(() => {});
    });
    return (
        <div>
            <Header />
            {!authUser.loggedIn ? <LoginCard /> : <ProfileCard />}
        </div>
    )
}

export default Home;