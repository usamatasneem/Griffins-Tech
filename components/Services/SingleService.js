import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function SingleService({ service }) {
  if (!service?.slug) {
    return <a href="/404">View Detail</a>; // Handle case where slug is missing
  }
  console.log("Single Service Data:", service);  // Log each service data
  return (
    <div className="service-box-item">
      <div className="icon">
        <img src={`/img/icons/${service.icon}`} alt="" />
      </div>
      <div className="content">
        <h4>{service.title}</h4>
        <p>{service.content}</p>
        {/* <Link href={`/services/${service.slug}`}></Link> */}
        <Link href={`/services/${service.slug}`} passHref>
          {/* <a>
            View Details <BsArrowRight />
          </a> */}
            <a onClick={() => console.log("Clicked slug:", service.slug)}>View Detail</a> 
        </Link>
        
      </div>
    </div>
  );
}
