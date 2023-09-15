import createClient from 'src/lib/supabase-server';

// import React from 'react'
// import { redirect } from 'next/navigation';

// const Dashboard = async() => {

//   const supabase = createClient();

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (!user) {
//     redirect('/');
//   }
//   return (
//     <div>Dashboard</div>
//   )
// }

// export default Dashboard




import React from 'react';
import "./dashboard.css";
import Sidebar from '../../components/components/sidebar';

// import Linechart from '@/components/parameters/Linechart';


//     <div class="sidebar">
//   <div class="brand">
//     <p>W<span>anderSub</span></p>
//   </div>
//   <ul class="nav-list">
//     <li class="nav-item">
//       <a href="#">
//         <span class="nav-item__icon">
//         <i class = "icon icon ion-happy-outline"></i>
//         </span>
//         <span class="nav-item__text">
//           All Paremters
//         </span>
//       </a>
//     </li>
//     <li class="nav-item">
//       <a href="#">
//         <span class="nav-item__icon">
//           <ion-icon name="chatbox-outline"></ion-icon>
//         </span>
//         <span class="nav-item__text">
//           pH
//         </span>
//       </a>
//     </li>
//     <li class="nav-item">
//       <a href="#">
//         <span class="nav-item__icon">
//           <ion-icon name="people-outline"></ion-icon>
//         </span>
//         <span class="nav-item__text">
//            TDS
//         </span>
//       </a>
//     </li>
//     <li class="nav-item">
//       <a href="#">
//         <span class="nav-item__icon">
//           <ion-icon name="person-outline"></ion-icon>
//         </span>
//         <span class="nav-item__text">
//            Turbidity
//         </span>
//       </a>
//     </li>
//     <li class="nav-item">
//       <a href="#">
//         <span class="nav-item__icon">
//           <ion-icon name="person-outline"></ion-icon>
//         </span>
//         <span class="nav-item__text">
//            Temperature
//         </span>
//       </a>
//     </li>
//     <li class="nav-item">
//       <a href="#">
//         <span class="nav-item__icon">
//           <ion-icon name="person-outline"></ion-icon>
//         </span>
//         <span class="nav-item__text">
//            Settings
//         </span>
//       </a>
//     </li>
//   </ul>
//   <ul class="nav-list">
//     <li class="nav-item">
//       <a href="#">
//         <span class="nav-item__icon avatar">
          
//         </span>
//         <span class="nav-item__text">
//             Isha Shah
//         </span>
//       </a>
//     </li>
//     <li class="nav-item">
//       <a href="#">
//         <span class="nav-item__icon logout">
//           <ion-icon name="log-out-outline"></ion-icon>
//         </span>
//         <span class="nav-item__text">
//            Logout
//         </span>
//       </a>
//     </li>
//   </ul>
// </div>

const Dashboard = async(params) => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

 
  // if(params.ph){
  //   <Ph />
  // }
  return (
    <div className="flex-row lg:flex">
      <Sidebar/>
      <div className="container mx-auto mt-4 lg:mt-12">
  <div className="p-4 mx-2 shadow-sm">
    <h1 className="text-3xl font-semibold text-center mb-4 text-gray-800">
    <h1 className="mb-6 text-3xl font-bold sm:text-5xl md:text-6xl">
                Wander<span className="font-black text-blue-400">Sub</span>
              </h1> Analytics
    </h1>
    <p className="text-gray-600 text-lg">
      Here you can access all the analytics data of the ROV. In the sidebar,
      you can navigate to specific sections.
    </p>
    <ul className="list-disc pl-6 mt-2 text-gray-600 text-lg">
      <li>
        <strong className="text-black">All Records:</strong> View real-time
        records of sensor readings and battery values.
      </li>
      <li>
        <strong className="text-black">Individual Parameters:</strong> Explore
        specific parameters, including sensor value tables, graphs, and
        suggestions.
      </li>
      <li>
        <strong className="text-black">Mapping:</strong> Visualize the
        accelerometer values of the WanderSub, along with a table of gyroscope
        values.
      </li>
    </ul>
  </div>
</div>

    </div>
  );
}
 

export default Dashboard