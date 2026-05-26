import { useState } from 'react';

const jobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Flutterwave',
    location: 'Lagos',
    type: 'Full-time',
    salary: '350,000 - 500,000',
    description: 'We are looking for a passionate React developer to join our growing team.',
    posted: '2 days ago',
    logo: 'FW',
  },
  {
    id: 2,
    title: 'Product Designer',
    company: 'Paystack',
    location: 'Remote',
    type: 'Full-time',
    salary: '400,000 - 600,000',
    description: 'Create beautiful user experiences for millions of Nigerians.',
    posted: '1 day ago',
    logo: 'PS',
  },
  {
    id: 3,
    title: 'Backend Engineer',
    company: 'Kuda Bank',
    location: 'Abuja',
    type: 'Full-time',
    salary: '450,000 - 650,000',
    description: 'Build secure and scalable financial systems.',
    posted: '3 days ago',
    logo: 'KB',
  },
  {
    id: 4,
    title: 'Mobile App Developer',
    company: 'Opay',
    location: 'Lagos',
    type: 'Contract',
    salary: '300,000 - 450,000',
    description: 'Help us build the future of digital banking in Africa.',
    posted: '5 hours ago',
    logo: 'OP',
  },
];

function DashboardPage({ currentUser }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = jobs.filter((job) => {
    const searchText = searchTerm.toLowerCase();

    return (
      job.title.toLowerCase().includes(searchText) ||
      job.company.toLowerCase().includes(searchText) ||
      job.location.toLowerCase().includes(searchText)
    );
  });

  return (
    <main className="dashboard-page">
      <section className="dashboard-header">
        <div>
          <p className="tag">QuickHire</p>
          <h1>Welcome, {currentUser.name}</h1>
          <p>Your one-stop solution for quick and efficient hiring.</p>
        </div>
      </section>

      <section className="search-section">
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search jobs, companies, locations..."
        />
      </section>

      <section className="jobs-section">
        {filteredJobs.length === 0 ? (
          <p className="empty-message">No jobs found.</p>
        ) : (
          filteredJobs.map((job) => (
            <article className="job-card" key={job.id}>
              <div className="job-logo">{job.logo}</div>
              <div className="job-meta">
                <span>{job.location}</span>
                <span>{job.type}</span>
              </div>
              <h2>{job.title}</h2>
              <p className="company-name">{job.company}</p>
              <p>{job.description}</p>
              <div className="job-footer">
                <strong>N{job.salary}</strong>
                <span>{job.posted}</span>
              </div>
              <button className="primary-button">View Details</button>
            </article>
          ))
        )}
      </section>
    </main>
  );
}

export default DashboardPage;
