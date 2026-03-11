import CommitteeWheel from "@/components/CommitteeWheel";

const CommitteeWheelTest = () => {
  const committee = [
    {
      id: "wallin",
      name: "Dr. Elena Marchetti",
      titleKey: "committee.chair",
      affiliation: "University of Auckland, New Zealand",
      specialization: "Pacific Maritime Archaeology",
      region: "New Zealand",
      picture: "",
    },
    {
      id: "lilian",
      name: "Prof. Hiroshi Tanaka",
      titleKey: "committee.viceChair",
      affiliation: "Kyoto University, Japan",
      specialization: "Island Settlement Patterns",
      region: "Japan",
      picture: "",
    },
    {
      id: "chris",
      name: "Dr. Maria Fernandez-Lopez",
      titleKey: "committee.member",
      affiliation: "Universidad de Chile",
      specialization: "Colonial Impact Studies",
      region: "Chile",
      picture: "",
    },
    {
      id: "eske",
      name: "Prof. Robert Anderson",
      titleKey: "committee.member",
      affiliation: "University of Hawaii at Manoa, USA",
      specialization: "Polynesian Archaeology",
      region: "Hawaii",
      picture: "",
    },
    {
      id: "aaron",
      name: "Dr. Claudine Dubois",
      titleKey: "committee.member",
      affiliation: "Université de la Polynésie française",
      specialization: "Cultural Change Analysis",
      region: "French Polynesia",
      picture: "",
    },
    {
      id: "kurt",
      name: "Prof. Zhang Wei",
      titleKey: "committee.member",
      affiliation: "Chinese Academy of Social Sciences",
      specialization: "Trans-Pacific Connections",
      region: "China",
      picture: "",
    },
    {
      id: "sonia",
      name: "Dr. Sarah Thompson",
      titleKey: "committee.member",
      affiliation: "Australian National University",
      specialization: "Environmental Archaeology",
      region: "Australia",
      picture: "",
    },
    {
      id: "joann",
      name: "Prof. Carlos Morales",
      titleKey: "committee.member",
      affiliation: "Universidad Nacional de Colombia",
      specialization: "Coastal Adaptations",
      region: "Colombia",
      picture: "",
    },
  ];

  return <CommitteeWheel members={committee} />;
};

export default CommitteeWheelTest;
