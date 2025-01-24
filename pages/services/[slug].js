// // import React from 'react';
// import servicesData from "../../data/servicesData"; // Import services data
// import servicesData from "../../serviceDataJson.json"; // Import services data from JSON



// // Get the static paths (slug) for each service
// export async function getStaticPaths() {
//   const paths = servicesData.map((service) => ({
//     params: { slug: service.slug }, // Using the slug for dynamic routing
//   }));
//   return { paths, fallback: false };
// }

// // Fetch the service data based on the slug
// export async function getStaticProps({ params }) {
//   const service = servicesData.find((s) => s.slug === params.slug); // Find the service by slug
//   return { props: { service } }; // Pass the data as a prop to the page component
// }

// const ServiceDetail = ({ service }) => {

//   return (
//     <div className="service-detail">
//       <h1>{service.title}</h1>
//       <img src={`/images/${service.detail.image}`} alt={service.title} />
//       <p>{service.detail.description}</p>

//       <h3>Features:</h3>
//       <ul>
//         {service.detail.features.map((feature, index) => (
//           <li key={index}>{feature}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ServiceDetail;
// import { useRouter } from 'next/router';
// import Head from "next/head";
// import PageBanner from "../../components/Common/PageBanner";
// import servicesData from '../../components/Services/servicesDataJson';
// // import services-details from '../../serviceDataJson.json';

// export async function getStaticPaths() {
//   const paths = servicesData.map((service) => ({
//     params: { slug: service.slug },  // Generating dynamic paths from JSON
//   }));

//   return { paths, fallback: false }; // No fallback, ensures 404 if not found
// }


// export async function getStaticProps({ params }) {
//   const service = servicesData.find((s) => s.slug === params.slug);

//   // Handle case if service not found
//   if (!service) {
//     return { notFound: true };
//   }

//   // Ensure the slug and other fields are correctly passed
//   return { props: { service } };
// }
// export default function ServiceDetails({ service }) {
//   const router = useRouter();
//   if (!service) {
//     // Fallback in case service is not found, this could be a 404 page or a redirect
//     return <div>Service not found</div>;
//   }
//   return (
//     <>
//       <Head>
//         <title>{service.title} - Service Details</title>
//       </Head>
//       <PageBanner title={service.title} content={service.detail.description} />

//       <section className="services-details-wrapper section-padding">
//         <div className="container">
//           <div className="col-lg-10 col-12 offset-lg-1">
//             <div className="services-contents">
//               <img src={`/img/${service.detail.image}`} alt={service.title} />

//               <p className="mt-4">
//                 <b>{service.detail.description}</b>
//               </p>

//               <div className="work-process-wrapper row fw500">
//                 {service.detail.features.map((feature, index) => (
//                   <div className="col-xl-4 col-md-6 text-center" key={index}>
//                     <div className="single-work-process">
//                       <div className="icon">{index + 1}</div>
//                       <div className="content">
//                         <h5>{feature.title}</h5>
//                         <p>{feature.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <ul>
//                 {service.detail.benefits.map((benefit, index) => (
//                   <li key={index}>
//                     <b>{benefit.title}:</b> {benefit.description}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// import Head from "next/head";
// import PageBanner from "../../components/Common/PageBanner";
// import servicesData from "../../components/Services/servicesDataJson";
// import servicesData from "../../components/Services/servicesDataJson"; // JSON file import
// import "../../styles/services-detail.css"; // Import the same CSS

// export async function getStaticPaths() {
//   const paths = servicesDataJson.map(service => ({
//     params: { slug: service.slug } // Use the slug from your data
//   }));

//   return {
//     paths,
//     fallback: false // Ensure paths are pre-rendered (false to return 404 for undefined paths)
//   };
// }

// export async function getStaticProps({ params }) {
//   const service = servicesDataJson.find(s => s.slug === params.slug);

//   if (!service) {
//     return {
//       notFound: true // Return 404 if service not found
//     };
//   }

//   return {
//     props: { service }, // Pass the service data to the page
//   };
// }

// const ServiceDetails = ({ service }) => {
//   return (
//     <>
//       <Head>
//         <title>{service.title} - Service Details</title>
//       </Head>
//       <PageBanner
//         title={service.title}
//         content={service.content}
//       />
//       <section className="services-details-wrapper section-padding">
//         <div className="container">
//           <div className="col-lg-10 col-12 offset-lg-1">
//             <div className="services-contents">
//               <img src={service.image} alt={service.title} />
//               <p className="mt-4"><b>{service.description}</b></p>
//               <div className="work-process-wrapper row fw500">
//                 {service.features.map((feature, index) => (
//                   <div className="col-xl-4 col-md-6 text-center" key={index}>
//                     <div className="single-work-process">
//                       <div className="icon">{index + 1}</div>
//                       <div className="content">
//                         <h5>{feature.title}</h5>
//                         <p>{feature.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <ul>
//                 {service.benefits.map((benefit, index) => (
//                   <li key={index}>
//                     <b>{benefit.title}: </b>{benefit.description}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ServiceDetails;
// [slug].js

// -----------------------------------------------Testing--------------------------------------
// export async function getStaticPaths() {
//   const paths = [
//     { params: { slug: 'ecommerce-store' } },
//     { params: { slug: 'web-development' } },
//     { params: { slug: 'mobile-app-development' } },
//     // Add more paths based on your data
//   ];

//   return {
//     paths,
//     fallback: false, // Show 404 for undefined paths
//   };
// }

// export async function getStaticProps({ params }) {
//   // Define your data directly in the file
//   const servicesData = [
//     {
//       id: "1",
//       title: "Automated Reports",
//       bannerImage: "/img/single-service.jpg",
//       content: "An Automated Report Is A Management Tool Used By Professionals To Create And Share Business Reports At A Specific Time Interval Without The Need To Update.",
//       slug: "web-development",
//       sections: [
//         { title: "Set a data loader", description: "The manufacturing industry needs continuous automation throughout processes." },
//         { title: "Reporting workflow", description: "Marketing is one of the functions that need regular & updated reports." }
//       ]
//     },
//     {
//       id: "2",
//       title: "Web Development",
//       bannerImage: "/img/web-development.jpg",
//       content: "A service to develop cutting-edge websites using modern technologies.",
//       slug: "ecommerce-store",
//       sections: [
//         { title: "Frontend Development", description: "Building user interfaces using React, Angular, or Vue." },
//         { title: "Backend Development", description: "Creating robust backend systems using Node.js, Python, or PHP." }
//       ]
//     },
//     {
//       id: "3",
//       title: "Mobile App Development",
//       bannerImage: "/img/mobile-app.jpg",
//       content: "Mobile apps for Android and iOS that ensure a great user experience.",
//       slug: "mobile-app-development",
//       sections: [
//         { title: "Native Apps", description: "Building high-performance native apps for iOS and Android." },
//         { title: "Cross-Platform Apps", description: "Developing apps that work across multiple platforms with a single codebase." }
//       ]
//     }
//   ];

//   // Find the service by slug
//   const service = servicesData.find(s => s.slug === params.slug);

//   if (!service) {
//     return {
//       notFound: true, // Return 404 if service not found
//     };
//   }

//   return {
//     props: { service },
//   };
// }

// export default function ServiceDetail({ service }) {
//   return (
//     <div className="services-details-wrapper">
//       <div className="container">
//         <div className="service-detail-content">
//           <h1>{service.title}</h1>
//           <img src={service.bannerImage} alt={service.title} />
//           <p>{service.content}</p>

//           <div className="service-sections">
//             {service.sections.map((section, index) => (
//               <div key={index} className="service-section">
//                 <h3>{section.title}</h3>
//                 <p>{section.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// -------------------------------------------------------------------------------------
import { useRouter } from "next/router";
import Head from "next/head";
import PageBanner from "../../components/Common/PageBanner"; // Assuming the PageBanner component exists

const serviceData = {
  "web-development": {
    "id": "1",
    "title": "Web Development",
    // "bannerImage": "/img/single-service.jpg",
    "bannerImage": "/img/services-images/web-development.png",
    "content": "An Automated Report Is A Management Tool Used By Professionals To Create And Share Business Reports At A Specific Time Interval Without The Need To Update.",
    "sections": [
      {
        "type": "paragraph",
        "content": <b>An automated report is a management tool used by professionals to create and share business reports at a specific time information each time. These updates are usually made in real-time with the help of automated reporting tools.</b>
      },
      {
        "type": "paragraph",
        "content": "Data, information, and insights are all around us. Before we even realize our business potentials and in our competitive market, there is always a new business plan to make, a new strategy to develop, a new report to generate - and they all take time. Since amounts of data are generated by every second, businesses are always on the lookout for the best possible online data analysis tools make their processes easier, faster, and more effective."
      },
      {
        "type": "paragraph",
        "content": "Productivity has become the epitome of successful business processes. While every manager seeks how to increase productivity and decrease business costs, some invaluable processes can push towards sustainable business development - automated reporting and systems are the answer you've been looking for."
      },
      {
        "type": "paragraph",
        "content": "That said, in this post, we will explain what is an automated report and its benefits, the ins and outs of the automation process, and finish with examples from the real business world. After reading this article, you will be equipped to create your own automation practice and upscale your reports with the help of modern online reporting software."
      },
      {
        "type": "paragraph",
        "content": <b>The process of making our automated reporting work</b>
      },
      {
        "type": "paragraph",
        "content": "The manufacturing industry needs continuous automation throughout processes, and each part of the company needs to work flawlessly in order to avoid potential business issues and cost increment."
      },
      {
        "type": "paragraph",
        "content": <b>The process of making our automated reporting work</b>
      },
      {
        "type": "paragraph",
        "content": "Now that we’re up to speed with the concept of automated reporting, let’s look at the benefits. First of all, when asking yourself the question, “Why should I use report automation?” the short answer should be, “why not?”"
      },
      {
        "type": "bullet-points",
        "points": [
          {
            "title": "Time & cost savings:",
            "content": "If you automate reports, you will save colossal amounts of time and money on manually tracking, updating, and adding data to your reports. Naturally, time and money are correlated, so by automating reports, you will reap the rewards of valuable data-driven insights while empowering your team to place their efforts into more creative or strategic activities."
          },
          {
            "title": "Accessibility, transparency & productivity:",
            "content": "By serving up automated insights from one central location, automatic reports will give everyone in the business the tools to perform better in their individual roles while benefiting from robust, reliable, and accurate."
          },
          {
            "title": "Real-time decision-making:",
            "content": "When using manual reporting tools or processes, it’s easy to get bogged down. In addition to the more cumbersome reporting processes that return data that is harder to understand, automated reports provide access to accurate data presented in the form of visuals."
          }
        ]
      },
      {
        "type": "work-process",
        "steps": [
          {
            "step": 1,
            "title": "Set a data loader",
            "description": "The manufacturing industry needs continuous automation throughout processes"
          },
          {
            "step": 2,
            "title": "Reporting workflow",
            "description": "Marketing is one of the functions that need regular & updated reports analysis and workflow"
          },
          {
            "step": 3,
            "title": "Update information",
            "description": "By sending this report weekly or monthly, without the need to update information manually"
          }
        ]
      },
    ]
  },
  "web-maintenance": {
    "id": "2",
    "title": "Web Maintenance",
    // "bannerImage": "/img/single-service.jpg",
    "bannerImage": "/img/services-images/web-maintain.png",
    "content": "An Automated Report Is A Management Tool Used By Professionals To Create And Share Business Reports At A Specific Time Interval Without The Need To Update.",
    "sections": [
      {
        "type": "paragraph",
        "content": <b>An automated report is a management tool used by professionals to create and share business reports at a specific time information each time. These updates are usually made in real-time with the help of automated reporting tools.</b>
      },
      {
        "type": "paragraph",
        "content": "Data, information, and insights are all around us. Before we even realize our business potentials and in our competitive market, there is always a new business plan to make, a new strategy to develop, a new report to generate - and they all take time. Since amounts of data are generated by every second, businesses are always on the lookout for the best possible online data analysis tools make their processes easier, faster, and more effective."
      },
      {
        "type": "paragraph",
        "content": "Productivity has become the epitome of successful business processes. While every manager seeks how to increase productivity and decrease business costs, some invaluable processes can push towards sustainable business development - automated reporting and systems are the answer you've been looking for."
      },
      {
        "type": "paragraph",
        "content": "That said, in this post, we will explain what is an automated report and its benefits, the ins and outs of the automation process, and finish with examples from the real business world. After reading this article, you will be equipped to create your own automation practice and upscale your reports with the help of modern online reporting software."
      },
      {
        "type": "paragraph",
        "content": <b>The process of making our automated reporting work</b>
      },
      {
        "type": "paragraph",
        "content": "The manufacturing industry needs continuous automation throughout processes, and each part of the company needs to work flawlessly in order to avoid potential business issues and cost increment."
      },
      {
        "type": "paragraph",
        "content": <b>The process of making our automated reporting work</b>
      },
      {
        "type": "paragraph",
        "content": "Now that we’re up to speed with the concept of automated reporting, let’s look at the benefits. First of all, when asking yourself the question, “Why should I use report automation?” the short answer should be, “why not?”"
      },
      {
        "type": "bullet-points",
        "points": [
          {
            "title": "Time & cost savings:",
            "content": "If you automate reports, you will save colossal amounts of time and money on manually tracking, updating, and adding data to your reports. Naturally, time and money are correlated, so by automating reports, you will reap the rewards of valuable data-driven insights while empowering your team to place their efforts into more creative or strategic activities."
          },
          {
            "title": "Accessibility, transparency & productivity:",
            "content": "By serving up automated insights from one central location, automatic reports will give everyone in the business the tools to perform better in their individual roles while benefiting from robust, reliable, and accurate."
          },
          {
            "title": "Real-time decision-making:",
            "content": "When using manual reporting tools or processes, it’s easy to get bogged down. In addition to the more cumbersome reporting processes that return data that is harder to understand, automated reports provide access to accurate data presented in the form of visuals."
          }
        ]
      },
      {
        "type": "work-process",
        "steps": [
          {
            "step": 1,
            "title": "Set a data loader",
            "description": "The manufacturing industry needs continuous automation throughout processes"
          },
          {
            "step": 2,
            "title": "Reporting workflow",
            "description": "Marketing is one of the functions that need regular & updated reports analysis and workflow"
          },
          {
            "step": 3,
            "title": "Update information",
            "description": "By sending this report weekly or monthly, without the need to update information manually"
          }
        ]
      },
    ]
  },
  "ecommerce-store": {
    "id": "3",
    "title": "Ecommerce Store",
    // "bannerImage": "/img/single-service.jpg",
    "bannerImage": "/img/services-images/ecommerce-store.png",
    "content": "An Automated Report Is A Management Tool Used By Professionals To Create And Share Business Reports At A Specific Time Interval Without The Need To Update.",
    "sections": [
      {
        "type": "paragraph",
        "content": <b>An automated report is a management tool used by professionals to create and share business reports at a specific time information each time. These updates are usually made in real-time with the help of automated reporting tools.</b>
      },
      {
        "type": "paragraph",
        "content": "Data, information, and insights are all around us. Before we even realize our business potentials and in our competitive market, there is always a new business plan to make, a new strategy to develop, a new report to generate - and they all take time. Since amounts of data are generated by every second, businesses are always on the lookout for the best possible online data analysis tools make their processes easier, faster, and more effective."
      },
      {
        "type": "paragraph",
        "content": "Productivity has become the epitome of successful business processes. While every manager seeks how to increase productivity and decrease business costs, some invaluable processes can push towards sustainable business development - automated reporting and systems are the answer you've been looking for."
      },
      {
        "type": "paragraph",
        "content": "That said, in this post, we will explain what is an automated report and its benefits, the ins and outs of the automation process, and finish with examples from the real business world. After reading this article, you will be equipped to create your own automation practice and upscale your reports with the help of modern online reporting software."
      },
      {
        "type": "paragraph",
        "content": <b>The process of making our automated reporting work</b>
      },
      {
        "type": "paragraph",
        "content": "The manufacturing industry needs continuous automation throughout processes, and each part of the company needs to work flawlessly in order to avoid potential business issues and cost increment."
      },
      {
        "type": "paragraph",
        "content": <b>The process of making our automated reporting work</b>
      },
      {
        "type": "paragraph",
        "content": "Now that we’re up to speed with the concept of automated reporting, let’s look at the benefits. First of all, when asking yourself the question, “Why should I use report automation?” the short answer should be, “why not?”"
      },
      {
        "type": "bullet-points",
        "points": [
          {
            "title": "Time & cost savings:",
            "content": "If you automate reports, you will save colossal amounts of time and money on manually tracking, updating, and adding data to your reports. Naturally, time and money are correlated, so by automating reports, you will reap the rewards of valuable data-driven insights while empowering your team to place their efforts into more creative or strategic activities."
          },
          {
            "title": "Accessibility, transparency & productivity:",
            "content": "By serving up automated insights from one central location, automatic reports will give everyone in the business the tools to perform better in their individual roles while benefiting from robust, reliable, and accurate."
          },
          {
            "title": "Real-time decision-making:",
            "content": "When using manual reporting tools or processes, it’s easy to get bogged down. In addition to the more cumbersome reporting processes that return data that is harder to understand, automated reports provide access to accurate data presented in the form of visuals."
          }
        ]
      },
      {
        "type": "work-process",
        "steps": [
          {
            "step": 1,
            "title": "Set a data loader",
            "description": "The manufacturing industry needs continuous automation throughout processes"
          },
          {
            "step": 2,
            "title": "Reporting workflow",
            "description": "Marketing is one of the functions that need regular & updated reports analysis and workflow"
          },
          {
            "step": 3,
            "title": "Update information",
            "description": "By sending this report weekly or monthly, without the need to update information manually"
          }
        ]
      },
    ]
  },
  "api-integration": {
    "id": "4",
    "title": "Api Integeration",
    // "bannerImage": "/img/single-service.jpg",
    "bannerImage": "/img/services-images/api.png",
    "content": "An Automated Report Is A Management Tool Used By Professionals To Create And Share Business Reports At A Specific Time Interval Without The Need To Update.",
    "sections": [
      {
        "type": "paragraph",
        "content": <b>An automated report is a management tool used by professionals to create and share business reports at a specific time information each time. These updates are usually made in real-time with the help of automated reporting tools.</b>
      },
      {
        "type": "paragraph",
        "content": "Data, information, and insights are all around us. Before we even realize our business potentials and in our competitive market, there is always a new business plan to make, a new strategy to develop, a new report to generate - and they all take time. Since amounts of data are generated by every second, businesses are always on the lookout for the best possible online data analysis tools make their processes easier, faster, and more effective."
      },
      {
        "type": "paragraph",
        "content": "Productivity has become the epitome of successful business processes. While every manager seeks how to increase productivity and decrease business costs, some invaluable processes can push towards sustainable business development - automated reporting and systems are the answer you've been looking for."
      },
      {
        "type": "paragraph",
        "content": "That said, in this post, we will explain what is an automated report and its benefits, the ins and outs of the automation process, and finish with examples from the real business world. After reading this article, you will be equipped to create your own automation practice and upscale your reports with the help of modern online reporting software."
      },
      {
        "type": "paragraph",
        "content": <b>The process of making our automated reporting work</b>
      },
      {
        "type": "paragraph",
        "content": "The manufacturing industry needs continuous automation throughout processes, and each part of the company needs to work flawlessly in order to avoid potential business issues and cost increment."
      },
      {
        "type": "paragraph",
        "content": <b>The process of making our automated reporting work</b>
      },
      {
        "type": "paragraph",
        "content": "Now that we’re up to speed with the concept of automated reporting, let’s look at the benefits. First of all, when asking yourself the question, “Why should I use report automation?” the short answer should be, “why not?”"
      },
      {
        "type": "bullet-points",
        "points": [
          {
            "title": "Time & cost savings:",
            "content": "If you automate reports, you will save colossal amounts of time and money on manually tracking, updating, and adding data to your reports. Naturally, time and money are correlated, so by automating reports, you will reap the rewards of valuable data-driven insights while empowering your team to place their efforts into more creative or strategic activities."
          },
          {
            "title": "Accessibility, transparency & productivity:",
            "content": "By serving up automated insights from one central location, automatic reports will give everyone in the business the tools to perform better in their individual roles while benefiting from robust, reliable, and accurate."
          },
          {
            "title": "Real-time decision-making:",
            "content": "When using manual reporting tools or processes, it’s easy to get bogged down. In addition to the more cumbersome reporting processes that return data that is harder to understand, automated reports provide access to accurate data presented in the form of visuals."
          }
        ]
      },
      {
        "type": "work-process",
        "steps": [
          {
            "step": 1,
            "title": "Set a data loader",
            "description": "The manufacturing industry needs continuous automation throughout processes"
          },
          {
            "step": 2,
            "title": "Reporting workflow",
            "description": "Marketing is one of the functions that need regular & updated reports analysis and workflow"
          },
          {
            "step": 3,
            "title": "Update information",
            "description": "By sending this report weekly or monthly, without the need to update information manually"
          }
        ]
      },
    ]
  },
  "landing-pages-building": {
    "id": "5",
    "title": "Landing Pages Building",
    // "bannerImage": "/img/single-service.jpg",
    "bannerImage": "/img/services-images/landing-pages.png",
    "content": "An Automated Report Is A Management Tool Used By Professionals To Create And Share Business Reports At A Specific Time Interval Without The Need To Update.",
    "sections": [
      {
        "type": "paragraph",
        "content": <b>An automated report is a management tool used by professionals to create and share business reports at a specific time information each time. These updates are usually made in real-time with the help of automated reporting tools.</b>
      },
      {
        "type": "paragraph",
        "content": "Data, information, and insights are all around us. Before we even realize our business potentials and in our competitive market, there is always a new business plan to make, a new strategy to develop, a new report to generate - and they all take time. Since amounts of data are generated by every second, businesses are always on the lookout for the best possible online data analysis tools make their processes easier, faster, and more effective."
      },
      {
        "type": "paragraph",
        "content": "Productivity has become the epitome of successful business processes. While every manager seeks how to increase productivity and decrease business costs, some invaluable processes can push towards sustainable business development - automated reporting and systems are the answer you've been looking for."
      },
      {
        "type": "paragraph",
        "content": "That said, in this post, we will explain what is an automated report and its benefits, the ins and outs of the automation process, and finish with examples from the real business world. After reading this article, you will be equipped to create your own automation practice and upscale your reports with the help of modern online reporting software."
      },
      {
        "type": "paragraph",
        "content": <b>The process of making our automated reporting work</b>
      },
      {
        "type": "paragraph",
        "content": "The manufacturing industry needs continuous automation throughout processes, and each part of the company needs to work flawlessly in order to avoid potential business issues and cost increment."
      },
      {
        "type": "paragraph",
        "content": <b>The process of making our automated reporting work</b>
      },
      {
        "type": "paragraph",
        "content": "Now that we’re up to speed with the concept of automated reporting, let’s look at the benefits. First of all, when asking yourself the question, “Why should I use report automation?” the short answer should be, “why not?”"
      },
      {
        "type": "bullet-points",
        "points": [
          {
            "title": "Time & cost savings:",
            "content": "If you automate reports, you will save colossal amounts of time and money on manually tracking, updating, and adding data to your reports. Naturally, time and money are correlated, so by automating reports, you will reap the rewards of valuable data-driven insights while empowering your team to place their efforts into more creative or strategic activities."
          },
          {
            "title": "Accessibility, transparency & productivity:",
            "content": "By serving up automated insights from one central location, automatic reports will give everyone in the business the tools to perform better in their individual roles while benefiting from robust, reliable, and accurate."
          },
          {
            "title": "Real-time decision-making:",
            "content": "When using manual reporting tools or processes, it’s easy to get bogged down. In addition to the more cumbersome reporting processes that return data that is harder to understand, automated reports provide access to accurate data presented in the form of visuals."
          }
        ]
      },
      {
        "type": "work-process",
        "steps": [
          {
            "step": 1,
            "title": "Set a data loader",
            "description": "The manufacturing industry needs continuous automation throughout processes"
          },
          {
            "step": 2,
            "title": "Reporting workflow",
            "description": "Marketing is one of the functions that need regular & updated reports analysis and workflow"
          },
          {
            "step": 3,
            "title": "Update information",
            "description": "By sending this report weekly or monthly, without the need to update information manually"
          }
        ]
      },
    ]
  },
  "performance-optimization": { "id": "6",
  "title": "Performance Optimization",
  // "bannerImage": "/img/single-service.jpg",
  "bannerImage": "/img/services-images/performance.png",
  "content": "An Automated Report Is A Management Tool Used By Professionals To Create And Share Business Reports At A Specific Time Interval Without The Need To Update.",
  "sections": [
    {
      "type": "paragraph",
      "content": <b>An automated report is a management tool used by professionals to create and share business reports at a specific time information each time. These updates are usually made in real-time with the help of automated reporting tools.</b>
    },
    {
      "type": "paragraph",
      "content": "Data, information, and insights are all around us. Before we even realize our business potentials and in our competitive market, there is always a new business plan to make, a new strategy to develop, a new report to generate - and they all take time. Since amounts of data are generated by every second, businesses are always on the lookout for the best possible online data analysis tools make their processes easier, faster, and more effective."
    },
    {
      "type": "paragraph",
      "content": "Productivity has become the epitome of successful business processes. While every manager seeks how to increase productivity and decrease business costs, some invaluable processes can push towards sustainable business development - automated reporting and systems are the answer you've been looking for."
    },
    {
      "type": "paragraph",
      "content": "That said, in this post, we will explain what is an automated report and its benefits, the ins and outs of the automation process, and finish with examples from the real business world. After reading this article, you will be equipped to create your own automation practice and upscale your reports with the help of modern online reporting software."
    },
    {
      "type": "paragraph",
      "content": <b>The process of making our automated reporting work</b>
    },
    {
      "type": "paragraph",
      "content": "The manufacturing industry needs continuous automation throughout processes, and each part of the company needs to work flawlessly in order to avoid potential business issues and cost increment."
    },
    
    {
      "type": "paragraph",
      "content": "Now that we’re up to speed with the concept of automated reporting, let’s look at the benefits. First of all, when asking yourself the question, “Why should I use report automation?” the short answer should be, “why not?”"
    },
    {
      "type": "bullet-points",
      "points": [
        {
          "title": "Time & cost savings:",
          "content": "If you automate reports, you will save colossal amounts of time and money on manually tracking, updating, and adding data to your reports. Naturally, time and money are correlated, so by automating reports, you will reap the rewards of valuable data-driven insights while empowering your team to place their efforts into more creative or strategic activities."
        },
        {
          "title": "Accessibility, transparency & productivity:",
          "content": "By serving up automated insights from one central location, automatic reports will give everyone in the business the tools to perform better in their individual roles while benefiting from robust, reliable, and accurate."
        },
        {
          "title": "Real-time decision-making:",
          "content": "When using manual reporting tools or processes, it’s easy to get bogged down. In addition to the more cumbersome reporting processes that return data that is harder to understand, automated reports provide access to accurate data presented in the form of visuals."
        }
      ]
    },
    {
      "type": "work-process",
      "steps": [
        {
          "step": 1,
          "title": "Set a data loader",
          "description": "The manufacturing industry needs continuous automation throughout processes"
        },
        {
          "step": 2,
          "title": "Reporting workflow",
          "description": "Marketing is one of the functions that need regular & updated reports analysis and workflow"
        },
        {
          "step": 3,
          "title": "Update information",
          "description": "By sending this report weekly or monthly, without the need to update information manually"
        }
      ]
    },
  ]}
};

export default function ServiceDetail() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug || !serviceData[slug]) {
    return <h1>Service not found</h1>;
  }

  const service = serviceData[slug];

  return (
    <>
      <Head>
        <title>{service.title} - Service Details</title>
      </Head>
      <PageBanner title={service.title} content={service.content} />

      <section className="services-details-wrapper section-padding">
        <div className="container">
          <div className="col-lg-10 col-12 offset-lg-1">
            <div className="services-contents">
              <img
                src={service.bannerImage}
                alt={service.title}
                style={{ maxWidth: "100%", height: "auto" }}
              />

              {/* Render sections with specific order */}
              {service.sections.map((section, index) => {
                // Render first paragraph before work process
                if (index === 0 && section.type === "paragraph") {
                  return (
                    <p key={index} className="mt-4">
                      {section.content}
                    </p>
                  );
                }
                return null;
              })}

              {/* Work Process Section */}
              {service.sections.map((section, index) => {
                if (section.type === "work-process") {
                  return (
                    <div key={index} className="work-process-wrapper row fw500">
                      {/* --------------line-image-work-process---------- */}
                      <div className="wave-line d-none d-xl-block">
                        <img src="/img/wave.png" alt="Work Process" />
                      </div>
                      {/* --------------------------------------------------- */}

                      {section.steps.map((step) => (
                        <div key={step.step} className="col-xl-4 col-md-6 text-center mt-xl-5">
                          <div className="single-work-process">
                            <div className="icon">{step.step}</div>
                            <div className="content">
                              <h5>{step.title}</h5>
                              <p>{step.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                }
                return null;
              })}

              {/* Render remaining paragraphs */}
              {service.sections.map((section, index) => {
                if (index !== 0 && section.type === "paragraph") {
                  return (
                    <p key={index} className="mt-4">
                      {section.content}
                    </p>
                  );
                }
                return null;
              })}

              {/* Render bullet points */}
              {service.sections.map((section, index) => {
                if (section.type === "bullet-points") {
                  return (
                    <div key={index} className="bullet-points">
                      <ul>
                        {section.points.map((point, pointIndex) => (
                          <li key={pointIndex}>
                            <p>
                              <b>{point.title}</b> {point.content}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </section>



      {/* Wave image section */}
      {/* <div className="wave-line d-none d-xl-block">
        <img src="/img/wave.png" alt="Wave" />
      </div> */}
    </>
  );
}

