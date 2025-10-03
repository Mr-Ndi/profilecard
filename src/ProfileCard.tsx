import React from "react";

interface ProfileCardProps {
  fullName: string;
  jobTitle: string;
  description: string;
  profileImage?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  fullName,
  jobTitle,
  description,
  profileImage = "https://www.nexventures.net/icon.png",
}) => {
  return (
    <div className="max-w-sm w-full mx-auto bg-white bg-opacity-10 rounded-lg p-6 shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 text-white">
      <img
        src={profileImage}
        alt={`${fullName} profile`}
        className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
      />
      <h2 className="text-2xl font-semibold text-center mb-1">{fullName}</h2>
      <p className="text-center text-cyan-300 mb-3">{jobTitle}</p>
      <p className="text-center text-gray-300 mb-6">{description}</p>
      <a href="https://me-five-iota.vercel.app/contact" target="_blank" rel="noopener noreferrer">
        <button className="block mx-auto bg-cyan-500 hover:bg-cyan-600 text-white rounded px-4 py-2 shadow-md transition-colors duration-200">
          Contact Me
        </button>
      </a>

    </div>
  );
};

export default ProfileCard;
