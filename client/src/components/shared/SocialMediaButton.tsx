import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTiktok,
  FaTelegram,
  FaPinterest
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiThreads } from "react-icons/si";

interface SocialMediaButtonProps {
  platform:
    | "facebook"
    | "twitter"
    | "instagram"
    | "linkedin"
    | "tiktok"
    | "telegram"
    | "pinterest"
    | "threads";
  url: string;
  size?: "sm" | "md" | "lg";
}

export default function SocialMediaButton({
  platform,
  url,
  size = "sm",
}: SocialMediaButtonProps) {
  // Define size classes
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  // Define icon sizes
  const getIconSize = () => {
    switch(size) {
      case "lg": return 20;
      case "md": return 16;
      default: return 14;
    }
  };

  // Get the appropriate icon component
  const getIcon = () => {
    switch(platform) {
      case "facebook": return <FaFacebookF size={getIconSize()} />;
      case "twitter": return <FaXTwitter size={getIconSize()} />;
      case "instagram": return <FaInstagram size={getIconSize()} />;
      case "linkedin": return <FaLinkedinIn size={getIconSize()} />;
      case "tiktok": return <FaTiktok size={getIconSize()} />;
      case "telegram": return <FaTelegram size={getIconSize()} />;
      case "pinterest": return <FaPinterest size={getIconSize()} />;
      case "threads": return <SiThreads size={getIconSize()} />;
      default: return <FaXTwitter size={getIconSize()} />;
    }
  };

  return (
    <a
      href={url}
      className={`neumorphic ${sizeClasses[size]} flex items-center justify-center text-black hover:text-red-600`}
      aria-label={platform}
      target="_blank"
      rel="noopener noreferrer"
    >
      {getIcon()}
    </a>
  );
}
