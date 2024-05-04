import AuthForm from "@/components/AuthForm";

import { getLoggedInUser } from "@/lib/actions/user.actions";

export default async function Page() {

  const loggedInUser = await getLoggedInUser();

  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
}
