'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Facebook } from 'lucide-react'

export function SchoolLandingPageJsx() {
  return (
    (<div className="flex flex-col min-h-screen">
     <header className="bg-rose-900 text-primary-foreground py-4">
  <div className="container mx-auto px-4 flex items-center">
    {/* Add your image link here */}
    <Image
      src="https://res.cloudinary.com/dgpxvazru/image/upload/v1728473328/NewLearningCentre/301963757_152145060833278_4864325761069910268_n_srcn0g.jpg" // Replace with your image URL
      alt="Logo" // Add an appropriate alt text
      width={50} // Set the desired width
      height={50} // Set the desired height
      className="mr-4" // Optional: margin to the right
    />
    <h1 className="text-3xl font-bold">New Look Learning Centre</h1>
  </div>
</header>
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20">
  <div
    className="absolute inset-0 bg-cover bg-center blur-sm"
    style={{
      backgroundImage: `url('https://res.cloudinary.com/dgpxvazru/image/upload/v1728471778/NewLearningCentre/2022-06-20_j9pnqh.jpg')`, // Replace with your external image URL
    }}
  ></div>
  <div className="container mx-auto px-4 text-center relative z-10">
    <h2 className="text-4xl font-bold mb-4 text-black">Welcome to New Look Learning Centre</h2>
    <p className="text-xl mb-8 text-rose-900">Nurturing young minds for a brighter future</p>
    <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwin97qt94CJAxVBZ0EAHSJmA4EQFnoECC8QAQ&url=https%3A%2F%2Fwww.facebook.com%2Fp%2FNew-Look-Learning-CentreKumasiGhana-100081133550388%2F&usg=AOvVaw35rCB-5GW8VZ-tRuSLmU7V&opi=89978449"><Button size="lg">Learn More</Button></a>
  </div>
</section>


        {/* History Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-rose-900">Our Mission</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <Image
                  src={`https://res.cloudinary.com/dgpxvazru/image/upload/v1728471778/NewLearningCentre/2022-06-20_j9pnqh.jpg`}
                  alt="School in the past"
                  width={400}
                  height={300}
                  className="rounded-lg" />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg">
                At New Look Learning Centre (NLLC) our efforts are
geared towards the provision of a holistic education
in a conducive. academic , excellent and healthy
envronment for pre-school children in Kkumas., Ghana
and beyond through exceeding good practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Aims and Objectives Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-rose-900">Our Aims and Objectives</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-yellow-500">Foster Curiosity</h3>
                <p>We aim to nurture a love for learning and encourage students to explore the world around them.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-yellow-500">Develop Skills</h3>
                <p>Our objective is to help students develop essential academic and life skills for future success.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-yellow-500">Build Character</h3>
                <p>We strive to instill values of kindness, respect, and responsibility in our students.</p>
              </div>
            </div>
          </div>
        </section>

       {/* Image Gallery Section */}
<section className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center text-rose-900">Life at New Look Learning Centre</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <Image
        key={1}
        src="https://res.cloudinary.com/dgpxvazru/image/upload/v1728471776/NewLearningCentre/13087176_764550730349218_7557037124048375724_o_inplqp.jpg" // Replace with actual image URL
        alt="School life 1"
        width={300}
        height={200}
        className="rounded-lg"
      />
      <Image
        key={2}
        src="https://res.cloudinary.com/dgpxvazru/image/upload/v1728471776/NewLearningCentre/2023-03-01_rlyx3f.jpg" // Replace with actual image URL
        alt="School life 2"
        width={300}
        height={200}
        className="rounded-lg"
      />
      <Image
        key={3}
        src="https://res.cloudinary.com/dgpxvazru/image/upload/v1728471776/NewLearningCentre/13147347_764566257014332_2503957141115184028_o_mohcon.jpg" // Replace with actual image URL
        alt="School life 3"
        width={300}
        height={200}
        className="rounded-lg"
      />
      <Image
        key={4}
        src="https://res.cloudinary.com/dgpxvazru/image/upload/v1728471776/NewLearningCentre/13130838_764997180304573_9203797842721464014_o_msyigs.jpg" // Replace with actual image URL
        alt="School life 4"
        width={300}
        height={200}
        className="rounded-lg"
      />
      <Image
        key={5}
        src="https://res.cloudinary.com/dgpxvazru/image/upload/v1728471776/NewLearningCentre/13528459_791350367669254_6634386096447834101_o_kqj1pc.jpg" // Replace with actual image URL
        alt="School life 5"
        width={300}
        height={200}
        className="rounded-lg"
      />
      <Image
        key={6}
        src="https://res.cloudinary.com/dgpxvazru/image/upload/v1728471776/NewLearningCentre/13495455_791350497669241_6032786592645199592_o_udabca.jpg" // Replace with actual image URL
        alt="School life 6"
        width={300}
        height={200}
        className="rounded-lg"
      />
    </div>
  </div>
</section>


{/* Contact Section */}
<section className="bg-muted py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center text-rose-900">Contact Us</h2>
    <div className="max-w-md mx-auto text-center bg-white p-6 rounded-lg shadow-lg">
      <p className="mb-4 text-gray-700">For inquiries, please reach out to us:</p>
      
      <div className="flex items-center justify-center mb-4">
        <Mail className="w-6 h-6 text-rose-900 mr-2" />
        <span className="font-semibold text-gray-800">Email:</span> 
        <a href="mailto:school@example.com" className="text-yellow-500 underline ml-1"> school@example.com</a>
      </div>
      
      <div className="flex items-center justify-center mb-4">
        <Phone className="w-6 h-6 text-rose-900 mr-2" />
        <span className="font-semibold text-gray-800">Phone:</span> 
        <a href="tel:+233261316974" className="text-yellow-500 underline ml-1"> +233 26 131 6974</a>
      </div>

      <div className="flex items-center justify-center">
        <Facebook className="w-6 h-6 text-rose-900 mr-2" />
        <span className="font-semibold text-gray-800">Follow us on Facebook:</span> 
        <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-yellow-500 underline ml-1"> Facebook Page</a>
      </div>
    </div>
  </div>
</section>
 {/* Location Section */}
 <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Location</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <Image 
                  src="https://res.cloudinary.com/dgpxvazru/image/upload/v1728477422/NewLearningCentre/462231162_7216708308454220_2250022867100550575_n_izr7ey.jpg" 
                  alt="School Location Map" 
                  width={600} 
                  height={400} 
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-2xl font-semibold">Visit New Look Learning Centre</h3>
                <p className="text-lg">
                  We are conveniently located in the heart of our community, 
                  easily accessible by public transportation and with ample parking for visitors.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-primary" />
                    <span>New Apatrapa-Tanoso (Opposite Yaa Asantewaa SHS, Main gate)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="text-primary" />
                    <span>0243326860</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="text-primary" />
                    <span>info@example.edu</span>
                  </div>
                </div>
                <a href="https://maps.app.goo.gl/svusbVb61geWUyJX7"><Button size="lg">Google Map Location</Button></a>
              </div>
            </div>
          </div>
        </section>
<section>
<iframe 
  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fphoto%2F%3Ffbid%3D701823559942760%26set%3Da.701810123277437&show_text=true&width=500" 
  width="100%" 
  height="400" 
  style={{ border: 'none', overflow: 'hidden' }} 
  scrolling="no" 
  frameBorder="0" 
  allowFullScreen={true} 
  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
/>

</section>

        {/* Donation Section */}
        <section className="py-16">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-4 text-rose-900">Support Our School</h2>
    <p className="text-lg mb-8">
      Your donation helps us provide better education and facilities for our students.
    </p>
    <a href="tel:+233261316974"> {/* Replace with your actual phone number */}
      <Button size="lg" variant="outline"  >Make a Donation</Button>
    </a>
  </div>
</section>

      </main>
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} New Look Learning Centre. All rights reserved.</p>
        </div>
      </footer>
    </div>)
  );
}