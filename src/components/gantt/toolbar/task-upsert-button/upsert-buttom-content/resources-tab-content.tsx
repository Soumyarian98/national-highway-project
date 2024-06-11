import { Search } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";

import { users } from "../user-data";

const ResourcesTabContent = () => {
  return (
    <div className="max-h-[324px] overflow-auto mt-6">
      <div className="mb-4">
        <div
          className="w-[250px] flex items-center border rounded-md px-3"
          cmdk-input-wrapper="">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <input
            placeholder="Search users"
            className={
              "flex w-full rounded-md bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            }
          />
        </div>
      </div>
      <ul className="grid grid-cols-2 gap-2">
        {users.map(user => (
          <li className="flex items-center gap-2 cursor-pointer w-full p-2">
            <div className="flex gap-2 justify-between items-center">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="flex flex-col">
                <span className="text-sm font-semibold">
                  {user.first_name} {user.last_name}
                </span>
                <span className="text-sm text-muted-foreground">
                  {user.email}
                </span>
              </span>
            </div>
            <div className="flex-1 flex justify-end">
              <Checkbox />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourcesTabContent;
