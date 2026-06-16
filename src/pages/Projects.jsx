import { useTranslation } from "react-i18next";
import Card from "../components/Card";
import anjoLogo from "../assets/anjo-logo.webp";
import BelAyitiTravellogo from "../assets/project/belAyitiTravel-logo.webp";
import MediaAPi from "../assets/project/MediaAPI.png";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      titleKey: "MyPortfolio",
      descKey:
        "KelvRuntime an developer portfolio built with React, showcasing projects, skills, and experience with a modern design and responsive layout.",
      image: anjoLogo,
      link: "#",
    },
    {
      titleKey: "BelAyitiTravel",
      descKey:
        "agency of travel and tourism in haiti were you can book your next trip to haiti or enywhere in the world they have the best prices and the best service and flights and hotels and more....",
      image: BelAyitiTravellogo,
      link: "#",
    },
    {
      titleKey: "MediaAPI",
      descKey:
        "A web were you can download video and music from youtube and other platform for free and fast",
      image: MediaAPi,
      link: "#",
    },
    {
      titleKey: "project_3_title",
      descKey: "project_3_desc",
      image:
        "https://images.unsplash.com/photo-1592210454359-805263f82693?w=400&h=250&fit=crop",
      link: "#",
    },
    {
      titleKey: "project_4_title",
      descKey: "project_4_desc",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      link: "#",
    },
    {
      titleKey: "project_5_title",
      descKey: "project_5_desc",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      link: "#",
    },
  ];

  return (
    <section id="Projects" className="projects-section">
      <h2>{t("projects_title")}</h2>
      <p>{t("projects_subtitle")}</p>
      <div className="projects-container">
        {projects.map((p) => (
          <Card
            key={p.titleKey}
            title={t(p.titleKey)}
            description={t(p.descKey)}
            image={p.image}
            link={p.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
