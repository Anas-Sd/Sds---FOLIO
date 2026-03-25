import { Mail, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

export const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollAnimation();
  const { ref: card2Ref, isVisible: card2Visible } = useScrollAnimation();
  const { ref: education1Ref, isVisible: education1Visible } = useScrollAnimation();
  const { ref: education2Ref, isVisible: education2Visible } = useScrollAnimation();

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <Card
            ref={card1Ref}
            className={`p-6 sm:p-8 transition-all duration-700 delay-100 ${card1Visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              Who I Am
            </h3>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Software Engineer with hands-on experience in Data Structures & Algorithms and strong
proficiency in building secure and scalable web applications. Experienced in designing RESTful APIs, optimizing
backend performance, and developing secure, production-ready systems.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Currently pursuing my B.Tech in Computer Science at KL University,
              I actively work on real-world projects using modern technologies
              like MERN stack, authentication systems, APIs, and cloud deployment.
              I strongly believe in continuous learning and consistently upskill
              myself through hands-on projects, certifications, and problem-solving.
            </p>
          </Card>

          <div
            ref={card2Ref}
            className={`space-y-4 sm:space-y-6 transition-all duration-700 delay-200 ${card2Visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <Card className="p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">
                    Location
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Vijayawada, Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">
                    Email
                  </h4>
                  <a
                    href="mailto:portfolio.syedanas@gmail.com"
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    portfolio.syedanas@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm sm:text-base">
                    Phone
                  </h4>
                  <a
                    href="tel:+917674088150"
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 76740 88150
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 grid md:grid-cols-2 gap-6 sm:gap-8">
          <Card
            ref={education1Ref}
            className={`p-6 sm:p-8 transition-all duration-700 delay-300 ${education1Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              Education
            </h3>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="font-semibold text-base sm:text-lg">
                  KL University
                </h4>
                <p className="text-sm sm:text-base text-primary">
                  B.Tech in Computer Science and Engineering
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  2023 – 2027
                </p>
                <p className="text-xs sm:text-sm font-medium mt-2">
                  CGPA: 9.24
                </p>
              </div>

              <div className="border-t pt-4 sm:pt-6">
                <h4 className="font-semibold text-base sm:text-lg">
                  Narayana Junior College
                </h4>
                <p className="text-sm sm:text-base text-primary">
                  Intermediate (BIEAP)
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  2021 – 2023
                </p>
                <p className="text-xs sm:text-sm font-medium mt-2">
                  Percentage: 90%
                </p>
              </div>

              <div className="border-t pt-4 sm:pt-6">
                <h4 className="font-semibold text-base sm:text-lg">
                  Sri Chaitanya Techno School
                </h4>
                <p className="text-sm sm:text-base text-primary">
                  SSC
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  2020 – 2021
                </p>
                <p className="text-xs sm:text-sm font-medium mt-2">
                  Percentage: 100%
                </p>
              </div>
            </div>
          </Card>

          <Card
            ref={education2Ref}
            className={`p-6 sm:p-8 transition-all duration-700 delay-400 ${education2Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              Achievements
            </h3>

            <ul className="space-y-3 sm:space-y-4">
              <li className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-muted-foreground">
                   Solved <strong>130+</strong> problems on <a className="underline" href="https://leetcode.com/u/2300032619/" target="_blank" rel="noopener noreferrer"><strong>LeetCode</strong></a> to strengthen problem-solving skills and algorithmic thinking.
                </p>
              </li>

              <li className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Recognized by CIIE Director for the Idea and Innovation in the
                  <Link to={'/DTI-Certificate' } target="_blank"
                    rel="noopener noreferrer"><strong className="underline"> Fuel Accessibility </strong></Link> Project 
                  under the DTI initiative
                </p>
              </li>

              <li className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Completed self-learning of the Japanese language up to
                  <strong> N3 level</strong>, demonstrating strong multilingual
                  and learning capabilities
                </p>
              </li>

              <li className="flex gap-3">
                <div className="w-2 h-2  rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Actively participated as Team Lead  in
                  <strong> 2 National-level Hackathons</strong>,
                  Conducted by - 
                  <Link
                    to="/Visa-Hackathon-Certificate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong><span className="underline cursor-pointer hover:text-blue-500"> IIT - Madras </span></strong>
                    and </Link>
                  <Link
                    to="/VR-Siddhartha-Hackathon-Certificate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong><span className="hover:text-blue-500 underline cursor-pointer">VR Siddhartha</span></strong></Link>,
                  collaborating in teams to design and develop web applications
                </p>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
