import { redirect } from "next/navigation"

export default function HomePage() {
  // Redireciona para a versão Itaquera por padrão
  redirect("/itaquera")
}
