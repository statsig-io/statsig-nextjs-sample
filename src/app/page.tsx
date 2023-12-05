import { getStatsigValues } from "@/utils/get-statsig-values";
import ClientContent from "./client-content";

export default async function Index(): Promise<JSX.Element> {
  const user = { userID: "a-user" };
  const values = await getStatsigValues(user);
  return <ClientContent user={user} values={values} />;
}
