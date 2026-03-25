import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Github, Linkedin, Code2, Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: profilesRef, isVisible: profilesVisible } = useScrollAnimation();
  const [sending, setSending] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.title || !formData.message) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setSending(true);

      await emailjs.send(
        "service_6jj3xgs",
        "template_09wwdhl",
        {
          name: formData.name,
          email: formData.email,
          title: formData.title,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "58zfZBQZsMKcMOCKG"
      );

      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", title: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Email send error:", error);
    } finally {
      setSending(false);
    }
  };

  const socialProfiles = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/-syedanas/",
      color: "text-[#0077b5]",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Anas-Sd",
      color: "text-foreground",
    },
  ];

  const codingProfiles = [
    {
      name: "CodeChef",
      icon: Code2,
      url: "https://www.codechef.com/users/kl_2300032619",
      color: "text-[#5B4638]",
    },
    {
      name: "LeetCode",
      icon: Trophy,
      url: "https://leetcode.com/u/2300032619/",
      color: "text-[#FFA116]",
    },
    {
      name: "HackerRank",
      icon: Code2,
      url: "https://www.hackerrank.com/profile/h2300032619",
      color: "text-[#00EA64]",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <Card
            ref={formRef}
            className={`p-6 sm:p-8 transition-all duration-700 delay-100 ${formVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
              }`}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  placeholder="Your name"
                  className="text-sm sm:text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  placeholder="your.email@example.com"
                  className="text-sm sm:text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="block text-xs sm:text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <Input
                  id="title"
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                  placeholder="Subject of your message"
                  className="text-sm sm:text-base"
                  maxLength={100}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  placeholder="Your message..."
                  rows={5}
                  className="text-sm sm:text-base"
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={sending}
              >
                {sending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          <div
            ref={profilesRef}
            className={`space-y-4 sm:space-y-6 transition-all duration-700 delay-200 ${profilesVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
              }`}
          >
            <Card className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                Social Profiles
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {socialProfiles.map((profile) => (
                  <a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all group"
                  >
                    <profile.icon
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${profile.color} group-hover:text-primary-foreground flex-shrink-0`}
                    />
                    <span className="font-medium text-xs sm:text-sm">
                      {profile.name}
                    </span>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                Coding Profiles
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {codingProfiles.map((profile) => (
                  <a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all group"
                  >
                    <profile.icon
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${profile.color} group-hover:text-primary-foreground flex-shrink-0`}
                    />
                    <span className="font-medium text-xs sm:text-sm">
                      {profile.name}
                    </span>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-6 sm:p-8 bg-gradient-primary text-white">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                Ready to Collaborate?
              </h3>
              <p className="mb-4 sm:mb-6 opacity-90 text-xs sm:text-sm">
                Whether you have a project in mind or just want to connect, I'm
                always excited to discuss new opportunities and ideas.
              </p>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="w-full text-sm sm:text-base"
              >
                <a href="mailto:portfolio.syedanas@gmail.com">Email Me Directly</a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
