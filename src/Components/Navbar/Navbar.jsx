"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

  let userData = authClient.useSession();
  console.log(userData.data?.user)


  let handleSignOut = async() => {
       await authClient.signOut();
  }

  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/allPhotos"}>All Photos</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          <ul className="flex items-center gap-3  text-sm">
            {
              userData.data?.user ? <Image className="rounded-full" alt="userImg" width={90} height={50} src={userData.data?.user.image}></Image>: ''
            }
            {
              userData.data?.user ? 
               <li>
                     <Button onClick={handleSignOut} variant="danger">LogOut</Button>
                 </li> 
            : (<>
                  <li>
                  <Link href={"/signUp"}>SignUp</Link>
              </li>
            <li>
              <Link href={"/logIn"}>SignIn</Link>
            </li>
            
            </>)
            }
           
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;