
import { BotaoTelefone } from "@/components/grs/button";
import { MainHeader } from "@/components/grs/header";
import { Icons } from "@/components/grs/icon";
import {Alvenaria, ArCondicionado, Drywall, Eletrica, Hidraulica, ReparosGeral,  } from "@/components/grs/section";

export default function Home() {

  return (
    <div  id="menu" className="text-stone-900 flex flex-col items-center m-2">

      <a //Botão menu
       href="#menu" className="fixed bottom-4 right-4 bg-blue-900 text-white px-4 py-2 rounded hover:bg-gray-900 transition">↑ Início 
      </a>

      <MainHeader/>

      <h3 className="font-semibold mt-15 mb-2 text-3xl">Trabalhamos com:</h3>
      <Icons/>

      <div //Sl
      className="font-bold text-4xl flex flex-col items-center m-15">
        <h2>Precisando de ajuda com a reforma de sua residência?</h2>
        <h2 className="text-blue-700">Chama que eu resolvo</h2>
      </div>

      <BotaoTelefone/>

      <div //Forma de trabalho
      className="m-20 flex flex-col space-y-2 text-xl">
        <h2 className="text-3xl font-medium">RS Manutenção e Reformas</h2>

        <p>&nbsp;Na RS Manutenção e Reformas, trabalhamos com projetos em diferentes tipos de imóveis, sempre buscando oferecer soluções práticas e eficientes para nossos clientes. Atendemos tanto residências quanto prédios e comércios, adaptando nossos serviços às necessidades de cada tipo de espaço.
        </p>
        <h1 className="font-semibold">Casas:</h1>
        <li>
        - Nossa equipe está preparada para realizar reformas, manutenções e até construções, sempre focando em melhorar o conforto e a funcionalidade do ambiente, com o cuidado de respeitar as preferências de quem mora no local.
        </li>

        <h1 className="font-semibold">Prédios:</h1>
        <li>
        - Oferecemos serviços de manutenção, reformas e adaptações para condomínios ou empreendimentos maiores. Nosso objetivo é entregar resultados que garantam segurança e qualidade, com respeito aos prazos e orçamentos.
        </li>

        <h1 className="font-semibold">Comércio:</h1>
        <li>
        - Sabemos da importância de um ambiente bem estruturado para os negócios. Trabalhamos em reformas e adequações de espaços comerciais, sempre buscando otimizar a funcionalidade e criar um ambiente que atenda às necessidades dos nossos clientes e de seus consumidores.
        </li>

        <p>     
        &nbsp;Nossa empresa se dedica a entregar um serviço de qualidade, com atenção ao detalhe e sempre dentro do que foi combinado. Estamos prontos para ajudar em qualquer tipo de obra, seja em casa, em prédios ou no comércio.
        </p>
      </div>

      <div className="text-5xl flex flex-col items-center"/*./grs/section*/>
        <Alvenaria/>

        <Eletrica/>

        <Hidraulica/>

        <Drywall/>

        <ArCondicionado/>

        <ReparosGeral/>
      </div>
    </div>
  );
}