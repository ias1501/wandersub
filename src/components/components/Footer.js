


// // Create the footer element
// const footer = document.createElement('footer');
// footer.classList.add('bg-white');

// // Create the inner div element
// const innerDiv = document.createElement('div');
// innerDiv.classList.add('mx-auto', 'w-full', 'max-w-screen-xl', 'p-4', 'py-6', 'lg:py-8');

// // Create the md:flex and md:justify-between div
// const mdFlexDiv = document.createElement('div');
// mdFlexDiv.classList.add('md:flex', 'md:justify-between');

// // Create the first div for the logo
// const logoDiv = document.createElement('div');
// logoDiv.classList.add('mb-6', 'md:mb-0');

// const logoLink = document.createElement('a');
// logoLink.href = 'https://flowbite.com';
// logoLink.classList.add('flex', 'items-center');

// const logoImage = document.createElement('img');
// logoImage.src = '/logo.jpg';
// logoImage.classList.add('h-8', 'mr-3');
// logoImage.alt = 'FlowBite Logo';

// const logoText = document.createElement('span');
// logoText.classList.add('self-center', 'text-2xl', 'font-semibold', 'whitespace-nowrap', 'dark:text-Black');
// logoText.textContent = 'Wandersub';

// logoLink.appendChild(logoImage);
// logoLink.appendChild(logoText);
// logoDiv.appendChild(logoLink);

// // Create the second div for the links
// const linksDiv = document.createElement('div');
// linksDiv.classList.add('grid', 'grid-cols-2', 'gap-8', 'sm:gap-6', 'sm:grid-cols-3');

// // Define an array of link categories
// const linkCategories = [
//     {
//         title: 'Resources',
//         links: [
//             { text: 'Flowbite', url: 'https://flowbite.com' },
//             { text: 'Tailwind CSS', url: 'https://tailwindcss.com' }
//         ]
//     },
//     {
//         title: 'Follow us',
//         links: [
//             { text: 'Github', url: 'https://github.com/themesberg/flowbite' },
//             { text: 'Discord', url: 'https://discord.gg/4eeurUVvTy' }
//         ]
//     },
//     {
//         title: 'Legal',
//         links: [
//             { text: 'Privacy Policy', url: '#' },
//             { text: 'Terms & Conditions', url: '#' }
//         ]
//     }
// ];

// // Iterate through the link categories and create the corresponding HTML elements
// linkCategories.forEach(category => {
//     const categoryHeading = document.createElement('h2');
//     categoryHeading.classList.add('mb-6', 'text-sm', 'font-semibold', 'text-gray-900', 'uppercase', 'dark:text-black');
//     categoryHeading.textContent = category.title;

//     const linkList = document.createElement('ul');
//     linkList.classList.add('text-gray-500', 'dark:text-gray-600', 'font-medium');

//     category.links.forEach(linkItem => {
//         const listItem = document.createElement('li');
//         listItem.classList.add('mb-4');

//         const link = document.createElement('a');
//         link.href = linkItem.url;
//         link.classList.add('hover:underline');
//         link.textContent = linkItem.text;

//         listItem.appendChild(link);
//         linkList.appendChild(listItem);
//     });

//     const categoryDiv = document.createElement('div');
//     categoryDiv.appendChild(categoryHeading);
//     categoryDiv.appendChild(linkList);
//     linksDiv.appendChild(categoryDiv);
// });

// // Create the horizontal rule
// const hr = document.createElement('hr');
// hr.classList.add('my-6', 'border-gray-800', 'sm:mx-auto', 'dark:border-gray-700', 'lg:my-8');

// // Create the bottom section with copyright and social media links
// const bottomDiv = document.createElement('div');
// bottomDiv.classList.add('sm:flex', 'sm:items-center', 'sm:justify-between');

// const copyrightSpan = document.createElement('span');
// copyrightSpan.classList.add('text-sm', 'text-gray-500', 'sm:text-center', 'dark:text-gray-400');
// copyrightSpan.innerHTML = '&copy; 2023 <a href="https://flowbite.com/" class="hover:underline">WanderSub™</a>. All Rights Reserved.';

// const socialMediaDiv = document.createElement('div');
// socialMediaDiv.classList.add('flex', 'mt-4', 'space-x-5', 'sm:justify-center', 'sm:mt-0');

// const socialMediaLinks = [
//     { icon: 'facebook', url: '#' },
//     { icon: 'discord', url: '#' },
//     { icon: 'twitter', url: '#' },
//     { icon: 'github', url: '#' },
//     { icon: 'dribbble', url: '#' }
// ];

// socialMediaLinks.forEach(linkItem => {
//     const link = document.createElement('a');
//     link.href = linkItem.url;
//     link.classList.add('text-gray-500', 'hover:text-gray-900', 'dark:hover:text-white');

//     const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//     svg.classList.add('w-4', 'h-4');
//     svg.setAttribute('aria-hidden', 'true');
//     svg.setAttribute('fill', 'currentColor');
//     svg.setAttribute('viewBox', '0 0 20 20');

//     // Define SVG paths for social media icons (You can replace with actual SVG paths)
//     const svgPaths = {
//         facebook: '<path d="..."></path>',
//         discord: '<path d="..."></path>',
//         twitter: '<path d="..."></path>',
//         github: '<path d="..."></path>',
//         dribbble: '<path d="..."></path>',
//     };

//     svg.innerHTML = svgPaths[linkItem.icon] || '';

//     link.appendChild(svg);
//     socialMediaDiv.appendChild(link);
// });
// {socialMediaLinks.map((linkItem, index) => (
//   <a key={index} href={linkItem.url} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
//       {linkItem.icon}
//       <span className="sr-only">Social Media</span>
//   </a>
// ))}

// bottomDiv.appendChild(copyrightSpan);
// bottomDiv.appendChild(socialMediaDiv);

// // Assemble the footer structure
// mdFlexDiv.appendChild(logoDiv);
// mdFlexDiv.appendChild(linksDiv);

// innerDiv.appendChild(mdFlexDiv);
// innerDiv.appendChild(hr);
// innerDiv.appendChild(bottomDiv);

// footer.appendChild(innerDiv);

// // Append the footer to the document body
// document.body.appendChild(footer);


// export const footerElement = footer;


import React from 'react';
import { FaFacebook, FaDiscord, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';
import "./footer.css"
const Footer = () => {
  const socialMediaLinks = [
    { icon: <FaFacebook />, url: '#' },
    { icon: <FaDiscord />, url: '#' },
    { icon: <FaTwitter />, url: '#' },
    { icon: <FaGithub />, url: '#' },
    { icon: <FaDribbble />, url: '#' }
  ];

  return (
    <footer className="bg-white">
       <div className="water-ripple">
      
       </div>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center text-black text-2xl font-semibold">
              <img src="/logo.jpg" className="h-8 mr-3" alt="FlowBite Logo" />
              Wander<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-blue-400">Sub</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-800 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">Team</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">Services</a>
                </li>
               
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-Black">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-800 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">Terms and Services</a>
                </li>
              </ul>
            </div>
            <div>
              {/* Add content for the second column */}
            </div>
            <div>
              {/* Add content for the third column */}
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-800">
            © 2023 <a href="https://flowbite.com/" className="hover:underline">WanderSub™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            {socialMediaLinks.map((linkItem, index) => (
              <a key={index} href={linkItem.url} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                {linkItem.icon}
                <span className="sr-only">Social Media</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
