import React from 'react';
import desc from './models';

import {
  WallInfoUserAbout,
  InfoHeaderText,
  InfoHeaderTextBlock,
  InfoHeaderListItemLeft,
  InfoHeaderListItemRight,
} from './UserAbout.styled';

interface IUserAbout {
  dateOfBirth?: string;
  education?: string;
  profession?: string;
  linkSite?: string;
  city?: string;
  aboutMe?: string;
  languages?: string[];
}

const UserAbout: React.FC<IUserAbout> = function UserAbout({
  dateOfBirth,
  education,
  profession,
  linkSite,
  city,
  aboutMe,
  languages,
}) {
  const descriptionItems = [
    [desc.birthday, dateOfBirth],
    [desc.educ, education],
    [desc.prof, profession],
    [desc.lang, languages?.join(', ')],
    [desc.city, city],
    [desc.about, aboutMe],
    [desc.site, linkSite],
  ];

  const renderAbout = () =>
    descriptionItems.map(([description, info]) => {
      if (!info) {
        return null;
      }
      return [
        <InfoHeaderListItemLeft key={`desc_${description}`}>{description}</InfoHeaderListItemLeft>,
        <InfoHeaderListItemRight key={`info_${description}`}>{info}</InfoHeaderListItemRight>,
      ];
    });

  return (
    <WallInfoUserAbout>
      <InfoHeaderText>О себе</InfoHeaderText>
      <InfoHeaderTextBlock>{renderAbout()}</InfoHeaderTextBlock>
    </WallInfoUserAbout>
  );
};

export default UserAbout;
