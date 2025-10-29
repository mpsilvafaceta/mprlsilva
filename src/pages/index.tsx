import Header from "@/components/header";
import { FaRegHandshake } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { PiSuitcaseSimple } from "react-icons/pi";
import { AiOutlinePicture } from "react-icons/ai";
import Footer from "@/components/footer";
import { useState } from "react";


export default function Home() {
  const [selectedTab, setSelectedTab] = useState("formacao");
  const [expandedTabs, setExpandedTabs] = useState({
    formacao: false,
    eventos: false,
    publicacoes: false,
  });

type TabKey = "formacao" | "eventos" | "publicacoes";

const toggleExpand = (tab: TabKey) => {
  setExpandedTabs((prev) => ({ ...prev, [tab]: !prev[tab] }));
};
  
  return (
    <main className="w-full font-poppins flex flex-col">
      <Header/>
      <div className="lg:justify-center  flex flex-col gap-6 items-center">
        <div className="w-full">
          <div id="inicio" className="bg-[url('/image%20hero%201.svg')] bg-cover flex justify-center">
            <div className="w-full max-w-[1440px] p-4 lg:px-[96px] lg:py-[202px]">
              <div className="lg:max-w-[752px] flex flex-col justify-start gap-6">
                <div className="flex flex-col gap-4 text-white">
                  <p className="text-[26px] lg:text-[40px] leading-[32px] lg:leading-[52px]">
                    Estratégia, Inovação e Impacto. Transforme o futuro da sua empresa com consultoria especializada e insights de liderança.
                  </p>
                  <p className="text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] lg:max-w-[612px]">
                    Entre em contato para consultorias estratégicas, conselhos executivos ou convites para palestras e aulas.
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                  <a href="https://wa.me/5521964757037?text=Olá,%20gostaria%20de%20entrar%20em%20contato%20para%20consultorias%20estratégicas,%20conselhos%20executivos%20ou%20convites%20para%20palestras%20e%20aulas" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-[#BEDDFF] flex items-center justify-center border-azul text-azul px-4 py-3 rounded-[4px]">
                    Entrar em Contato
                  </a>
                  <a href="#sobre-mim" className="bg-azul hover:bg-white flex items-center justify-center border border-white text-white hover:text-azul px-4 py-3 rounded-[4px]">
                    Saber mais
                  </a>
                </div>
              </div>

            </div>
          </div>
          <div id="sobre-mim" className="bg-[#EFF6FF] flex justify-center">
            <div className="w-full max-w-[1440px] p-4 lg:py-[64px] lg:pt-[64px] lg:px-[96px] flex flex-col gap-8 lg:gap-[64px]">
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="flex w-full lg:max-w-[402px] justify-center">
                    <img className="flex lg:hidden" src="/IMG_6388 2 (3).svg" alt="" />
                    <img className="lg:flex hidden" src="/IMG_6388 2 (4).svg" alt="" />
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col">
                      <p className="text-azul text-[16px] leading-[24px]">Sobre mim</p>
                      <p className="text-azul text-[26px] leading-[32px] lg:text-[32px] lg:leading-[40px] text-justify">Torna-te quem tu és — para mudar o que precisa</p>
                    </div>
                    <p className="text-azul text-[16px] leading-[24px] lg:leading-[22px] text-justify">
                      Sou Marcos Silva, um líder com mais de 30 anos de experiência sólida e comprovada em tecnologia, gestão estratégica, inovação, transformação digital e inteligência artificial.
                      <br /><br />
                      Ao longo da carreira, atuei na liderança de projetos, transformando desafios complexos em resultados tangíveis - modernizando operações, otimizando processos e criando valor real para empresas e pessoas.
                      <br /><br />
                      Como CIO (Chief Information Officer), minha missão é conectar estratégia e execução, tecnologia e propósito, sempre com foco em entregar soluções que gerem impacto e sustentem o crescimento organizacional.
                      <br /><br />
                      Por acreditar que conhecimento só tem valor quando é compartilhado, dedico parte do meu tempo a palestras e aulas, levando à prática o que vivi em campo. Nesses espaços, discuto temas essenciais para o futuro dos negócios — liderança, inovação, transformação digital e o papel da inteligência artificial na construção de organizações mais humanas e eficientes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 lg:px-10">
                <div>
                  <p className="text-center text-azul text-[32px] leading-[40px] lg:text-[40px] lg:leading-[52px]">Como posso contribuir para a evolução do seu Negócio</p>
                </div>
                <div className="flex flex-col lg:flex-row text-center">
                  <div className="flex flex-col p-4 gap-4 flex-1">
                    <p className="text-azul text-[22px] leading-[32px]">Participação em Conselhos</p>
                    <p className="text-azul text-[16px] leading-[24px]">Participação em Conselhos - Contribuindo com uma visão estratégica orientada à inovação, tecnologia e sustentabilidade corporativa.</p>
                  </div>
                  <div className="flex lg:hidden bg-azul w-full h-[2px]"></div>
                  <div className="hidden lg:flex bg-azul w-[2px] h-full"></div>
                  <div className="flex flex-col p-4 gap-4 flex-1">
                    <p className="text-azul text-[22px] leading-[32px]">Palestras e Aulas</p>
                    <p className="text-azul text-[16px] leading-[24px]">Conhecimento que inspira transformação - Palestras e aulas voltadas a líderes, estudantes e equipes que desejam compreender e aplicar os pilares da inovação, transformação digital e inteligência artificial.</p>
                  </div>
                  <div className="flex lg:hidden bg-azul w-full h-[2px]"></div>
                  <div className="hidden lg:flex bg-azul w-[2px] h-full"></div>
                  <div className="flex flex-col p-4 gap-4 flex-1">
                    <p className="text-azul text-[22px] leading-[32px]">Consultoria Estratégica</p>
                    <p className="text-azul text-[16px] leading-[24px]">Estratégia, tecnologia e impacto em movimento - Empresas que buscam evoluir seus modelos de negócio, redesenhar processos e gerar valor sustentável por meio da tecnologia e da inovação.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10 p-4 border border-azul rounded-[10px]">
                <div className="flex justify-center lg:justify-start gap-4">
                  <div className="flex-shrink-0 w-[100px] h-[100px]">
                    <img
                      className="w-full h-full object-contain"
                      src="/dama_international007_logo 1.svg"
                      alt="Logo DAMA"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-[22px] leading-[32px] text-azul">
                      Membro da DAMA International – The Global Data Management Community
                    </p>
                    <p className="text-[16px] leading-[24px] text-[#333333]">
                      Com sólida experiência em tecnologia e inovação, tenho aprofundado minha atuação em gestão e governança de dados, alinhando práticas globais às necessidades estratégicas das organizações. A filiação à DAMA International reforça o acesso às melhores práticas, frameworks reconhecidos e insights de especialistas, garantindo uma abordagem de excelência em data management.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-start gap-4">
                  <div className="flex-shrink-0 w-[100px] h-[100px]">
                    <img
                      className="w-full h-full object-contain"
                      src="/journal_of_the_operational_research_society_logo 1.svg"
                      alt="Logo DAMA"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-[22px] leading-[32px] text-azul">
                      Membro da The Operational Research Society (ORS)
                    </p>
                    <p className="text-[16px] leading-[24px] text-[#333333]">
                      Ser membro da Operational Research Society (ORS) fortalece minha capacidade de aplicar metodologias avançadas de Pesquisa Operacional para gerar impacto estratégico nas organizações, otimizando processos complexos, reduzindo custos, melhorando a alocação de recursos e aumentando a eficiência operacional. A associação oferece acesso a pesquisas de ponta, frameworks reconhecidos e eventos especializados, garantindo que a análise de dados e modelos quantitativos estejam alinhados às melhores práticas globais.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div id="experiencia" className="bg-azul flex justify-center">
            <div className="w-full max-w-[1440px] lg:py-[64px] p-4 lg:px-[96px] bg-azul flex flex-col gap-8 justify-center">
              <div className="flex flex-col w-full gap-6 ">
                <p className="text-[32px] leading-[40px] text-white">Projetos de Liderança em Inovação e Transformação Digital</p>
                <p className="text-[20px] leading-[28px] text-white">Ao longo da minha trajetória como executivo de tecnologia e inovação, liderei projetos estratégicos voltados à transformação digital, uso de dados em larga escala e integração de novas tecnologias em setores complexos, como logística marítima, educação e economia digital. A seguir, destaco algumas dessas iniciativas que refletem minha experiência na criação de valor, eficiência operacional e inovação aplicada.</p>
              </div>
              <div className="flex flex-col gap-[22px]">
                <div className="flex gap-6 bg-white px-[26px] py-[34px] rounded-[6px]">
                  <div className="flex flex-col gap-4">
                    <p className="text-[22px] leading-[32px] text-azul">Laboratório de Inovação Tecnológica</p>
                    <p className="text-[16px] leading-[22px] text-azul"><span className="font-bold">Resumo: </span>Estrutura corporativa voltada à pesquisa aplicada e inovação digital.</p>
                    <p className="text-[16px] leading-[22px] text-azul">Liderei a criação de um laboratório de inovação dedicado a aplicar tecnologias emergentes — como Inteligência Artificial, automação e análise de dados — na modernização de processos corporativos. A iniciativa integrou pesquisa aplicada, desenvolvimento de protótipos e parcerias estratégicas, posicionando a organização na vanguarda da transformação digital e fortalecendo sua competitividade tecnológica e operacional.</p>
                  </div>
                </div>
                <div className="flex gap-6 bg-white px-[26px] py-[34px] rounded-[6px]">
                  <div className="flex flex-col gap-4">
                    <p className="text-[22px] leading-[32px] text-azul">Portal Estratégico de Conteúdo Setorial</p>
                    <p className="text-[16px] leading-[22px] text-azul"><span className="font-bold">Resumo: </span>Hub de inteligência e tendências em transformação digital.</p>
                    <p className="text-[16px] leading-[22px] text-azul">Conduzi o desenvolvimento de um portal corporativo de notícias e análises estratégicas, voltado à difusão de conhecimento sobre inovação, automação e sustentabilidade. O projeto conectou executivos e especialistas, traduzindo o impacto da digitalização em insights práticos e consolidando o portal como uma referência de inteligência setorial.</p>
                  </div>
                </div>
                <div className="flex gap-6 bg-white px-[26px] py-[34px] rounded-[6px]">
                  <div className="flex flex-col gap-4">
                    <p className="text-[22px] leading-[32px] text-azul">Conferência Internacional de Inovação e Tecnologia</p>
                    <p className="text-[16px] leading-[22px] text-azul"><span className="font-bold">Resumo: </span>Evento corporativo para integração entre academia e mercado.</p>
                    <p className="text-[16px] leading-[22px] text-azul">Idealizei e liderei a organização de uma conferência internacional sobre inovação tecnológica, reunindo especialistas em Inteligência Artificial, Pesquisa Operacional e transformação digital. O evento se tornou um espaço de referência para discutir tendências e compartilhar práticas de eficiência e otimização em operações complexas, aproximando teoria, tecnologia e estratégia empresarial.</p>
                  </div>
                </div>
                <div className="flex gap-6 bg-white px-[26px] py-[34px] rounded-[6px]">
                  <div className="flex flex-col gap-4">
                    <p className="text-[22px] leading-[32px] text-azul">Estratégia de Internacionalização Digital</p>
                    <p className="text-[16px] leading-[22px] text-azul"><span className="font-bold">Resumo: </span>Estrutura corporativa voltada à pesquisa aplicada e inovação digital.</p>
                    <p className="text-[16px] leading-[22px] text-azul">Coordenei uma estratégia de internacionalização digital, incorporando soluções de análise de dados, cloud computing e inteligência artificial para otimizar a atuação da organização em novos mercados. A iniciativa resultou em eficiência operacional, personalização de atendimento e maior alcance global, transformando a expansão internacional em um processo ágil e orientado por dados.</p>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center text-center">
                <a href="https://wa.me/5521964757037?text=Olá,%20gostaria%20de%20entrar%20em%20contato%20para%20consultorias%20estratégicas,%20conselhos%20executivos%20ou%20convites%20para%20palestras%20e%20aulas" target="_blank" rel="noopener noreferrer" className="bg-azul-claro hover:bg-white text-white hover:text-azul w-full max-w-[524px] py-3 rounded-[4px]">
                  Entrar em contato agora
                </a>
              </div>
            </div>
          </div>
          <div id="educacao" className="bg-[#EFF6FF] flex justify-center">
            <div className="w-full max-w-[1440px] p-4 lg:py-[64px] lg:px-[96px] flex flex-col gap-8 justify-center">
              <div className="w-gull flex justify-start">
                <p className="text-[32px] leading-[42px] text-azul font-bold">Educação</p>
              </div>
              <div className="flex flex-col lg:justify-between lg:flex-row gap-4 text-[22px] leading-[32px]">
                <div className="flex flex-col gap-6 lg:w-[348px]">
                  <button
                    onClick={() => setSelectedTab("formacao")}
                    className={`text-left ${
                      selectedTab === "formacao"
                        ? "text-[#7BBCFE]"
                        : "text-[#737373] hover:text-azul"
                    }`}
                  >
                    Formação Acadêmica
                  </button>
                  <button
                    onClick={() => setSelectedTab("eventos")}
                    className={`text-left ${
                      selectedTab === "eventos"
                        ? "text-[#7BBCFE]"
                        : "text-[#737373] hover:text-azul"
                    }`}
                  >
                    Eventos de Relevância Profissional
                  </button>

                  <button
                    onClick={() => setSelectedTab("publicacoes")}
                    className={`text-left ${
                      selectedTab === "publicacoes"
                        ? "text-[#7BBCFE]"
                        : "text-[#737373] hover:text-azul"
                    }`}
                  >
                    Publicações e Produções Acadêmicas
                  </button>
                </div>
                {selectedTab === "formacao" && (
                  <div className="flex flex-col gap-5 lg:w-[720px]">
                    <div className="flex flex-col gap-6">
                      <p className="text-[#7BBCFE] text-[32px] leading-[40px]">Formação Acadêmica e Executiva</p>
                      <p className="text-[#333333] text-[16px] leading-[22px]">Minha formação acadêmica reflete uma trajetória voltada à excelência em gestão, inovação e governança corporativa, combinando experiência executiva com sólida base acadêmica. Ao longo dos anos, investi consistentemente no aperfeiçoamento técnico e estratégico, com foco em tomada de decisão, otimização de processos e liderança em ambientes digitais e complexos.</p>
                    </div>
                    <div className="flex lg:flex-row flex-col py-5 gap-5">
                      <div className="flex flex-[1] flex-col gap-5">
                        <p className="text-azul font-bold text-[22px] leading-[32px]">ISE Business School</p>
                      </div>
                      <div className="flex flex-col gap-6 flex-[2]">
                        <p className="text-[#333333] font-bold text-[16px] leading-[24px]">Resumo: Formação executiva voltada à atuação estratégica em conselhos de administração.</p>
                        <p className="text-azul  text-[16px] leading-[24px]">Programa avançado de desenvolvimento de líderes e conselheiros corporativos, com foco em governança, ética empresarial, sucessão e tomada de decisão estratégica. A formação fortalece competências essenciais para atuação em Boards e Advisory Boards, aprimorando a visão de longo prazo e a capacidade de direcionar organizações em cenários de alta complexidade.</p>
                      </div>
                    </div>
                    <div className="h-[1px] bg-[#E7E7E6]"></div>
                    <div className="flex lg:flex-row flex-col py-5 gap-5">
                      <div className="flex flex-[1] flex-col gap-5">
                        <p className="text-azul font-bold text-[22px] leading-[32px] ">Universidade Federal Fluminense – Mestrado em Engenharia de Produção</p>
                      </div>
                      <div className="flex flex-col gap-6 flex-[2]">
                        <p className="text-[#333333] font-bold text-[16px] leading-[24px]">Resumo: Pesquisa aplicada em otimização de processos e tomada de decisão estratégica.</p>
                        <p className="text-azul  text-[16px] leading-[24px]">Mestrado stricto sensu com ênfase em Otimização de Processos, Planejamento Estratégico e Métodos Multicritério de Apoio à Decisão (MCDA). A pesquisa acadêmica alia modelos quantitativos, inovação tecnológica e análise de dados para aprimorar a eficiência corporativa e sustentar decisões em contextos incertos, reforçando a integração entre ciência e gestão.</p>
                      </div>
                    </div>
                    <div className="h-[1px] bg-[#E7E7E6]"></div>
                    <div className="flex lg:flex-row flex-col py-5 gap-5">
                      <div className="flex flex-[1] flex-col gap-5">
                        <p className="text-azul font-bold text-[22px] leading-[32px] ">Ibmec – MBA em CIO & IT Management</p>
                      </div>
                      <div className="flex flex-col gap-6 flex-[2]">
                        <p className="text-[#333333] font-bold text-[16px] leading-[24px]">Resumo: Especialização executiva em liderança tecnológica e gestão da transformação digital.</p>
                        <p className="text-azul  text-[16px] leading-[24px]">Formação voltada à gestão estratégica de tecnologia da informação, capacitando executivos para liderar projetos de inovação, governança de TI e modernização de processos corporativos. O curso fortalece competências em planejamento tecnológico, gestão de times de alta performance e alinhamento entre TI e objetivos de negócio.</p>
                      </div>
                    </div>
                    <div className="h-[1px] bg-[#E7E7E6]"></div>
                    <div className="flex lg:flex-row flex-col py-5 gap-5">
                      <div className="flex flex-[1] flex-col gap-5">
                        <p className="text-azul font-bold text-[22px] leading-[32px] ">Business School Brasil – MBA em Pesquisa Operacional e Tomada de Decisão</p>
                      </div>
                      <div className="flex flex-col gap-6 flex-[2]">
                        <p className="text-[#333333] font-bold text-[16px] leading-[24px]">Resumo: Aplicação de modelos analíticos e preditivos para decisões corporativas complexas.</p>
                        <p className="text-azul  text-[16px] leading-[24px]">MBA direcionado à aplicação de Pesquisa Operacional e Métodos Quantitativos em contextos empresariais, com foco em otimização de recursos, análise de cenários e eficiência organizacional. O programa reforça a capacidade de traduzir dados em estratégia, apoiando líderes na construção de soluções inteligentes e baseadas em evidências.</p>
                      </div>
                    </div>
                    {expandedTabs.formacao && (
                      <div className="flex flex-col gap-10">
                        <div className="flex lg:flex-row flex-col py-5 gap-5">
                          <div className="flex flex-[1] flex-col gap-5">
                            <p className="text-azul font-bold text-[22px] leading-[32px] ">Unileya – MBA em Shipping e Gestão Portuária</p>
                          </div>
                          <div className="flex flex-col gap-6 flex-[2]">
                            <p className="text-[#333333] font-bold text-[16px] leading-[24px]">Resumo: Especialização executiva em comércio marítimo e logística internacional.</p>
                            <p className="text-azul  text-[16px] leading-[24px]">MBA que aborda de forma integrada os aspectos operacionais, estratégicos e regulatórios do setor marítimo, com foco em eficiência logística e sustentabilidade portuária. A formação fortalece a visão executiva sobre cadeias globais de suprimentos, governança portuária e inovação no transporte marítimo.</p>
                          </div>
                        </div>
                        <div className="flex lg:flex-row flex-col py-5 gap-5">
                          <div className="flex flex-[1] flex-col gap-5">
                            <p className="text-azul font-bold text-[22px] leading-[32px] ">Pontifícia Universidade Católica do Rio de Janeiro – BI Master</p>
                          </div>
                          <div className="flex flex-col gap-6 flex-[2]">
                            <p className="text-[#333333] font-bold text-[16px] leading-[24px]">Resumo: Pós-graduação em Business Intelligence e sistemas de apoio à decisão.</p>
                            <p className="text-azul  text-[16px] leading-[24px]">Programa voltado ao desenvolvimento de competências em análise de dados, modelagem de indicadores e suporte à decisão empresarial. A formação consolidou o domínio de tecnologias de BI e data analytics, fundamentais para impulsionar a transformação digital e a inteligência estratégica nas organizações.</p>
                          </div>
                        </div>
                        <div className="flex lg:flex-row flex-col py-5 gap-5">
                          <div className="flex flex-[1] flex-col gap-5">
                            <p className="text-azul font-bold text-[22px] leading-[32px] ">Universidade Federal  do Rio de Janeiro – Bacharelado em Administração</p>
                          </div>
                          <div className="flex flex-col gap-6 flex-[2]">
                            <p className="text-[#333333] font-bold text-[16px] leading-[24px]">Resumo: Formação de base em gestão empresarial, estratégia e finanças corporativas.</p>
                            <p className="text-azul  text-[16px] leading-[24px]">Graduação em Administração, com foco em fundamentos de gestão, economia e planejamento estratégico. A formação serviu como alicerce para uma trajetória executiva pautada em governança, inovação e liderança organizacional, consolidando a visão sistêmica necessária para conduzir projetos de grande porte.</p>
                          </div>
                        </div>
                        <div className="flex lg:flex-row flex-col py-5 gap-5">
                          <div className="flex flex-[1] flex-col gap-5">
                            <p className="text-azul font-bold text-[22px] leading-[32px] ">Organização das Nações Unidas (ONU) – Empretec Program</p>
                          </div>
                          <div className="flex flex-col gap-6 flex-[2]">
                            <p className="text-[#333333] font-bold text-[16px] leading-[24px]">Resumo: Programa internacional de desenvolvimento de comportamento empreendedor.</p>
                            <p className="text-azul  text-[16px] leading-[24px]">Treinamento intensivo da ONU voltado à formação de líderes e empreendedores de alto desempenho, com ênfase em autogestão, inovação e mentalidade de crescimento. A experiência reforçou competências em resiliência, iniciativa e execução estratégica, aplicadas ao contexto corporativo e de inovação tecnológica.</p>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="h-[1px] bg-[#E7E7E6]"></div>
                    <button
                      onClick={() => toggleExpand("formacao")}
                      className="flex justify-center items-center rounded-[4px] border border-azul bg-white text-azul w-full py-2 hover:bg-[#BEDDFF]"
                    >
                  {expandedTabs.formacao ? "Ver menos" : "Ver tudo"}
                </button>
                  </div>
                )}
                {selectedTab === "eventos" && (
                  <div className="flex flex-col gap-5 lg:w-[720px]">
                    <div className="flex flex-col gap-6">
                      <p className="text-[#7BBCFE] text-[32px] leading-[40px]">Eventos de Relevância Profissional</p>
                      <p className="text-[#333333] text-[16px] leading-[22px]">Minha trajetória inclui participação e protagonismo em eventos nacionais e internacionais voltados à logística marítima, inovação tecnológica, pesquisa operacional e transformação digital. Essas experiências reforçam minha atuação como executivo e pesquisador, com presença ativa em fóruns estratégicos e acadêmicos de alto impacto.</p>
                    </div>
                    <div className="flex flex-col py-5 gap-5">
                      <div className="flex items-center lg:flex-row flex-col gap-5">
                        <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] max-w-[348px] rounded-[4px] h-[240px]">
                          <p className="text-azul text-[20px] leading-[28px]">
                            London International Shipping Week 2025 – Reino Unido
                          </p>
                          <p className="text-[#333333] text-[16px] leading-[24px]">
                            Participação em um dos principais eventos globais sobre transporte marítimo e inovação logística.
                          </p>
                        </div>
                        <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] max-w-[348px] rounded-[4px] h-[240px]">
                          <p className="text-azul text-[20px] leading-[28px]">
                            IMO Conference – London International Shipping Week 2025
                          </p>
                          <p className="text-[#333333] text-[16px] leading-[24px]">
                            Participação na conferência oficial da Organização Marítima Internacional (IMO) com foco em sustentabilidade e digitalização do setor marítimo.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center lg:flex-row flex-col gap-5">
                        <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] max-w-[348px] rounded-[4px] h-[240px]">
                          <p className="text-azul text-[20px] leading-[28px]">
                            Seminário “O Novo Processo de Importação – DUIMP” 2024
                          </p>
                          <p className="text-[#333333] text-[16px] leading-[24px]">
                            Participação em fórum técnico sobre modernização e integração digital no comércio exterior brasileiro.
                          </p>
                        </div>
                        <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] max-w-[348px] rounded-[4px] h-[240px]">
                          <p className="text-azul text-[20px] leading-[28px]">
                            DataSmart Shipping 2025 – Palestrante Convidado
                          </p>
                          <p className="text-[#333333] text-[16px] leading-[24px]">
                            Apresentação sobre o impacto da Inteligência Artificial e Pesquisa Operacional na transformação digital da logística marítima.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center lg:flex-row flex-col gap-5">
                        <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] max-w-[348px] rounded-[4px] h-[240px]">
                          <p className="text-azul text-[20px] leading-[28px]">
                            Seminário Internacional OEA 2025
                          </p>
                          <p className="text-[#333333] text-[16px] leading-[24px]">
                            Participação em evento sobre certificação de operadores econômicos autorizados e eficiência logística global.
                          </p>
                        </div>
                        <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] max-w-[348px] rounded-[4px] h-[240px]">
                          <p className="text-azul text-[20px] leading-[28px]">
                            Fórum ILOS 2025
                          </p>
                          <p className="text-[#333333] text-[16px] leading-[24px]">
                            Participação em fórum de referência em logística e supply chain, discutindo tendências tecnológicas e estratégias de mercado.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center lg:flex-row flex-col gap-5">
                        <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] max-w-[348px] rounded-[4px] h-[240px]">
                          <p className="text-azul text-[20px] leading-[28px]">
                            Fórum ILOS 2024
                          </p>
                          <p className="text-[#333333] text-[16px] leading-[24px]">
                            Participação em debates sobre inovação e competitividade no setor logístico brasileiro.
                          </p>
                        </div>
                        <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] max-w-[348px] rounded-[4px] h-[240px]">
                          <p className="text-azul text-[20px] leading-[28px]">
                            Intermodal South America 2024
                          </p>
                          <p className="text-[#333333] text-[16px] leading-[24px]">
                            Participação em feira internacional de transporte e comércio exterior, com foco em automação e eficiência operacional.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center lg:flex-row flex-col gap-5">
                        <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] max-w-[348px] rounded-[4px] h-[240px]">
                          <p className="text-azul text-[20px] leading-[28px]">
                            Data & AI Forum – Oracle Brasil
                          </p>
                          <p className="text-[#333333] text-[16px] leading-[24px]">
                            Participação em fórum corporativo sobre aplicações de dados e inteligência artificial no contexto empresarial.
                          </p>
                        </div>
                        <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] max-w-[348px] rounded-[4px] h-[240px]">
                          <p className="text-azul text-[20px] leading-[28px]">
                            Dataliner Seminar 2023 – Palestrante Convidado
                          </p>
                          <p className="text-[#333333] text-[16px] leading-[24px]">
                            Apresentação sobre tendências em digitalização e análise de dados na cadeia logística marítima.
                          </p>
                        </div>
                      </div>
                        {expandedTabs.eventos && (
                          <div className="flex flex-col gap-5">
                            <div className="flex items-center lg:flex-row flex-col gap-5">
                              <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] max-w-[348px] rounded-[4px] h-[240px]">
                                <p className="text-azul text-[20px] leading-[28px]">
                                  Dataliner Seminar OTIs – Ocean Transport Intermediaries 2023
                                </p>
                                <p className="text-[#333333] text-[16px] leading-[24px]">
                                  Palestra sobre transformação digital e uso de dados para otimização de intermediários de transporte marítimo.
                                </p>
                              </div>
                              <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] max-w-[348px] rounded-[4px] h-[240px]">
                                <p className="text-azul text-[20px] leading-[28px]">
                                  Dataliner Seminar Exporters & Importers 2023
                                </p>
                                <p className="text-[#333333] text-[16px] leading-[24px]">
                                  Palestrante convidado em painel sobre inovação tecnológica e eficiência na operação de exportadores e importadores.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center lg:flex-row flex-col gap-5">
                              <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] max-w-[348px] rounded-[4px] h-[240px]">
                                <p className="text-azul text-[20px] leading-[28px]">
                                  AWS Summit 2023 – São Paulo
                                </p>
                                <p className="text-[#333333] text-[16px] leading-[24px]">
                                  Participação em evento global sobre computação em nuvem, inovação e transformação digital corporativa.
                                </p>
                              </div>
                              <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] max-w-[348px] rounded-[4px] h-[240px]">
                                <p className="text-azul text-[20px] leading-[28px]">
                                  Microsoft  Event 2023
                                </p>
                                <p className="text-[#333333] text-[16px] leading-[24px]">
                                  Participação em encontro voltado à adoção de tecnologias Microsoft para modernização de processos empresariais.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center lg:flex-row flex-col gap-5">
                              <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] max-w-[348px] rounded-[4px] h-[240px]">
                                <p className="text-azul text-[20px] leading-[28px]">
                                  Minitab Exchange Brasil 2023
                                </p>
                                <p className="text-[#333333] text-[16px] leading-[24px]">
                                  Participação em conferência sobre estatística aplicada, análise de dados e melhoria contínua em processos corporativos.
                                </p>
                              </div>
                              <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] max-w-[348px] rounded-[4px] h-[240px]">
                                <p className="text-azul text-[20px] leading-[28px]">
                                  Intermodal South America 2023
                                </p>
                                <p className="text-[#333333] text-[16px] leading-[24px]">
                                  Participação em evento técnico de transporte e comércio exterior, com foco em digitalização e integração logística.
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      <button
                        onClick={() => toggleExpand("eventos")}
                        className="flex justify-center items-center rounded-[4px] border border-azul bg-white text-azul w-full py-2 hover:bg-[#BEDDFF]"
                      >
                        {expandedTabs.eventos ? "Ver menos" : "Ver tudo"}
                      </button>
                    </div>
                  </div>
                )}
                {selectedTab === "publicacoes" && (
                  <div className="flex flex-col gap-5 lg:w-[720px]">
                    <div className="flex flex-col gap-6">
                      <p className="text-[#7BBCFE] text-[32px] leading-[40px]">Publicações e Produções Acadêmicas</p>
                      <p className="text-[#333333] text-[16px] leading-[22px]">Minhas publicações refletem o compromisso em integrar a prática executiva com a pesquisa científica, explorando temas como inovação tecnológica, logística marítima, inteligência artificial e métodos multicritério de decisão. Cada artigo representa um passo na construção de conhecimento aplicado, voltado a aprimorar a gestão e a competitividade no setor marítimo e logístico.</p>
                    </div>
                    <div className="flex flex-col py-5 gap-5">
                      <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] w-full rounded-[4px]">
                        <p className="text-azul text-[20px] leading-[28px]">
                          Publicação Científica - SBPO 2025 – Sociedade Brasileira de Pesquisa Operacional - Priorização no Desenvolvimento de Produtos Digitais alinhados às OKRs Corporativas a partir do Método SAPEVO-H2
                        </p>
                        <p className="text-[#333333] text-[16px] leading-[24px]">
                          O artigo propõe um modelo que integra o framework OKR ao método multicritério SAPEVO-H2 para apoiar a priorização de projetos digitais alinhados aos objetivos organizacionais. 
                        </p>
                      </div>
                      <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] w-full rounded-[4px]">
                        <p className="text-azul text-[20px] leading-[28px]">
                          Publicação Científica -Congresso Nacional de Excelência em Gestão & INOVARSE (2025)–  Competitividade Sustentável na Indústria Naval e Offshore Brasileira: Uma Análise Integrada de Ferramentas Estratégicas Aplicadas ao Programa TP 25
                        </p>
                        <p className="text-[#333333] text-[16px] leading-[24px]">
                          O artigo  propõe um quadro metodológico inovador, combinando cinco ferramentas estratégicas (SWOT, Porter, BCG, PESTEL e Timeline), para identificar fatores críticos para a competitividade sustentável do setor, utilizando o TP 25 como estudo de caso.
                        </p>
                      </div>
                      <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] w-full rounded-[4px]">
                        <p className="text-azul text-[20px] leading-[28px]">
                          Publicação Científica -Congresso Nacional de Excelência em Gestão & INOVARSE (2025) –  Programa operador econômico autorizado (OEA) no Brasil: evolução, limitações e caminhos para maior efetividade
                        </p>
                        <p className="text-[#333333] text-[16px] leading-[24px]">
                          Este artigo apresenta uma análise crítica do OEA no Brasil, articulando revisão teórica, experiências internacionais e dados estatísticos oficiais. Os resultados evidenciam avanços relevantes, como a expressiva redução do tempo de desembaraço aduaneiro e o crescimento no número de certificações. 
                        </p>
                      </div>
                      <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] w-full rounded-[4px]">
                        <p className="text-azul text-[20px] leading-[28px]">
                          Publicação Científica - Simpósio de Engenharia de Produção 2024 –  O uso do método de análise hierárquica (AHP) na seleção do banco de dados para um projeto de IT
                        </p>
                        <p className="text-[#333333] text-[16px] leading-[24px]">
                          Apresentação de artigo voltado à aplicação de modelos quantitativos na gestão de processos industriais e logísticos.
                        </p>
                      </div>
                      <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] w-full rounded-[4px]">
                        <p className="text-azul text-[20px] leading-[28px]">
                          Publicação Científica – PSI-CoCoSo Method in Aeromedical Rescue Aircraft Selection (ICMCSI 2024)
                        </p>
                        <p className="text-[#333333] text-[16px] leading-[24px]">
                          Artigo publicado em conferência internacional sobre métodos multicritério aplicados à seleção de aeronaves para resgate offshore. 
                        </p>
                      </div>
                      <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] w-full rounded-[4px]">
                        <p className="text-azul text-[20px] leading-[28px]">
                          Publicação Científica – Assessment of Higher Education Institutions Based on RUF Rankings (ICMCSI 2024)
                        </p>
                        <p className="text-[#333333] text-[16px] leading-[24px]">
                          Estudo publicado em conferência internacional aplicando o método Thor 2 na avaliação de instituições de ensino superior. 
                        </p>
                      </div>
                      <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] w-full rounded-[4px]">
                        <p className="text-azul text-[20px] leading-[28px]">
                          Publicação Científica – PSI-CoCoSo Hybrid Method for Light Fleet Supplier Selection (ICMCSI 2024)
                        </p>
                        <p className="text-[#333333] text-[16px] leading-[24px]">
                          Artigo técnico sobre o uso de métodos híbridos de decisão multicritério para gestão de fornecedores em centros logísticos. 
                        </p>
                      </div>
                      {expandedTabs.publicacoes && (
                        <div className="flex flex-col py-5 gap-5">
                          <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] w-full rounded-[4px]">
                            <p className="text-azul text-[20px] leading-[28px]">
                              Publicação Científica – Evaluation of Imagers for Helicopters of the Military Police (ICMCSI 2024)
                            </p>
                            <p className="text-[#333333] text-[16px] leading-[24px]">
                              Pesquisa aplicada ao uso do método PSI-CoCoSo na avaliação de equipamentos ópticos para aviação policial.
                            </p>
                          </div>
                          <div className="bg-white flex flex-1 flex-col gap-5 p-3 border border-[#E6E6E6] w-full rounded-[4px]">
                            <p className="text-azul text-[20px] leading-[28px]">
                              Publicação Científica – PSI-SPOTIS Hybrid Method for Ranking the Best Companies to Work For (ICMCSI 2024)
                            </p>
                            <p className="text-[#333333] text-[16px] leading-[24px]">
                              Estudo multicritério inédito sobre avaliação organizacional e clima corporativo, apresentado em conferência internacional.
                            </p>
                          </div>
                        </div>
                      )}
                    <button
                      onClick={() => toggleExpand("publicacoes")}
                      className="flex justify-center items-center rounded-[4px] border border-azul bg-white text-azul w-full py-2 hover:bg-[#BEDDFF]"
                    >
                      {expandedTabs.publicacoes ? "Ver menos" : "Ver tudo"}
                    </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="bg-white flex justify-center">
            <div className="w-full max-w-[1440px] flex flex-col py-4 lg:py-[64px] lg:px-[96px] px-4 items-center  gap-12">
              <div className="flex flex-col gap-6 items-center text-center">
                <p className="text-[32px] leading-[40px] text-azul">Depoimentos</p>
                <p className="text-[20px] leading-[28px] text-[#737373]">Mais do que palavras: a experiência real de quem alcançou resultados.</p>
              </div>
              <div className="flex flex-col lg:flex-row gap-6 lg:justify-center">
                <div className="flex flex-col gap-[22px] border border-[#BEDDFF] w-full rounded-[8px] shadow-[0_2px_10px_1px_rgba(0,0,0,0.1)] p-6">
                  <div className="flex">
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                  </div>
                  <div className="flex flex-col gap-4 text-[#333333]">
                    <p className="text-[16px] leading-[22px]">Ele é um profissional com visão e que acredita no potencial do seu time, buscando sempre apoiar a todos para que alcancemos o nosso melhor, não apenas como equipe, mas também como indivíduos.</p>
                    <p className="text-[16px] leading-[22px]">Sua busca constante por aprimoramento e o desejo incansável de evoluir em tudo o que faz tornam o Marcos não apenas um excelente líder de equipe, mas um verdadeiro mentor e inspiração a todos a sua volta. Ele é um verdadeiro mestre, como gosto de chama-lo.</p>
                  </div>
                  <div className="flex gap-2">
                    <img src="/image 143.svg" alt="" />
                    <div className="flex flex-col">
                      <p className="text-[16px] leading-[24px] text-azul">Keyla Rodrigues</p>
                      <p className="text-[14px] leading-[18px] text-[#737373]">Cloud & Infrastructure Monitoring | Driving Performance & Reliability in Latam</p>
                    </div>
                  </div>

                </div>
                <div className="flex flex-col gap-[22px] border border-[#BEDDFF] w-full rounded-[8px] shadow-[0_2px_10px_1px_rgba(0,0,0,0.1)] p-6">
                  <div className="flex">
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                  </div>
                  <div className="flex flex-col gap-4 text-[#333333]">
                    <p className="text-[16px] leading-[22px]">O Marcos viu em mim um potencial que nem eu mesmo acreditava que tinha e apostou nesse potencial, me dando oportunidades que me fizeram subir muito de patamar em minha carreira. E o que mais me chamava a atenção era o fato de que por mais que os desafios fossem grandes, ele não tinha a menor dúvida de que eu era capaz de superá-los e entregar o que ele queria e a empresa precisava. </p>
                    <p className="text-[16px] leading-[22px]">Então sempre serei muito grato ao Marcos por ter acreditado em mim e me dado a oportunidade de crescer e ser um profissional melhor, representando um verdadeiro marco na minha carreira.</p>
                  </div>
                  <div className="flex gap-2">
                    <img src="/image 144.svg" alt="" />
                    <div className="flex flex-col">
                      <p className="text-[16px] leading-[24px] text-azul">Leonardo Figueiredo</p>
                      <p className="text-[14px] leading-[18px] text-[#737373]">Foreign Affairs Analyst | Data Analyst | Quality Control | Website Administration</p>
                    </div>
                  </div>

                </div>
                <div className="flex flex-col gap-[22px] border border-[#BEDDFF] w-full rounded-[8px] shadow-[0_2px_10px_1px_rgba(0,0,0,0.1)] p-6">
                  <div className="flex">
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                    <img src="/Star.svg" alt="" />
                  </div>
                  <div className="flex flex-col gap-4 text-[#333333]">
                    <p className="text-[16px] leading-[22px]">Suas habilidades vão muito além da parte técnica, possui um forte perfil de liderança, engajando o time facilmente sempre com muito respeito aos diversos perfis profissionais.</p>
                    <p className="text-[16px] leading-[22px]">Durante meu período de transição de cargo na Datamar, Marcos foi uma das peças fundamentais no meu desenvolvimento, trazendo sempre sugestões de soft skill e Hard skill que eu deveria buscar. </p>
                    <p className="text-[16px] leading-[22px]">De Perfil curioso, sempre procurando novas idéias e soluçoes de melhoria para os mais variados processos. Agradeço pela significativa contribuição que teve na minha carreira profissional.</p>
                  </div>
                  <div className="flex gap-2">
                    <img src="/image 145.svg" alt="" />
                    <div className="flex flex-col">
                      <p className="text-[16px] leading-[24px] text-azul">Caísa Oliveira</p>
                      <p className="text-[14px] leading-[18px] text-[#737373]">Auditoria Interna e Externa | SOX | COSO</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
          <div className="bg-[#EFF6FF] flex justify-center">
            <div className="w-full max-w-[1440px] p-4 lg:py-[64px] lg:px-[96px] flex flex-col gap-8 justify-center">
              <div className="flex flex-col items-center gap-[48px]">
                <div className="flex flex-col gap-4 text-center">
                  <p className=" text-azul text-[40px] leading-[52px]">Vamos conversar?</p>
                  <p>Sua dúvida, sugestão ou projeto é importante para nós.</p>
                </div>
                <div className="bg-white border border-[#E1E4ED] p-8 flex flex-col rounded-[6px] gap-8 max-w-[590px]">
                  <p className="text-[#333333] text-[16px] leading-[22px] text-center">Entre em contato através das informações de contato.</p>
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex gap-4">
                      <img className="w-[48px] h-[48px]" src="/Email.svg" alt="" />
                      <div className="flex flex-col gap-2">
                        <p className="text-[#333333] text-[16px] leading-[24px]">E-mail:</p>
                        <p className="text-azul font-medium text-[16px] leading-[22px]">contato@mprlsilva.com</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <img className="w-[48px] h-[48px]" src="/Phone.svg" alt="" />
                      <div className="flex flex-col gap-2">
                        <p className="text-[#333333] text-[16px] leading-[24px]">Telefone:</p>
                        <p className="text-azul font-medium text-[16px] leading-[22px]">+55 (21) 96475-7037</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-azul font-bold text-[22px] leading-[32px] text-center">Siga nas redes sociais</p>
                  <div className="flex gap-4 justify-center">
                      <a className="bg-azul p-1 rounded-[4px]" href="https://www.instagram.com/mprls_silva/" target="_blank" rel="noopener noreferrer">
                          <img src="/1.35 - Social media (2).svg" alt="" />
                      </a>
                      <a className="bg-azul p-1 rounded-[4px]" href="https://www.linkedin.com/in/mprlsilva/" target="_blank" rel="noopener noreferrer">
                          <img src="/1.35 - Social media (3).svg" alt="" />
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white flex justify-center">
            <div className="flex flex-col items-center w-full">
              <div className="w-full bg-[url('/Call%20to%20Action%201.svg')] bg-cover max-w-[1248px] flex flex-col items-center gap-6 px-4 py-10 lg:rounded-[8px]">
                <p className="text-center text-white text-[32px] leading-[40px] w-full max-w-[656px]">Precisa inovar? Vamos planejar sua transformação digital hoje mesmo!</p>
                <a className="text-azul font-medium bg-white rounded-[4px] py-2 px-4 text-[16px] leading-[22px] hover:bg-[#BEDDFF]" href="https://wa.me/5521964757037?text=Olá,%20gostaria%20de%20entrar%20em%20contato%20para%20consultorias%20estratégicas,%20conselhos%20executivos%20ou%20convites%20para%20palestras%20e%20aulas" target="_blank" rel="noopener noreferrer">Agendar consulta agora</a>
              </div>
              <div className="w-full bg-[#E7E7E6]">
                <Footer/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
