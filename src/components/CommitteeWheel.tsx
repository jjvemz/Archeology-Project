import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import bird1 from "/images/committee/Circles/bird1.png";
import bird2 from "/images/committee/Circles/bird2.png";
import bird3 from "/images/committee/Circles/bird3.png";
import whale1 from "/images/committee/Circles/whale1.png";
import whale2 from "/images/committee/Circles/whale2.png";
import whale3 from "/images/committee/Circles/whale3.png";
import whale4 from "/images/committee/Circles/whale4.png";
import whale5 from "/images/committee/Circles/whale5.png";

interface CommitteeMember {
  name: string;
  titleKey: string;
  affiliation: string;
  specialization: string;
  region: string;
  picture: string;
}

interface CommitteeWheelProps {
  members: CommitteeMember[];
}

const CommitteeWheel = ({ members }: CommitteeWheelProps) => {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Calculate angle for each member in the wheel
  const angleSlice = 360 / members.length;
  const radius = 300; // Distance from center

  // Function to get animal image for specific members
  const getAnimalImage = (memberName: string) => {
    // Bird images
    if (memberName.includes("Carlos Morales")) return bird1;
    if (memberName.includes("Elena Marchetti")) return bird2;
    if (memberName.includes("Tanaka")) return bird3;
    
    // Whale images
    if (memberName.includes("Maria Fernandez-Lopez")) return whale1;
    if (memberName.includes("Robert Anderson")) return whale2;
    if (memberName.includes("Claudine Dubois")) return whale3;
    if (memberName.includes("Zhang Wei")) return whale4;
    if (memberName.includes("Sarah Thompson")) return whale5;
    
    return null;
  };

  // Check if member should show animal image when unhovered
  const shouldShowAnimalImage = (memberName: string) => {
    return memberName.includes("Carlos Morales") || 
           memberName.includes("Elena Marchetti") || 
           memberName.includes("Tanaka") ||
           memberName.includes("Maria Fernandez-Lopez") ||
           memberName.includes("Robert Anderson") ||
           memberName.includes("Claudine Dubois") ||
           memberName.includes("Zhang Wei") ||
           memberName.includes("Sarah Thompson");
  };

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
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="relative w-full h-full flex items-center justify-center"
        onMouseMove={handleMouseMove}
      >
        {/* Center circle - always visible */}
        <motion.div 
          className="absolute w-80 h-80 rounded-full border-4 border-primary bg-primary flex items-center justify-center z-10 shadow-lg overflow-hidden"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex !== null ? (
              <motion.img
                key={hoveredIndex}
                src={members[hoveredIndex].picture}
                alt={members[hoveredIndex].name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 0.3, borderRadius: "50%" }}
                animate={{ opacity: 1, scale: 1, borderRadius: "0%" }}
                exit={{ opacity: 0, scale: 0, borderRadius: "50%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ borderRadius: "inherit" }}
              />
            ) : (
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <h3 className="text-3xl font-bold text-white">{t("committeeWheel.congress")}</h3>
                <p className="text-sm text-white mt-2">{t("committeeWheel.hoverOverName")}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Member positions around the wheel */}
        {members.map((member, index) => {
          const { x, y } = getMemberPosition(index);
          const isHovered = hoveredIndex === index;
          
          // Determine if circle is in blue area based on gradient transition at 65%
          // The wheel center is at 50% of container height, transition at 65%
          // So blue area starts 15% below wheel center
          // With radius 300, this translates to roughly y > 100 for partially blue
          const isInBlueArea = y > 100;
          const isPartiallyInBlueArea = y > -50 && y <= 100;
          
          // Debug specific members
          const isTargetMember = member.name.includes("Sarah Thompson") || member.name.includes("Maria Fernandez-Lopez");

          return (
            <div
              key={index}
              className="absolute cursor-pointer transition-all duration-300  flex items-center justify-center"
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
                className={`text-center transition-all duration-300 w-36 h-36 rounded-full border-2 border-dashed flex items-center justify-center ${
                  isHovered ? "scale-110 border-primary" : 
                  "scale-100 border-orange-700"
                }`}
              >
                {shouldShowAnimalImage(member.name) && !isHovered ? (
                  // Show only animal image when not hovered for specific members
                  <div className="text-center">
                    <img 
                      src={getAnimalImage(member.name) || ""} 
                      alt={`Animal for ${member.name}`}
                      className="w-16 h-16 object-contain mx-auto"
                    />
                  </div>
                ) : (
                  // Show name for other members or when hovered
                  <div className="text-center">
                    <p className={`font-bold text-xs leading-tight transition-colors ${
                      isHovered ? "text-primary" : 
                      "text-orange-700"
                    }`}>
                      {member.name}
                    </p>
                    <p className={`text-xs transition-colors ${
                      isHovered ? "text-primary font-semibold" : 
                      "text-orange-700"
                    }`}>
                      {member.region}
                    </p>
                    
                    {/* Indicator circle */}
                    <div
                      className={`w-3 h-3 rounded-full mx-auto mt-2 transition-all duration-300 ${
                        isHovered ? "bg-primary scale-150" : 
                        "bg-orange-700"
                      }`}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommitteeWheel;
