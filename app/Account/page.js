import AccountHeader from "@/components/AccountHeader";
import AccountSideNav from "@/components/AccountSideNav";
import AccountPage from "@/pages/AccountPage";

export default function Account() {
  return (
    <div className="w-full max-h-[100vh] px-[2%]">
        <AccountHeader />
        <div className="flex gap-3 w-full items-center mt-[90px]">
            <AccountSideNav  />
            <AccountPage />
        </div>
    </div>
  );
}
