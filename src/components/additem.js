import React,{useState} from 'react';
import Form from "./form";

const AddItem = () => {

    const [add,setAdd] = useState(false);
    const formContent = add ? <Form />:'';

    return(
        <div className="add-toggler">
            <div className="input-toggler" onClick={()=>setAdd(!add)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="add-todo">
                Add Todo
            </div>
            {formContent}
        </div>
    )

}

export default AddItem;