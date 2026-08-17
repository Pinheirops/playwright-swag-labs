# Playwright - Swag Labs
Projeto de estudo para praticar automação de testes end-to-end com **Playwright**, utilizando o site [Swag Labs (SauceDemo)](https://www.saucedemo.com/) como ambiente de testes.
 
O foco do projeto é aprender Playwright na prática, aplicando boas práticas de automação: Page Object Model, fixtures, uso de CI e documentação de testes.
 
Além da parte técnica, o projeto também é usado para praticar o **processo de automação de testes** como um todo, e não só a escrita de código. O fluxo seguido é:
1. Levantamento de requisitos da funcionalidade a ser testada;
2. Mapeamento dos fluxos e cenários que fazem sentido automatizar (priorizando os de maior valor/risco);
3. Documentação do plano de testes e dos casos de teste no **MeloQA**;
4. Implementação da automação (Page Objects + testes);
5. Execução via CI a cada alteração no repositório.

> Para objetivo, escopo e estratégia dos testes, consulte o [Plano de Testes](TEST_PLAN.md). Os casos de teste (pré-condições, passos e resultados esperados) são documentados e mantidos no **MeloQA**.
 
## Tecnologias Utilizadas
- [Playwright](https://playwright.dev/)
- JavaScript
- Node.js
- GitHub Actions (CI)
- MeloQA (gerenciamento de plano de testes e casos de teste)

## Estrutura do Projeto
```
├── tests/              # Casos de teste
├── pages/              # Page Objects (elementos e ações de cada página)
├── fixtures/           # Fixtures e dados de teste
├── utils/              # Funções e helpers reutilizáveis
├── .github/workflows/  # Pipeline de CI
├── playwright-report/  # Relatório HTML gerado após a execução
├── test-results/       # Resultados/artefatos da última execução
├── playwright.config.js
├── package.json
└── package-lock.json
```
 
## Configuração do Ambiente
 
### Pré-requisitos
- Node.js instalado (recomendado LTS)
```bash
node --version
npm --version
```
 
### Clonar o repositório
```bash
git clone git@github.com:seu-usuario/swag-labs-playwright.git
cd swag-labs-playwright
```
 
### Instalar dependências
```bash
npm install
```
 
### Instalar os navegadores do Playwright
```bash
npx playwright install
```
 
## Executar os Testes
 
Rodar toda a suíte:
```bash
npx playwright test
```
 
Rodar um arquivo de teste específico:
```bash
npx playwright test tests/login.spec.js
```
 
Rodar em modo headed (com o navegador visível):
```bash
npx playwright test --headed
```
 
Rodar em modo debug:
```bash
npx playwright test --debug
```
 
## Relatórios de Teste
 
O Playwright gera um relatório HTML nativo após a execução:
```bash
npx playwright show-report
```
 
## Integração Contínua (CI)
 
O projeto conta com um pipeline configurado em **GitHub Actions**, localizado em `.github/workflows/`, responsável por:
- Executar a suíte de testes automaticamente a cada `push` e `pull request` na branch principal;
- Rodar os testes em modo headless;
- Publicar o relatório de execução como artefato do workflow, disponível para download na aba **Actions** do repositório.

## Plano de Testes e Casos de Teste
 
- **[TEST_PLAN.md](TEST_PLAN.md)** — objetivo, escopo, ambiente, ferramentas e estratégia de testes, versionado junto com o código no repositório;
- **Casos de teste** — documentados e mantidos no **MeloQA**, com pré-condições, passos e resultados esperados.
## O que estou aprendendo com este projeto
 
Este projeto é um espaço de estudo, então além da automação em si, o objetivo é praticar o processo completo de um QA automatizador:
- Levantamento de requisitos antes de sair automatizando;
- Priorização de fluxos que realmente valem a pena automatizar;
- Documentação de plano de testes no repositório e de casos de teste em uma ferramenta de gerenciamento (MeloQA);
- Boas práticas de código (Page Object Model, reuso, organização de pastas);
- Integração e execução automática via CI.