/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      backgroundImage: {
        // 'hero-pattern': "url('/img/hero-pattern.svg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
        'sea1': 'url("https://wallpapershome.com/images/pages/pic_h/386.jpg")',
        'sea3':'url("https://free4kwallpapers.com/uploads/wallpaper/ocean-fish-wallpaper-1280x720-wallpaper.jpg")',
        'sea2':'url("https://assets.newatlas.com/dims4/default/5e30e35/2147483647/strip/true/crop/4000x2667+0+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F6e%2F77%2F638536314eacbb6680c7ef91a502%2Fteleportal-alvin-robot-4-of-8.jpeg")',
      }
    },
  },
  plugins: [],
}
