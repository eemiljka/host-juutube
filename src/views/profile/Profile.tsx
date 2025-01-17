import UserInfo from "./UserInfo";
import FormSwitch from "./FormSwitch";
// Import the useUserContex hook from the mediastore mfe
import { useUserContext } from "mediastore/apiHooks";

const Profile = () => {
  const { user } = useUserContext();
  console.log(user);

  return (
    <main className="p-4">
      <div className="w-full max-w-3xl mx-auto">
        {user ? <UserInfo /> : <FormSwitch />}
      </div>
    </main>
  );
};

export default Profile;
