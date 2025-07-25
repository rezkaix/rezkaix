document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("journalForm");
  const tradeList = document.getElementById("tradeList");

  function loadTrades() {
    const trades = JSON.parse(localStorage.getItem("rezkaix_trades") || "[]");
    tradeList.innerHTML = "";

    trades.forEach((trade, i) => {
      const li = document.createElement("li");
      li.textContent = `${trade.date} | ${trade.symbol} | ${trade.direction} | ${trade.result}`;
      tradeList.appendChild(li);
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const trade = {
      date: document.getElementById("date").value,
      symbol: document.getElementById("symbol").value,
      session: document.getElementById("session").value,
      entryTime: document.getElementById("entryTime").value,
      exitTime: document.getElementById("exitTime").value,
      direction: document.getElementById("direction").value,
      entryPrice: document.getElementById("entryPrice").value,
      exitPrice: document.getElementById("exitPrice").value,
      stopLoss: document.getElementById("stopLoss").value,
      takeProfit: document.getElementById("takeProfit").value,
      result: document.getElementById("result").value,
      tags: document.getElementById("tags").value,
      notes: document.getElementById("notes").value
    };

    const trades = JSON.parse(localStorage.getItem("rezkaix_trades") || "[]");
    trades.push(trade);
    localStorage.setItem("rezkaix_trades", JSON.stringify(trades));

    alert("✅ Trade Saved!");
    form.reset();
    loadTrades(); // 🔁 Refresh list
  });

  loadTrades(); // 🟢 Load on first visit
});
