import { useState } from 'react';
import Link from 'next/link';

const testData = [
  {
    id: "1",
    title: "Test Service 1",
    bannerImage: "/img/single-service.jpg",
    content: "This is a test service.",
    slug: "test-service-1"
  },
  {
    id: "2",
    title: "Test Service 2",
    bannerImage: "/img/single-service.jpg",
    content: "This is another test service.",
    slug: "test-service-2"
  }
];

const TestPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleClick = (slug) => {
    const service = testData.find((service) => service.slug === slug);
    setSelectedService(service);
  };

  return (
    <div>
      <h1>Test Page</h1>

      {/* Render the services list with buttons */}
      <ul>
        {testData.map((service) => (
          <li key={service.id}>
            <button onClick={() => handleClick(service.slug)}>
              View {service.title}
            </button>
          </li>
        ))}
      </ul>

      {/* Display the selected service details */}
      {selectedService && (
        <div>
          <h2>{selectedService.title}</h2>
          <p>{selectedService.content}</p>
          <img src={selectedService.bannerImage} alt={selectedService.title} />
        </div>
      )}

      {/* Link to the detailed page */}
      {selectedService && (
        <Link href={`/services/${selectedService.slug}`}>
          <a>Go to Details</a>
        </Link>
      )}
    </div>
  );
};

export default TestPage;
