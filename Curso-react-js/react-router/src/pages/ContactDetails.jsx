import { useParams, useNavigate } from "react-router";

export default function ContactDetails() {
  // 5 - Rotas aninhadas / nested routes utiliza o :id o outro campo
  const { id } = useParams();

  // 6 - Redirecionamento entre páginas na parte da lógica
  const navigate = useNavigate();

  const handleContact = () => {
    console.log("Contato enviado!");
    return navigate("/");
  };
  return (
    <div>
      <h1>Exibindo mais informações do contato: {id}</h1>
      <button onClick={handleContact}>Enviar mensagem</button>
    </div>
  );
}
