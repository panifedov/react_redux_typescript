import React, { useEffect } from 'react';
import { UserActions } from '../hooks/UseActions';
import { useTypesSelector } from '../hooks/UseTypedSelector';



const UserList: React.FC = () => {
    const {users, error, loading} = useTypesSelector(state => state.user)
    const {fetchUsers} = UserActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        <h1>Loading</h1>
    }
    if({error}) {
        <h1>{error}</h1> 
    }

    return (
        <div>
            {users.map(user => 
                <div key={user.id} className="">{user.name}</div>    
            )}
        </div>
    );
};

export default UserList;