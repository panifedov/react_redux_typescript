import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypesSelector } from '../hooks/UseTypedSelector';
import { fetchUsers } from '../store/actioncreater/user';

const UserList: React.FC = () => {
    const {users, error, loading} = useTypesSelector(state => state.user)
    const dispatch = useDispatch

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default UserList;