import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 md:p-12">
      {/* Hero Section */}
      <section className="mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Thant Si Thu
        </motion.h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Cloud Engineer with a strong foundation in Electrical and Electronics Engineering, specializing in AWS, Google Cloud, Kubernetes, and Machine Learning. Passionate about building scalable systems and applying engineering principles to solve real-world problems.
        </p>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="max-w-3xl leading-relaxed">
          I am an aspiring engineer seeking to further my academic journey through scholarship opportunities. My background combines traditional engineering with modern cloud technologies, allowing me to approach problems from both hardware and software perspectives. I am particularly interested in leveraging cloud computing and machine learning to create efficient, scalable, and intelligent systems.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "AWS",
            "Google Cloud",
            "Kubernetes",
            "Machine Learning",
            "Electrical Engineering",
            "Microservices",
          ].map((skill) => (
            <Card key={skill}>
              <CardContent className="p-4 text-center">
                {skill}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold">Liverpool John Moores University</h3>
              <p>BSc Electrical and Electronics Engineering</p>
              <p className="text-sm text-gray-600">First Class Honours</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold">Auston College (Myanmar)</h3>
              <p>Higher Diploma in Electrical Technology</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold">Cloud Engineer</h3>
              <p>B8 ICT Solutions</p>
              <p className="text-sm text-gray-600">May 2025 - Present</p>
              <ul className="list-disc ml-5 mt-2 text-sm">
                <li>Managed cloud infrastructure using AWS and Kubernetes</li>
                <li>Designed and maintained microservices architecture</li>
                <li>Implemented monitoring and deployment solutions</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold">M&E Engineer Intern</h3>
              <p>Yangon Aerodrome Company Limited</p>
              <p className="text-sm text-gray-600">Aug 2023 - Oct 2023</p>
              <ul className="list-disc ml-5 mt-2 text-sm">
                <li>Assisted in maintenance of electrical systems</li>
                <li>Supported engineering operations and inspections</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Placeholder */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <p className="text-gray-600">
          Projects will be added based on provided documentation.
        </p>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: your.email@example.com</p>
        <div className="mt-4">
          <Button>Download CV</Button>
        </div>
      </section>
    </div>
  );
}
