import { auth } from "@/auth";

export const useSession = async () => {
  let session = await auth();
  let user = session?.user;

  return {
    session,
    user,
  };
};
