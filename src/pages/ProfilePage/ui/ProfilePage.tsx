import { ProfileCard, fetchProfileData, profileReducer } from "entities/Profile";
import React from "react";
import { DynamicModuleLoader, type ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

const reducers: ReducersList = {
  profile: profileReducer
};

const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchProfileData(null) as any);
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
        <ProfileCard/>
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
