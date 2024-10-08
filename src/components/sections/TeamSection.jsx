import SectionHeading from "../SectionHeading";
import TeamCard from "../TeamCard";

function TeamSection() {
  const teams = [
    {
      id: 0,
      img: "/public/images/team/team-01.png",
      name: "Melissa Tatcher",
      designation: "Marketing Expert",
    },
    {
      id: 1,
      img: "/public/images/team/team-02.png",
      name: "Stuard Ferrel",
      designation: "Digital Marketer",
    },
    {
      id: 2,
      img: "/public/images/team/team-03.png",
      name: "Eva Hudson",
      designation: "Creative Designer",
    },
    {
      id: 3,
      img: "/public/images/team/team-04.png",
      name: "Jackie Sanders",
      designation: "Founder of Facebook",
    },
  ];

  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <SectionHeading
              topTitle="Our Team Members"
              heading="Our Clients"
              subHeading=" There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form."
            />
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          {teams.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
