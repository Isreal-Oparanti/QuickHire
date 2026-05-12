import React from 'react';
import { useState } from 'react';
import { Router } from 'react-router';
import JobDetails from './JobDetails';



function JobCard({ job, onClick }) {
  const [showDetails, setShowDetails] = useState(false);
  const displayDetails = () => {
    setShowDetails(true);
  }
  return (
    <>
    {showDetails ? <JobDetails job={job} setDetails={setShowDetails} onClose={() => setShowDetails(false)} /> : 
      
      <div
      className="job-card bg-white border border-green-300 rounded-xl p-6 cursor-pointer" >
      <div className="text-4xl mb-3">{job.logo}</div>

      <h3 className="font-semibold text-xl mb-1">{job.title}</h3>
      <p className="text-gray-700">{job.company}</p>

      <p className="text-green-600 font-semibold mt-4">{job.salary}</p>

      <button className="mt-5 w-full bg-green-600 text-white py-3 rounded-lg"
         onClick={displayDetails}
      >
        View Details
      </button>
    </div> }
    
    
    </>
  );
}


export default JobCard