import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "MongoDB", level: 75 },
        { name: "Prisma", level: 80 },
        { name: "GraphQL", level: 65 },
      ]
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe XD", level: 80 },
        { name: "Photoshop", level: 75 },
        { name: "Framer", level: 85 },
        { name: "Principle", level: 70 },
        { name: "Sketch", level: 75 },
      ]
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 80 },
        { name: "Expo", level: 85 },
        { name: "Flutter", level: 60 },
        { name: "Swift", level: 50 },
        { name: "Kotlin", level: 55 },
        { name: "Ionic", level: 70 },
      ]
    }
  ]

  const tools = [
    "VS Code", "Git", "Docker", "AWS", "Vercel", "Netlify", 
    "Postman", "Jira", "Slack", "Notion", "Linear", "GitHub"
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Skills & Expertise
          </Badge>
          <h2 className="font-clash text-3xl md:text-4xl font-bold mb-6">
            Technologies I work with
            <span className="text-primary"> daily</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m constantly learning and expanding my skill set. Here are the main 
            technologies and tools I use in my development workflow.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-clash text-xl font-semibold mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tools */}
        <div className="text-center">
          <h3 className="font-clash text-2xl font-semibold mb-8">
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
