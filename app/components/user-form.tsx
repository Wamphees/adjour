import { useState } from "react";
import { supabase } from "~/lib/supabase";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "~/components/ui/field";

export function CreateUserForm() {
  // États pour les champs requis par votre cahier des charges
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"simpleUser" | "admin">("simpleUser");

  // États pour la gestion de l'interface
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setIsSubmitting(true);

    try {
      // Appel de la Edge Function 'create-user' déployée sur Supabase
      const { data, error } = await supabase.functions.invoke("create-user", {
        method: "POST",
        body: {
          email: email.trim(),
          password: password,
          first_name: firstName.trim(),
          last_name: lastName.trim(),
          phone: phone.trim(),
          role: role,
        },
      });

      if (error || data?.error) {
        throw new Error(error?.message || data?.error);
      }

      // Succès : Affichage du message et réinitialisation des champs du formulaire
      setSuccessMsg(`Utilisateur créé avec succès ! Identifiant généré : ${data.username}`);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setRole("simpleUser");
    } catch (err: any) {
      setErrorMsg(err.message || "Une erreur est survenue lors de la création du compte.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Enregistrer un nouvel employé</CardTitle>
        <CardDescription>
          Créez un compte interne. Le nom d'utilisateur unique au format "nom_prenom" sera calculé automatiquement.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Notifications de statut */}
          {errorMsg && (
            <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md">
              {errorMsg}
            </div>
          )}
          {successMsg && (
            <div className="p-3 text-sm text-green-600 bg-green-50 border border-green-200 rounded-md">
              {successMsg}
            </div>
          )}

          <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Prénom */}
            <Field>
              <FieldLabel htmlFor="firstName">Prénom</FieldLabel>
              <Input
                id="firstName"
                type="text"
                placeholder="Ex: Jean"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </Field>

            {/* Nom */}
            <Field>
              <FieldLabel htmlFor="lastName">Nom de famille</FieldLabel>
              <Input
                id="lastName"
                type="text"
                placeholder="Ex: Dupont"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </Field>

            {/* Email */}
            <Field>
              <FieldLabel htmlFor="email">Adresse Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="Ex: j.dupont@adjour.cm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Field>

            {/* Téléphone */}
            <Field>
              <FieldLabel htmlFor="phone">Numéro de téléphone</FieldLabel>
              <Input
                id="phone"
                type="text"
                placeholder="Ex: +237 6xx xx xx xx"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Field>

            {/* Mot de passe initial */}
            <Field>
              <FieldLabel htmlFor="password">Mot de passe temporaire</FieldLabel>
              <Input
                id="password"
                type="password"
                placeholder="Minimum 6 caractères"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Field>

            {/* Rôle de l'utilisateur dans l'entreprise */}
            <Field>
              <FieldLabel htmlFor="role">Rôle d'accès</FieldLabel>
              <Select
  value={role}
  onValueChange={(value) => {
    if (value) {
      setRole(value);
    }
  }}
>
                <SelectTrigger id="role" className="w-full">
                  <SelectValue placeholder="Sélectionnez un rôle" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="simpleUser">Utilisateur Standard (simpleUser)</SelectItem>
                  <SelectItem value="admin">Administrateur (admin)</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>

          {/* Bouton de soumission */}
          <div className="flex justify-end pt-2">
            <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
              {isSubmitting ? "Création en cours..." : "Créer le compte employé"}
            </Button>
          </div>

        </form>
      </CardContent>
    </Card>
  );
}
