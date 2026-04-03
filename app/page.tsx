"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const skills = [
  "AWS",
  "Google Cloud",
  "Kubernetes",
  "Docker",
  "Linux",
  "Python",
  "Electrical and Electronics Engineering",
  "Electrical Systems",
  "Electronics Fundamentals",
  "Engineering Problem Solving",
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 px-6 py-10 md:px-12">
      <div className="mx-auto max-w-5xl">
        {/* Hero */}
        <section className="mb-16 grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm text-zinc-500 mb-2">Portfolio</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Thant Si Thu
            </h1>
            <p className="mt-4 max-w-2xl text-zinc-600 leading-7">
              Cloud Engineer with a background in Electrical and Electronics
              Engineering. Interested in AWS, Kubernetes, scalable systems, and
              machine learning projects.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#project">
                <Button>View Project</Button>
              </a>
              <a href="mailto:thantsithu.tst12@gmail.com">
                <Button variant="outline">Contact Me</Button>
              </a>
            </div>
          </div>

          {/* Picture Space */}
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100 flex items-center justify-center">
              <Image
                src="/tst-pic.png"
                alt="Profile picture"
                width={320}
                height={320}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="max-w-3xl text-zinc-600 leading-7">
            I am a Cloud Engineer with a strong academic background in
            Electrical and Electronics Engineering. My interest in technology
            started from engineering fundamentals such as electrical systems,
            electronics, and problem-solving, and later grew into cloud
            infrastructure, scalable systems, and machine learning.
            <br />
            <br />
            My background helps me approach problems from both hardware and
            software perspectives. I enjoy working with modern cloud tools like
            AWS and Kubernetes, while also applying the analytical thinking and
            technical foundation I developed through Electrical and Electronics
            Engineering. I am especially interested in building reliable systems
            and working on practical, data-driven projects such as energy
            forecasting.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">Cloud Engineer</h3>
                <p className="text-zinc-600">B8 ICT Solutions</p>
                <p className="text-sm text-zinc-500 mt-1">May 2025 - Present</p>
                <ul className="list-disc ml-5 mt-4 text-sm text-zinc-600 space-y-1">
                  <li>Managed cloud infrastructure using AWS and Kubernetes</li>
                  <li>Designed and maintained microservices-based systems</li>
                  <li>Implemented monitoring and deployment workflows</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">M&E Engineer Intern</h3>
                <p className="text-zinc-600">
                  Yangon Aerodrome Company Limited
                </p>
                <p className="text-sm text-zinc-500 mt-1">
                  Aug 2023 - Oct 2023
                </p>
                <ul className="list-disc ml-5 mt-4 text-sm text-zinc-600 space-y-1">
                  <li>Assisted in maintenance of electrical systems</li>
                  <li>Supported engineering operations and inspections</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">
                  Liverpool John Moores University
                </h3>
                <p className="text-zinc-600">
                  Bachelor of Engineering with Honours (Class I)
                </p>
                <p className="text-sm text-zinc-500 mt-1">
                  Electrical and Electronic Engineering
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">
                  Auston College (Myanmar)
                </h3>
                <p className="text-zinc-600">
                  Higher Diploma in Electrical Technology
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">Wall Street English</h3>
                <p className="text-zinc-600">Diploma in English</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Project */}
        <section id="project" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Featured Project</h2>

          <a href="/project-report" className="block">
            <Card className="hover:shadow-md transition cursor-pointer">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">
                  Renewable Energy Consumption Forecasting
                </h3>
                <p className="mt-3 text-zinc-600 leading-7">
                  A machine learning and time series forecasting project focused
                  on predicting electricity consumption in Romania using Prophet
                  and SARIMAX models.
                </p>

                <ul className="list-disc ml-5 mt-4 text-sm text-zinc-600 space-y-1">
                  <li>Worked with hourly electricity data</li>
                  <li>
                    Applied preprocessing, stationarity testing, and outlier
                    handling
                  </li>
                  <li>Compared Prophet and SARIMAX using MSE, MAE, and MAPE</li>
                  <li>Focused on forecasting for renewable energy planning</li>
                </ul>

                <p className="mt-5 text-sm font-medium text-blue-600">
                  Click to read →
                </p>
              </CardContent>
            </Card>
          </a>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-zinc-600">Email: thantsithu.tst12@gmail.com</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <a
              href="https://github.com/Blanccjay"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-zinc-700"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/thantsithu/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-zinc-700"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
