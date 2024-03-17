import { Button } from "./ui/button";
/**
 * @todo Login button is currenlty commented !
 * @returns ReactNode
 */
export default function NavBar() {
  return (
    <div className="flex flex-col dark">
      <div className="flex flex-row justify-evently gap-4 h-10 m-5 p-2">
        <h1 className="text-[18px] leading-8">GDSC WoW</h1>
        {/* <Button variant={'outline'}>Login</Button> */}
      </div>
      <hr className="bg-white"/>
    </div>
  );
}
