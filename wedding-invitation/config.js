/** Editable invitation details. Only the groom-family dinner is overridden. */
window.WEDDING_CONFIG = {
  groomDinner: {
    time: "VÀO LÚC 08 GIỜ 00",
    weekday: "Chủ Nhật",
    day: "25",
    monthYear: "10 - 2026",
    lunarDate: "(Tức ngày 16 tháng 09 năm Bính Ngọ)"
  }
};
(function applyWeddingConfig() {
  const mapping = {
    HEADLINE159: 'time',
    PARAGRAPH250: 'weekday',
    PARAGRAPH251: 'day',
    PARAGRAPH252: 'monthYear',
    PARAGRAPH249: 'lunarDate'
  };
  function apply() {
    for (const [id, key] of Object.entries(mapping)) {
      const target = document.querySelector('#' + id + ' .ladi-headline, #' + id + ' .ladi-paragraph');
      if (target) target.textContent = window.WEDDING_CONFIG.groomDinner[key];
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply);
  else apply();
})();
