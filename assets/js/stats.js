function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

fetch(
  "//cross.esporo.net/corsproxy/?apiurl=https://spore-o-meter.sporecommunity.com",
)
  .then((response) => response.json())
  .then((data) => {
    let totalUploads = formatNumber(data.totalAssetCount),
      totalUsers = formatNumber(data.totalUsers),
      dailyUploads = formatNumber(data.dayAssetCount),
      dailyUsers = formatNumber(data.dayUsers);

    document.querySelector("[data-total-uploads]").textContent =
      totalUploads;
    document.querySelector("[data-total-users]").textContent =
      totalUsers;
    document.querySelector("[data-daily-uploads]").textContent =
      dailyUploads;
    document.querySelector("[data-daily-users]").textContent =
      dailyUsers;
  })
  .catch((error) => {
    console.error("Erro ao buscar os dados:", error);
  });
