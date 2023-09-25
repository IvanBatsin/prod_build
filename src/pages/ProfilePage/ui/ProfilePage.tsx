import React from "react";
import { PageWrapper } from "widgets/PageWrapper/PageWrapper";
import { EditableProfileCard } from "features/editableProfileCard";
import { useParams } from "react-router-dom";

const ProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <PageWrapper>
      <EditableProfileCard id={id}/>
    </PageWrapper>
  );
};

export default React.memo(ProfilePage);
