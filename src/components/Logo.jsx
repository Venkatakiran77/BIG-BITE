import React from 'react';
import './Logo1.css';

export default function Logo() {
    return (
        <div className='MainLogo'>
        <video  autoPlay muted loop>
        <source src="/assets/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img src="/assets/BIG BITE.jpg" alt="logo" className='bigImg'/>
      <h1>
      "Discover Delectable Delights: Find Your Perfect Recipe!"
      </h1>
      <div className='images'>
        <img className='logoImg' src="/assets/item1.jpg" id='img1' />
        <img className='logoImg' src="/assets/item2.jpg" id='img2' />
        <img className='logoImg' src="/assets/item3.jpg" id='img3' />
      </div>
      <p>
      Welcome to our culinary haven, where your quest for the perfect recipe ends! Whether you're craving a comforting classic or eager to explore exotic flavors, our website is your one-stop destination for all things delicious. From mouthwatering mains to tempting treats, we've curated a vast collection of recipes to tantalize your taste buds and inspire your culinary adventures.

Browse through our extensive selection to discover recipes for every occasion and every palate. Whether you're a seasoned chef or a kitchen novice, our user-friendly platform makes it easy to find, save, and share your favorite dishes. With detailed instructions, helpful tips, and stunning visuals, we're here to guide you every step of the way on your culinary journey.

But our website is more than just a recipe repository—it's a community of food lovers, united by a shared passion for great food and great flavors. Join us as we celebrate the joy of cooking, share kitchen triumphs and mishaps, and connect with fellow foodies from around the globe.

So, what are you waiting for? Embark on a culinary adventure with us and discover the recipe of your dreams. Let's cook up something extraordinary together!
      </p>
      <footer>
      "© 2024 BIG BITE. All Rights Reserved. Privacy Policy | Terms of Service | Contact Us"
      </footer>
        </div>
    )
}
