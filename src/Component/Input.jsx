import React from 'react';

const Input = ({handleSubmit,setBody,setTitle,body,title}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" value={title}
               onChange={(e) => setTitle(e.target.value)}
            />
            <textarea name="" className="form-control" id="" cols="10" rows="8" 
               value={body} onChange={(e) => setBody(e.target.value)} 
            ></textarea>
            <button type="submit">Add Post</button>
         </form>
        </div>
    );
};

export default Input;