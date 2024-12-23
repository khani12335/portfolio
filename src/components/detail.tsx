import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Education from "./education";
import Experience from "./experience";
import Skill from "./skills";
import Project from "./project";
import Contact from "./contact";

export function Detail() {
  return (
    <Tabs defaultValue="education" className="w-full p-3">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="skill">Skill</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
      </TabsList>
      {/* tab content */}
      {/* education */}
      <TabsContent value="education">
        <Education/>
      </TabsContent>
      {/* experience */}
      <TabsContent value="experience">
        <Experience/>
      </TabsContent>
      {/* skill */}
      <TabsContent value="skill">
        <Skill/>
      </TabsContent>
      {/* project */}
      <TabsContent value="projects">
        <Project/>
      </TabsContent>
      <TabsContent value="contact">
        <Contact/>
      </TabsContent>
    </Tabs>
  );
}
