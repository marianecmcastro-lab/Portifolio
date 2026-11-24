// ─── CHAVE DE CONFIDENCIALIDADE ─────────────────────────────────────────
// false = tudo aberto (cadeados escondidos, card da Norma abre o case completo)
// true  = versão para publicar (cadeados, "Solicitar acesso", case resumido da Norma)
var BLOQUEADO = false;
// ────────────────────────────────────────────────────────────────────────

(function () {
  var root = document.documentElement;
  root.dataset.locked = BLOQUEADO ? 'true' : 'false';
  if (!BLOQUEADO) {
    document.addEventListener('DOMContentLoaded', function () {
      document.querySelectorAll('[data-unlocked-href]').forEach(function (a) {
        a.setAttribute('href', a.getAttribute('data-unlocked-href'));
      });
    });
  }
})();
