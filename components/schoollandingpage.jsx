'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function SchoolLandingPageJsx() {
  return (
    (<div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Sunshine Elementary School</h1>
        </div>
      </header>
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to Sunshine Elementary</h2>
            <p className="text-xl mb-8">Nurturing young minds for a brighter future</p>
            <Button size="lg">Learn More</Button>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our History</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="School in the past"
                  width={400}
                  height={300}
                  className="rounded-lg" />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg">
                  Founded in 1950, Sunshine Elementary has been a cornerstone of our community for over 70 years. 
                  What started as a small schoolhouse has grown into a vibrant learning center, 
                  dedicated to providing quality education to generations of students.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Aims and Objectives Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Aims and Objectives</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">Foster Curiosity</h3>
                <p>We aim to nurture a love for learning and encourage students to explore the world around them.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">Develop Skills</h3>
                <p>Our objective is to help students develop essential academic and life skills for future success.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">Build Character</h3>
                <p>We strive to instill values of kindness, respect, and responsibility in our students.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Life at Sunshine Elementary</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Image
                  key={i}
                  src={`/placeholder.svg?height=200&width=300&text=School Image ${i}`}
                  alt={`School life ${i}`}
                  width={300}
                  height={200}
                  className="rounded-lg" />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Textarea placeholder="Your Message" />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Support Our School</h2>
            <p className="text-lg mb-8">Your donation helps us provide better education and facilities for our students.</p>
            <Button size="lg" variant="outline">Make a Donation</Button>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Sunshine Elementary School. All rights reserved.</p>
        </div>
      </footer>
    </div>)
  );
}