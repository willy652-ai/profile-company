import Image from "next/image";
import { MenuLandingPage } from "./component/landing-page-menu/page";
import { Button } from "@/components/ui/button";
import { LandingPageHero } from "./component/landing-page-hero/page";
import { SearchIcon } from "lucide-react"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

export default function Home() {
  return (
    <main className="relative relative w-full bg-white dark:bg-black">
      <div className="relative z-0 -mt-[96px]"> 
        <LandingPageHero /> 
      </div>
      <div className="absolute top-0 left-0 z-10 w-full flex justify-center">
        <div className="w-[95%] h-[80px] bg-blue-800 dark:bg-blue-800 rounded-[70px] flex mt-4 mx-8 p-4">
          {/* logo */}
          <div className="relative w-[200px] h-[50px] rounded-[70px] items-center justify-start">
            <Image className="p-[7px]" src="/img/smk_mvp_ars_logo_white.png" alt="logo" fill />
          </div>
          {/* menu */}
          <div className="flex flex-1 items-center justify-center">
            <MenuLandingPage />
          </div>
          {/* login */}
          <div className="flex items-center justify-end p-4">
            <Button
              className="
            bg-blue 
            border border-emerald-300 
            text-white 
            hover:bg-blue-100 
            dark:bg-blue-800 
            dark:border-emerald-700 
            dark:text-blue-400
            text-lg
            rounded-full"
              size="lg"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
      <div className="flex z-10 items-center justify-center p-4 bg-white dark:bg-black">
            <Field className="max-w-sm">
      <FieldLabel htmlFor="inline-start-input">Input</FieldLabel>
      <InputGroup>
        <InputGroupInput id="inline-start-input" placeholder="Search..." />
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>Icon positioned at the start.</FieldDescription>
    </Field>
          </div>
    </main>

  );
}