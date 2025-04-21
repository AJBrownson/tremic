import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import ScrollFadeIn from "@/components/ScrollFadeIn"

interface TeamMemberProps {
  name: string;
  position: string;
  description: string;
  imageUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({
  name,
  position,
  description,
  imageUrl,
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col h-full">
      <div className="relative h-64 w-full">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="px-6 py-4 flex-grow">
        <h2 className="text-2xl font-montserrat font-bold text-blue-900 mb-1">
          {name}
        </h2>
        <p className="text-blue-800 font-kumbh font-semibold text-sm uppercase tracking-wider mb-3">
          {position}
        </p>
        <p className="text-gray-700 font-kumbh">{description}</p>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Samuel Stephen Uffot",
      position: "CEO / Technical Director",
      description:
        "Fondly called Sam by all, he is the CEO/technical lead and director at Tre-Mic. He comes with over 2 decades of expertise in water tank installation design and implementation, coordinating maintenance and repairs and ensuring that each project is delivered with nothing short of excellence.",
      imageUrl: "/ceo.jpg",
    },
    {
      name: "Adeiza Jinadu",
      position: "Int'l Procurement / Safety Engr.",
      description:
        "Adeiza is a versed engineer of over 2 decades of experience. He is armed with safety measures and doubles as the Safety Engineer and International Procurement executive of Tre-Mic. He coordinates all international procurements for the company and ensures that top-notch materials are used to deliver every project the company embarks upon.",
      imageUrl: "/adeiza.jpg",
    },
    {
      name: "Abdulfattah Junayd",
      position: "Business Development Manager, South",
      description:
        "Abdulfattah is an experienced community and client manager, a business development strategist and communications expert. He oversees the company's business development in the south and ensures that the needs of the clients are met in all projects.",
      imageUrl: "/junayd.jpg",
    },
    {
      name: "Tijjani Ibrahim",
      position: "Business Development Manager, North",
      description:
        "Excelling as an entrepreneur and expert business management strategist with innovative leadership skills, Tijjani thrives in dynamic environments, offering strategic insights, driving growth, and fostering sustainable success through visionary thinking and effective organizational development. He oversees the business's development in the north and ensures that the needs of the clients are met in every project.",
      imageUrl: "/tijjani.png",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Header */}
      <div className="relative h-[300px] w-full mt-10">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/pattern.svg)" }}
        ></div>
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="font-montserrat text-5xl md:text-7xl font-bold text-center mb-6">
            Our Team
          </h1>
          <div className="font-kumbh flex items-center gap-2 text-lg">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Our Team</span>
          </div>
        </div>
      </div>

      <div className="py-12 px-4 md:px-10">
        <div className="container mx-auto px-4">
          <h1 className="text-center mb-4 font-montserrat text-3xl md:text-4xl font-bold text-blue-900">
            Meet the Team
          </h1>
          <p className="mb-12 font-kumbh text-gray-600 max-w-3xl mx-auto text-center">
            We are professionals in technical know-how, clientele service and
            business development
          </p>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                position={member.position}
                description={member.description}
                imageUrl={member.imageUrl}
              />
            ))}
          </div> */}
          <ScrollFadeIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const isLastSingleItem =
                teamMembers.length % 3 === 1 &&
                index === teamMembers.length - 1;

              return (
                <div
                  key={index}
                  className={
                    isLastSingleItem ? "lg:col-span-3 flex justify-center" : ""
                  }
                >
                  <TeamMemberCard
                    name={member.name}
                    position={member.position}
                    description={member.description}
                    imageUrl={member.imageUrl}
                  />
                </div>
              );
            })}
          </ScrollFadeIn>
        </div>
      </div>
    </main>
  );
};

export default Team;
