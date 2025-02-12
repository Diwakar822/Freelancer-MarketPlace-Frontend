import React from 'react';

const JobCard = ({ job }) => {
    return (
        <div>
            <div className='flex flex-wrap'>
<div className="bg-white rounded-lg shadow-lg p-8">
<h3 className="text-lg font-semibold">{job.title}</h3>
<p className="text-sm text-gray-600">{job.description}</p>
<p className="text-lg font-semibold text-gray-800">Budget: ${job.budget}</p>

</div>
</div> 
        </div>
    );
};

export default JobCard;