import React from 'react';
import { UserActions } from '../hooks/UseActions';
import { useTypesSelector } from '../hooks/UseTypedSelector';
import { useEffect } from 'react';

const TodoList: React.FC = () => {
    const {page, errors, limit, loading, todo} = useTypesSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = UserActions()
    const pages = [1, 2, 3, 4, 5] 

    useEffect(() => {
        fetchTodos(page, limit)
    }, [ page] )
    
    if (loading) {
        <h1>Loading</h1>
    }
    if({errors}) {
        <h1>{errors}</h1> 
    }

    return (
        <div>
            {todo.map(oneTodo => 
                <div key={oneTodo.id}>{oneTodo.id} - {oneTodo.title}</div>
            )}
            <div style={{display: 'flex', flexDirection: 'row'}}>
                {pages.map(p => 
                    
                        <div
                        onClick={() => setTodoPage(p)}
                        style={{border:p === page ?'1px solid blue' : '1px solid grey' , padding: 12, }}
                        >
                            {p}
                        </div>
                )}
            </div>
        </div>
    );
};

export default TodoList;