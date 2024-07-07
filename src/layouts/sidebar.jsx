import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CircleUser, Menu, Hash, Settings } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../App";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const Layout = () => {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[70px_240px_1fr]">
      <ServerList />
      <Sidebar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6">
          <MobileSidebar />
          <div className="flex items-center gap-2">
            <Hash className="h-5 w-5" />
            <h2 className="font-semibold">General</h2>
          </div>
          <div className="ml-auto w-full max-w-sm">
            <Input type="search" placeholder="Search..." className="w-full" />
          </div>
        </header>
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
        <footer className="border-t p-4">
          <Input placeholder="Type a message..." className="w-full" />
        </footer>
      </div>
    </div>
  );
};

const ServerList = () => (
  <div className="hidden border-r bg-gray-900 lg:block">
    <div className="flex h-full max-h-screen flex-col gap-2 p-2">
      {[1, 2, 3, 4, 5].map((server) => (
        <Button
          key={server}
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full bg-gray-700"
        >
          S{server}
        </Button>
      ))}
    </div>
  </div>
);

const Sidebar = () => (
  <div className="hidden border-r bg-gray-800 lg:block">
    <div className="flex h-full max-h-screen flex-col">
      <div className="flex h-14 items-center border-b px-6 font-semibold">
        Server Name
      </div>
      <ScrollArea className="flex-1">
        <nav className="grid items-start px-4 text-sm font-medium">
          {navItems.map((item) => (
            <SidebarNavLink key={item.to} to={item.to}>
              {item.icon}
              {item.title}
            </SidebarNavLink>
          ))}
        </nav>
      </ScrollArea>
      <div className="mt-auto p-4">
        <UserMenu />
      </div>
    </div>
  </div>
);

const MobileSidebar = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="flex flex-col p-0">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Server Name</h2>
      </div>
      <ScrollArea className="flex-1">
        <nav className="grid gap-2 p-4 text-lg font-medium">
          {navItems.map((item) => (
            <SidebarNavLink key={item.to} to={item.to}>
              {item.icon}
              {item.title}
            </SidebarNavLink>
          ))}
        </nav>
      </ScrollArea>
      <div className="mt-auto p-4">
        <UserMenu />
      </div>
    </SheetContent>
  </Sheet>
);

const UserMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="w-full justify-start gap-2">
        <CircleUser className="h-5 w-5" />
        <span>Username</span>
        <Settings className="h-4 w-4 ml-auto" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const SidebarNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary text-gray-400",
        isActive && "text-primary bg-gray-700"
      )
    }
  >
    {children}
  </NavLink>
);

export default Layout;