import {useState, useEffect} from "react";

import './App.css';
import UserList from "./components/users/UserList";
import Menu from "./components/layout/Menu";
import Footer from "./components/layout/Footer";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedUsers, serLoadedUsers] = useState([]);

    useEffect(() => {
        fetch(
            'http://127.0.0.1:8000/api/users/'
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setIsLoading(false);
                serLoadedUsers(data);
            })
    }, [])

    if (isLoading) {
        return (
            <p>Loading....</p>
        );
    }

    return (
        <div className='wrapper'>
            <div className='content'>
                <Menu/>
                <div className='center'>
                    <UserList userList={loadedUsers}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
