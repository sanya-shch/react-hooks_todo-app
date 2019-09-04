import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import Context from '../context'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        marginBottom: '.5rem',
        border: '0',
        borderBottom: 'solid 2px #2c3e50'
    },
    input: {
        marginRight: '1rem'
    }
};

function TodoItem({ todo, index, onChange }) {
    const { removeTodo } = useContext(Context);
    const classes = [];

    if (todo.completed) {
        classes.push('done')
    }

    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input
                    type='checkbox'
                    checked={todo.completed}
                    style={styles.input}
                    onChange={() => onChange(todo.id)}
                />
                <strong>{index + 1}</strong>
                &nbsp;&nbsp;
                { todo.title.length < 55 ? `${todo.title}` : `${todo.title.substring(0, 52)}...` }
            </span>
            <button className='rmb' onClick={removeTodo.bind(null, todo.id)}>
                &times;
            </button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
};

export default TodoItem
