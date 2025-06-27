document.addEventListener("DOMContentLoaded", () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1 }
      );
      document.querySelectorAll(".fade-in").forEach((el) =>
        observer.observe(el)
      );

      // Animação de digitação para o texto Sobre Mim
      const textoSobre =
        "Olá, sou Blendo Costa, formado em Análise e Desenvolvimento de Sistemas, apaixonado por desenvolvimento front-end. Meu foco é criar soluções digitais elegantes, acessíveis e com foco em performance e conversão. Atendo empresas, infoprodutores e negócios locais que desejam resultados reais com presença online de verdade.";
      const sobreElemento = document.getElementById("sobreTexto");
      let i = 0;

      function digitarTexto() {
        if (i < textoSobre.length) {
          sobreElemento.textContent += textoSobre.charAt(i);
          i++;
          setTimeout(digitarTexto, 25);
        }
      }

      digitarTexto();

      // Formulário WhatsApp
      document
        .getElementById("form-whatsapp")
        .addEventListener("submit", function (e) {
          e.preventDefault();
          const nome = document.getElementById("nome").value;
          const whatsapp = document.getElementById("whatsapp").value;
          const servico = document.getElementById("servico").value;
          const mensagem = `Olá, me chamo ${nome}. Estou interessado em ${servico}. Meu WhatsApp é: ${whatsapp}`;
          const url = `https://wa.me/5599999999999?text=${encodeURIComponent(
            mensagem
          )}`;
          window.open(url, "_blank");
        });
    });
