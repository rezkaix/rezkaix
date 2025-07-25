window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("journalForm");
  const tradeList = document.getElementById("tradeList");

  // Load saved trades
  function loadTrades() {
    const trades = JSON.parse(localStorage.getItem("rezkaix_trades") || "[]");
    tradeList.innerHTML = "";

    if (trades.length === 0) {
      tradeList.innerHTML = "<li style='color:gray;'>No trades saved yet.</li>";
      return;
    }

    trades.forEach((trade, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${trade.date}</strong> | ${trade.symbol} | ${trade.direction} | ${trade.result}<br />
        <small>${trade.entryTime} → ${trade.exitTime} | Tags: ${trade.tags}</small>
      `;
      tradeList.appendChild(li);
    });
  }

  // Save trade on submit
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

    form.reset();
    loadTrades();
    alert("✅ Trade Saved!");
  });

  loadTrades(); // Initial load
});
