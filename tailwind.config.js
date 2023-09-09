const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        // 'hero-pattern': "url('/img/hero-pattern.svg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
        'sea1': 'url("https://wallpapershome.com/images/pages/pic_h/386.jpg")',
        'sea3':'url("https://free4kwallpapers.com/uploads/wallpaper/ocean-fish-wallpaper-1280x720-wallpaper.jpg")',
        'sea2':'url("https://assets.newatlas.com/dims4/default/5e30e35/2147483647/strip/true/crop/4000x2667+0+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F6e%2F77%2F638536314eacbb6680c7ef91a502%2Fteleportal-alvin-robot-4-of-8.jpeg")',
        'signup':'url("https://media.istockphoto.com/id/1152237432/photo/underwater-scene-tropical-seabed-with-reef-and-sunshine.jpg?s=612x612&w=0&k=20&c=qAe3eZ_bwmrq6CW5IoddV2icSDKsO7vkbQKwqy3ma0o=")',
        'dashboard':'url("https://c4.wallpaperflare.com/wallpaper/533/274/437/water-4k-best-high-resolution-wallpaper-preview.jpg")',
        'contactus':'url("https://img.freepik.com/premium-vector/girl-turns-support-service-customer-service-conceptcontact-usonline-helpline_369728-26.jpg")',
        'sea4':'url("https://images.unsplash.com/photo-1499452535738-b35ed31e39d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxODYxOTg4fHxlbnwwfHx8fHw%3D&w=1000&q=80")',
        'aboutus':'url("https://wallpapers.com/images/hd/blue-water-background-cxt95up4l9fh7qtr.jpg")'
      }
    },
  },
  plugins: [],
}
