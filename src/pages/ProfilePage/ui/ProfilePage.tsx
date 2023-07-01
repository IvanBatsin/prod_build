import { profileReducer } from "entities/Profile";
import React from "react";
import { DynamicModuleLoader, type ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const reducers: ReducersList = {
  profile: profileReducer
};

const ProfilePage: React.FC = () => {
  const text = "Pofile page";
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
        {text}
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
