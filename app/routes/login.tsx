import { LoginForm } from "~/components/login-form"
import defaultLoginForm from "../assets/adjour_livraison_form.png"

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <LoginForm imageSrc={defaultLoginForm} imageAlt="Login image" />
      </div>
    </div>
  )
}
