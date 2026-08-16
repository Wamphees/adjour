import { SignupForm } from "~/components/signup-form"
import defaultSignupForm from "../assets/adjour_livraison_form.png"

export default function SignupPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <SignupForm imageSrc={defaultSignupForm} imageAlt="Signup image adjour" />
      </div>
    </div>
  )
}
