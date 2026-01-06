import { useState } from "react";
import CirculoImage from "/images/circulo2.png";

interface CommitteeMember {
  name: string;
  titleKey: string;
  affiliation: string;
  specialization: string;
  region: string;
}

interface CommitteeWheelProps {
  members: CommitteeMember[];
}

const CommitteeWheel = ({ members }: CommitteeWheelProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Calculate angle for each member in the wheel
  const angleSlice = 360 / members.length;
  const radius = 300; // Distance from center

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getMemberPosition = (index: number) => {
    const angle = (index * angleSlice - 90) * (Math.PI / 180);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y, angle: index * angleSlice };
  };

  return (
    <div className="w-full h-screen flex items-center justify-center  relative overflow-hidden">
      <div
        className="relative w-full h-full flex items-center justify-center"
        onMouseMove={handleMouseMove}
      >
        {/* Center circle - always visible */}
        <div className="absolute w-64 h-64 rounded-full  border-4 border-primary flex items-center justify-center z-50 shadow-lg">
          {hoveredIndex !== null ? (
            <div className="text-center">
              <img
                src={CirculoImage}
                alt="committee member"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          ) : (
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary">Congress</h3>
              <p className="text-sm text-orange-700 mt-2">Hover over a name</p>
            </div>
          )}
        </div>

        {/* Member positions around the wheel */}
        {members.map((member, index) => {
          const { x, y } = getMemberPosition(index);
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={index}
              className="absolute cursor-pointer transition-all duration-300"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                left: "50%",
                top: "50%",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Name Label */}
              <div
                className={`text-center transition-all duration-300 ${
                  isHovered ? "scale-110" : "scale-100"
                }`}
              >
                <div className="mb-4">
                  <p className={`font-bold text-sm leading-tight transition-colors ${
                    isHovered ? "text-primary" : "text-orange-700"
                  }`}>
                    {member.name}
                  </p>
                  <p className={`text-xs transition-colors ${
                    isHovered ? "text-primary font-semibold" : "text-orange-600"
                  }`}>
                    {member.region}
                  </p>
                </div>

                {/* Indicator circle */}
                <div
                  className={`w-3 h-3 rounded-full mx-auto transition-all duration-300 ${
                    isHovered ? "bg-primary scale-150" : "bg-orange-700"
                  }`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommitteeWheel;
