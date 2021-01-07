import React,{useState} from 'react'
import { useForm } from "react-hook-form";

import { createLogEntry } from './API';

function LogEntryForm({location,onClose}) {
    const { register, handleSubmit} = useForm();
    const [error,setError] = useState('');
    const[Loading,setLoading] = useState(false);
    const onSubmit= async (data)=>{
        try {
            setLoading(true);
            data.latitude = location.latitude;
            data.longitude = location.longitude;
            await createLogEntry(data);
            onClose();
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
                {error ? <h3 className="error">{error}</h3> : null}
                <label htmlFor="title">Title</label>
                <input name ="title" required ref={register}/>
                <label htmlFor="comments">Comments</label>
                <textarea name ="comments" rows={3} ref={register}></textarea>
                <label htmlFor="description">Description</label>
                <textarea name ="description" rows={3} ref={register}></textarea>
                <label htmlFor="image">Image</label>
                <input name ="image" ref={register}/>
                <label htmlFor="visitDate">Visited Date</label>
                <input name ="visitDate" type="date" required ref={register}/>
                <button disabled={Loading}>{Loading ? 'loading...' : 'Create Entry' }</button>
            </form>
        </div>
    )
}

export default LogEntryForm;
