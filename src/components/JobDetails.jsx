import React from 'react';  
import { useParams } from 'react-router-dom';
import {useState} from 'react';


function jobDetails({job, setDetails}) {
  return (
    <div className='w-full  border-1 border-gray-200 rounded-lg p-5'>
      <div className='parent flex justify-between items-start gap-5'>
         <div>
            <h1>{job.title}</h1>
             <p>{job.description}</p>
             <p><strong>Company:</strong> {job.company}</p>
             <button className='px-4 py-2 border-1 rounded-lg border-green-300 mt-3'>Apply</button>    
         </div>
         
          <button className='px-4 py-2 border-1 rounded-lg border-green-300' onClick={() => setDetails(false)}>Back</button>
      </div>    
     
    </div>
    
  );
}


export default jobDetails