import React from "react";

const TodoList = (props) => {
    const {status, title} = props;
    <div>
        {status===true ? (<h1>{title}</h1>) : (<h1>{title}</h1>)}
    </div>
}
export default TodoList;