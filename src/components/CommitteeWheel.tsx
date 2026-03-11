import { useState, useEffect, useCallback } from "react";
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
  id: string;
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
  const [dimensions, setDimensions] = useState({ radius: 288, centerSize: 288, orbitSize: 115 });

  // Calculate responsive dimensions
  const calculateDimensions = useCallback(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const minDimension = Math.min(vw, vh);
    
    // Base values at 1000px viewport (orbitSize increased 20%)
    const baseRadius = 288;
    const baseCenterSize = 288;
    const baseOrbitSize = 138; // 115 * 1.2 = 138
    
    // Scale factor based on viewport, with min/max bounds
    const scaleFactor = Math.max(0.4, Math.min(1, minDimension / 900));
    
    return {
      radius: Math.max(120, baseRadius * scaleFactor),
      centerSize: Math.max(140, baseCenterSize * scaleFactor),
      orbitSize: Math.max(84, baseOrbitSize * scaleFactor), // min also increased 20%
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setDimensions(calculateDimensions());
    };
    
    handleResize(); // Initial calculation
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [calculateDimensions]);

  // Custom angles based on the user's drawing (0 is Top)
  const getCustomAngle = (id: string) => {
    switch (id) {
      case "wallin":
        return 0;
      case "lilian":
        return 45;
      case "chris":
        return 90;
      case "eske":
        return 135;
      case "aaron":
        return 180;
      case "kurt":
        return 225;
      case "sonia":
        return 270;
      case "joann":
        return 315;
      default:
        return 0;
    }
  };

  const getAnimalImage = (id: string) => {
    switch (id) {
      case "lilian":
        return bird1;
      case "chris":
        return whale1;
      case "eske":
        return whale2;
      case "aaron":
        return whale3;
      case "kurt":
        return whale4;
      case "sonia":
        return whale5;
      case "joann":
        return bird2;
      case "wallin":
        return bird3;
      default:
        return null;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getMemberPosition = (index: number) => {
    const member = members[index];
    const angle = (getCustomAngle(member.id) - 90) * (Math.PI / 180);
    const x = Math.cos(angle) * dimensions.radius;
    const y = Math.sin(angle) * dimensions.radius;
    return { x, y };
  };

  const handleCircleClick = (index: number) => {
    setHoveredIndex(hoveredIndex === index ? null : index);
  };

  return (
    <div
      className="w-full flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #1e40af 50%, #ffeecd 50%)",
        height: `${Math.max(600, dimensions.radius * 2 + dimensions.orbitSize + 100)}px`,
      }}
    >
      <div
        className="relative w-full h-full flex items-center justify-center"
        onMouseMove={handleMouseMove}
      >
        {/* Center circle - responsive size */}
        <motion.div 
          className="absolute rounded-full border-4 border-primary bg-primary flex flex-col items-center justify-center z-10 shadow-lg overflow-hidden"
          style={{ width: dimensions.centerSize, height: dimensions.centerSize }}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex !== null ? (
              <motion.img
                key={hoveredIndex}
                src={members[hoveredIndex].picture}
                alt={members[hoveredIndex].name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              />
            ) : (
              <motion.div
                className="text-center w-full h-full flex flex-col relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Top Half */}
                <div className="flex-1 flex flex-col items-center justify-center px-4 pt-2">
                  <h3 
                    className="font-black text-white leading-tight uppercase tracking-tighter"
                    style={{ fontSize: Math.max(14, dimensions.centerSize * 0.072) }}
                  >
                    {t("committeeWheel.congress")}
                  </h3>
                </div>

                {/* Split Line */}
                <div className="w-full h-1 bg-white/30" />

                {/* Bottom Half */}
                <div className="flex-1 flex flex-col items-center justify-center px-4 pb-2">
                  <h3 
                    className="font-black text-white/80 leading-tight uppercase tracking-tighter"
                    style={{ fontSize: Math.max(14, dimensions.centerSize * 0.072) }}
                  >
                    {t("committeeWheel.keynotes")}
                  </h3>
                  <p 
                    className="text-white/60 mt-1 uppercase tracking-widest font-bold"
                    style={{ fontSize: Math.max(8, dimensions.centerSize * 0.03) }}
                  >
                    {t("committeeWheel.hoverOverName")}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Member positions around the wheel - responsive size */}
        {members.map((member, index) => {
          const { x, y } = getMemberPosition(index);
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={index}
              className="absolute cursor-pointer transition-all duration-300 flex items-center justify-center"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                left: "50%",
                top: "50%",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleCircleClick(index)}
            >
              <div
                className={`text-center transition-all duration-300 rounded-full border-2 border-dashed flex items-center justify-center bg-white/5 backdrop-blur-sm ${
                  isHovered
                    ? "scale-110 border-primary bg-white/10"
                    : "border-orange-700/50"
                }`}
                style={{ width: dimensions.orbitSize, height: dimensions.orbitSize }}
              >
                {!isHovered ? (
                  <div className="text-center">
                    <img
                      src={getAnimalImage(member.id) || bird1}
                      alt="Icon"
                      className="object-contain mx-auto mb-1 opacity-80"
                      style={{ width: dimensions.orbitSize * 0.42, height: dimensions.orbitSize * 0.42 }}
                    />
                    <p 
                      className="font-bold leading-tight text-orange-700 dark:text-primary px-1"
                      style={{ fontSize: Math.max(8, dimensions.orbitSize * 0.10) }}
                    >
                      {member.name.split(" ").slice(-1)[0]}
                    </p>
                  </div>
                ) : (
                  <div className="text-center p-1">
                    <p 
                      className="font-black text-primary leading-tight uppercase"
                      style={{ fontSize: Math.max(10, dimensions.orbitSize * 0.12) }}
                    >
                      {member.name}
                    </p>
                    <p 
                      className="text-primary/80 font-bold mt-1 uppercase"
                      style={{ fontSize: Math.max(8, dimensions.orbitSize * 0.10) }}
                    >
                      {t(member.titleKey)}
                    </p>
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
