import { useEffect } from 'react';
import { ArrowRight, Shield, Clock, Heart, Users, BarChart3, Info, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const portfolio = [
  { company: 'PepsiCo Brasil', theme: 'Saúde Mental no Trabalho: Como melhorar a saúde mental das mulheres líderes', tag: 'Liderança feminina' },
  { company: 'SP Obras', theme: 'Inteligência Emocional e Autorresponsabilidade na Saúde Mental', tag: 'Inteligência emocional' },
  { company: 'Wipro', theme: 'Setembro Amarelo — Prevenção e Diálogo sobre Saúde Mental', tag: 'Setembro amarelo' },
  { company: 'Optima Assessoria · Casa das Alianças', theme: 'Gestão e Prevenção do Estresse e da Ansiedade', tag: 'Estresse & ansiedade' },
  { company: 'Fresenius Kabi Brasil', theme: 'Prevenção ao Estresse, Ansiedade e Burnout', tag: 'Burnout' },
  { company: 'Fresenius Kabi Brasil', theme: 'Inteligência Emocional no Ambiente de Trabalho', tag: 'Inteligência emocional' },
  { company: 'Café Orfeu', theme: 'Saúde Mental e Acidentes de Trabalho: como cuidar do todo para prevenir riscos e promover bem-estar', tag: 'Segurança do trabalho' },
  { company: 'Ishida do Brasil', theme: 'Janeiro Branco — Saúde Mental: cuidar de si para cuidar do outro', tag: 'Janeiro branco' },
];

const temas = [
  { icon: Shield, title: 'Saúde Mental no Trabalho', desc: 'Como criar um ambiente psicologicamente seguro, identificar sinais de sofrimento e promover o bem-estar coletivo.' },
  { icon: Clock, title: 'Burnout: Prevenção e Recuperação', desc: 'Sinais de alerta, fatores de risco no ambiente corporativo e estratégias práticas para prevenir o esgotamento profissional.' },
  { icon: Heart, title: 'Inteligência Emocional', desc: 'Autoconhecimento, empatia, regulação emocional e autorresponsabilidade aplicados à liderança e ao trabalho em equipe.' },
  { icon: Users, title: 'Liderança Feminina e Saúde Mental', desc: 'Desafios específicos das mulheres em posições de liderança, autoestima, síndrome da impostora e equilíbrio emocional.' },
  { icon: BarChart3, title: 'Gestão do Estresse e da Ansiedade', desc: 'Ferramentas práticas de regulação emocional, mindfulness aplicado e técnicas para manter o equilíbrio sob pressão.' },
  { icon: Info, title: 'Setembro Amarelo · Janeiro Branco', desc: 'Campanhas de conscientização conduzidas com sensibilidade clínica, abertura ao diálogo e foco na prevenção e cuidado.' },
];

const formatos = [
  { num: '01', title: 'Presencial', desc: 'Realizado nas instalações da empresa em São Paulo e Grande SP. Inclui dinâmicas, perguntas e interação direta com os colaboradores.' },
  { num: '02', title: 'Online / Ao vivo', desc: 'Via Zoom, Meet ou Teams. Ideal para equipes distribuídas, filiais ou empresas com colaboradores em home office.' },
  { num: '03', title: 'Híbrido', desc: 'Parte da equipe presencial, parte conectada remotamente. Transmissão simultânea com moderação ativa e QnA.' },
];

const publico = [
  'Equipes de RH e Gestão de Pessoas',
  'Líderes e Gestores',
  'Colaboradores em geral',
  'Mulheres em posição de liderança',
  'CIPA e Comissão de SIPAT',
  'Times em alta pressão e metas',
  'Setores de saúde, logística e indústria',
  'Programas de bem-estar corporativo',
];

const Palestras = () => {
  useEffect(() => {
    document.title = 'Palestras de Saúde Mental para Empresas | Angélica Carvalho';
    const meta = document.querySelector('meta[name="description"]');
    const desc = 'Palestras corporativas sobre saúde mental, burnout, ansiedade e inteligência emocional. Empresas como PepsiCo, Wipro e Fresenius Kabi confiaram nesse trabalho.';
    if (meta) meta.setAttribute('content', desc);
    else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = desc;
      document.head.appendChild(m);
    }
  }, []);

  const scrollToContato = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-sage text-primary-foreground py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_20%_80%,hsl(var(--accent))_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,hsl(var(--sage-lighter))_0%,transparent_60%)]" />
        <div className="container mx-auto relative z-10 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-accent mb-5 font-medium">
            Psicóloga Angélica Carvalho · São Paulo
          </p>
          <h1 className="text-4xl md:text-6xl font-light mb-5 leading-tight max-w-3xl mx-auto">
            Palestras de <span className="font-semibold italic">Saúde Mental</span>
            <br />
            para Empresas
          </h1>
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto mb-10 font-light">
            Conteúdo especializado para equipes, líderes e programas de bem-estar corporativo —
            presencial ou online, sempre adaptado à realidade da sua empresa.
          </p>
          <Button
            size="lg"
            className="bg-white text-sage hover:bg-beige"
            onClick={scrollToContato}
          >
            Solicitar orçamento
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-sage/90 text-primary-foreground">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {[
            { num: '8+', label: 'Empresas atendidas' },
            { num: '6', label: 'Temas disponíveis' },
            { num: 'SP', label: 'Presencial + online' },
            { num: 'B2B', label: 'Orçamento personalizado' },
          ].map((s, i) => (
            <div key={i} className="bg-sage py-8 px-4 text-center">
              <div className="text-3xl md:text-4xl font-light text-accent mb-1">{s.num}</div>
              <div className="text-xs opacity-70 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfólio */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-sage-light mb-3 font-medium">Portfólio</p>
            <h2 className="text-3xl md:text-4xl font-light text-sage mb-4">
              Empresas que já confiaram <span className="font-semibold">neste trabalho</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Grandes e médias empresas de setores variados escolheram a psicóloga Angélica Carvalho
              para cuidar da saúde mental de suas equipes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.map((p, i) => (
              <Card key={i} className="border border-border hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-7 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-5 h-0.5 bg-sage-light" />
                    <p className="text-xs tracking-[0.1em] uppercase text-sage-light font-medium">{p.company}</p>
                  </div>
                  <h3 className="text-lg font-medium text-sage leading-snug">{p.theme}</h3>
                  <span className="self-start text-xs px-3 py-1 rounded-full bg-beige text-muted-foreground border border-border">
                    {p.tag}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Temas */}
      <section className="py-20 px-4 bg-sage text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-accent mb-3 font-medium">Temas disponíveis</p>
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              O que posso levar <span className="font-semibold">para a sua empresa</span>
            </h2>
            <p className="opacity-70 max-w-2xl font-light">
              Cada palestra é adaptada ao contexto, setor e público da empresa.
              Conteúdo baseado em evidências, linguagem acessível e alta aplicabilidade no dia a dia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {temas.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <t.icon className="text-accent" size={20} />
                </div>
                <h3 className="text-lg font-medium mb-2">{t.title}</h3>
                <p className="text-sm opacity-60 font-light leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formatos */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-sage-light mb-3 font-medium">Como funciona</p>
            <h2 className="text-3xl md:text-4xl font-light text-sage mb-4">
              Formatos <span className="font-semibold">disponíveis</span>
            </h2>
            <p className="text-muted-foreground">Adaptado à rotina e à estrutura da sua empresa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {formatos.map((f, i) => (
              <Card key={i} className="border border-border">
                <CardContent className="p-7">
                  <div className="text-4xl font-light text-border mb-3">{f.num}</div>
                  <p className="text-sm font-medium text-sage uppercase tracking-wider mb-2">{f.title}</p>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Público */}
      <section className="py-20 px-4 bg-beige">
        <div className="container mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.2em] uppercase text-sage-light mb-3 font-medium">Para quem é</p>
          <h2 className="text-3xl md:text-4xl font-light text-sage mb-8">
            Quem se <span className="font-semibold">beneficia</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {publico.map((p, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-border text-sm text-sage">
                <span className="w-1.5 h-1.5 rounded-full bg-sage-light" />
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Formulário */}
      <section id="contato" className="py-20 px-4 bg-gradient-to-br from-sage to-sage/80 text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-accent mb-3 font-medium">Solicitar orçamento</p>
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Vamos conversar <span className="font-semibold">sobre a sua empresa?</span>
          </h2>
          <p className="opacity-70 mb-10 font-light">
            Preencha o formulário e retorno em até 24 horas úteis com uma proposta
            personalizada para o seu time.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left" onSubmit={(e) => e.preventDefault()}>
            <div>
              <Label className="text-xs uppercase tracking-wider opacity-60 mb-2 block">Seu nome</Label>
              <Input className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/40" placeholder="Nome completo" required />
            </div>
            <div>
              <Label className="text-xs uppercase tracking-wider opacity-60 mb-2 block">Empresa</Label>
              <Input className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/40" placeholder="Nome da empresa" required />
            </div>
            <div>
              <Label className="text-xs uppercase tracking-wider opacity-60 mb-2 block">Cargo / área</Label>
              <Input className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/40" placeholder="RH, Diretoria…" />
            </div>
            <div>
              <Label className="text-xs uppercase tracking-wider opacity-60 mb-2 block">Nº de colaboradores</Label>
              <Select>
                <SelectTrigger className="bg-white/10 border-white/20 text-primary-foreground"><SelectValue placeholder="Selecione" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="ate50">Até 50</SelectItem>
                  <SelectItem value="51-200">51 a 200</SelectItem>
                  <SelectItem value="201-500">201 a 500</SelectItem>
                  <SelectItem value="500+">Mais de 500</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-xs uppercase tracking-wider opacity-60 mb-2 block">Tema de interesse</Label>
              <Select>
                <SelectTrigger className="bg-white/10 border-white/20 text-primary-foreground"><SelectValue placeholder="Selecione" /></SelectTrigger>
                <SelectContent>
                  {temas.map((t) => (
                    <SelectItem key={t.title} value={t.title}>{t.title}</SelectItem>
                  ))}
                  <SelectItem value="sugestoes">Ainda não sei — quero sugestões</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-xs uppercase tracking-wider opacity-60 mb-2 block">Formato preferido</Label>
              <Select>
                <SelectTrigger className="bg-white/10 border-white/20 text-primary-foreground"><SelectValue placeholder="Selecione" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="presencial">Presencial em São Paulo</SelectItem>
                  <SelectItem value="online">Online ao vivo</SelectItem>
                  <SelectItem value="hibrido">Híbrido</SelectItem>
                  <SelectItem value="definir">A definir</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2">
              <Label className="text-xs uppercase tracking-wider opacity-60 mb-2 block">Contexto ou dúvidas</Label>
              <Textarea
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/40 min-h-[100px]"
                placeholder="Data prevista, número de participantes, objetivo da palestra…"
              />
            </div>
            <div className="md:col-span-2 text-center">
              <Button type="submit" size="lg" className="bg-white text-sage hover:bg-beige">
                Enviar solicitação
                <Send className="ml-2" size={16} />
              </Button>
              <p className="text-xs opacity-50 mt-4 font-light">
                Sem spam. Seus dados são usados apenas para retorno de contato.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Palestras;
